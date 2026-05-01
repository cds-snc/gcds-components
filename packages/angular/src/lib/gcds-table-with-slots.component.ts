import {
  Component,
  Input,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
  EmbeddedViewRef,
  NgZone,
  QueryList,
  ContentChildren,
  AfterContentInit,
} from '@angular/core';
import type { TableColumn, GcdsTableStateChange } from '@gcds-core/components';
import { GcdsCellDirective } from './directives/gcds-cell.directive';

export interface AngularTableColumn extends TableColumn {
  cellTemplate?: TemplateRef<{ $implicit: unknown; rowId: string }>;
}

@Component({
  selector: 'gcds-table-ng',
  standalone: false,
  template: `
    <gcds-table
      #tableEl
      [columns]="wcColumns"
      [data]="data"
      [filter]="filter"
      [filterValue]="filterValue"
      [pagination]="pagination"
      [paginationCurrentPage]="paginationCurrentPage"
      [paginationSize]="paginationSize"
      [paginationSizeOptions]="paginationSizeOptions"
      [sort]="sort"
    >
      <ng-content></ng-content>
    </gcds-table>
  `,
})
export class GcdsTableWithSlotsComponent
  implements AfterViewInit, AfterContentInit, OnDestroy
{
  @Input() columns: AngularTableColumn[] = [];
  @Input() data: Record<string, unknown>[] = [];
  @Input() filter = false;
  @Input() filterValue = '';
  @Input() pagination = false;
  @Input() paginationCurrentPage = 1;
  @Input() paginationSize = 10;
  @Input() paginationSizeOptions: number[] = [10, 25, 50];
  @Input() sort = false;

  @ViewChild('tableEl', { read: ElementRef })
  tableElRef!: ElementRef<HTMLElement>;

  @ContentChildren(GcdsCellDirective)
  cellTemplates!: QueryList<GcdsCellDirective>;

  private resolvedEl: HTMLElement | null = null;
  private embeddedViews = new Map<string, EmbeddedViewRef<unknown>>();
  private stateChangeListener: ((e: Event) => void) | null = null;

  constructor(
    private vcr: ViewContainerRef,
    private zone: NgZone,
  ) {}

  private getRawEl(): HTMLElement | null {
    return this.tableElRef?.nativeElement ?? null;
  }

  private get templateMap(): Map<string, TemplateRef<any>> {
    return new Map(this.cellTemplates.map(d => [d.field, d.template]));
  }

  get wcColumns(): TableColumn[] {
    const templateMap = this.templateMap;

    return this.columns.map(col => ({
      ...col,
      managed: templateMap.has(col.field) ? true : undefined,
    }));
  }

  get slottedColumns(): { field: string; template: TemplateRef<any> }[] {
    return this.cellTemplates.map(d => ({
      field: d.field,
      template: d.template,
    }));
  }

  ngAfterContentInit(): void {
    this.cellTemplates.changes.subscribe(() => {
      this.remountAllVisible();
    });
  }

  ngAfterViewInit(): void {
    const rawEl = this.getRawEl();
    if (!rawEl) return;

    this.zone.runOutsideAngular(() => {
      customElements.whenDefined('gcds-table').then(async () => {
        await (rawEl as any).componentOnReady?.();
        this.resolvedEl = rawEl;

        this.stateChangeListener = (e: Event) => {
          const detail = (e as CustomEvent<GcdsTableStateChange>).detail;
          this.mountCells(detail.visibleRows);
        };

        this.resolvedEl.addEventListener(
          'gcdsTableStateChange',
          this.stateChangeListener,
        );

        const visibleRows = await (this.resolvedEl as any).getVisibleRows();
        if (visibleRows?.length) {
          this.mountCells(visibleRows);
        }
      });
    });
  }

  ngOnDestroy(): void {
    if (this.resolvedEl && this.stateChangeListener) {
      this.resolvedEl.removeEventListener(
        'gcdsTableStateChange',
        this.stateChangeListener,
      );
    }

    this.embeddedViews.forEach(v => v.destroy());
    this.embeddedViews.clear();
  }

  private remountAllVisible(): void {
    if (!this.resolvedEl) return;

    (this.resolvedEl as any).getVisibleRows?.().then((rows: any[]) => {
      if (rows?.length) {
        this.mountCells(rows);
      }
    });
  }

  private removeStaleViews(visibleRowIds: Set<string>): void {
    this.embeddedViews.forEach((view, key) => {
      const rowId = key.split('||')[1];
      if (!visibleRowIds.has(rowId)) {
        view.destroy();
        this.embeddedViews.delete(key);
      }
    });
  }

  private async mountCells(
    visibleRows: GcdsTableStateChange['visibleRows'],
  ): Promise<void> {
    const tableEl = this.resolvedEl;
    if (!tableEl) return;

    const shadowRoot = tableEl.shadowRoot;
    if (!shadowRoot) return;

    const templateMap = this.templateMap;
    const visibleRowIds = new Set(visibleRows.map(r => r.rowId));

    this.zone.run(() => {
      this.removeStaleViews(visibleRowIds);

      visibleRows.forEach(({ rowId, original }) => {
        templateMap.forEach((template, field) => {
          const key = `${field}||${rowId}`;

          const td = shadowRoot.querySelector(
            `[data-cell="${field}-${rowId}"]`,
          ) as HTMLElement | null;

          if (!td) return;

          // Create or reuse a dedicated container
          let container = td.querySelector(
            '[data-angular-cell]',
          ) as HTMLElement | null;

          if (!container) {
            container = document.createElement('div');
            container.setAttribute('data-angular-cell', '');
            td.appendChild(container);
          }

          // Clean previous render
          if (this.embeddedViews.has(key)) {
            this.embeddedViews.get(key)!.destroy();
            this.embeddedViews.delete(key);
            container.innerHTML = '';
          }

          const view = this.vcr.createEmbeddedView(template, {
            $implicit: original,
            rowId,
          });

          view.detectChanges();

          view.rootNodes.forEach(node => {
            container!.appendChild(node);
          });

          this.embeddedViews.set(key, view);
        });
      });
    });
  }
}
