import {
  Component,
  Input,
  TemplateRef,
  QueryList,
  ContentChildren,
  AfterContentInit,
  AfterViewInit,
  OnChanges,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import type { TableColumn } from '@gcds-core/components';
import { GcdsCellDirective } from './directives/gcds-cell.directive';

export interface AngularTableColumn extends TableColumn {
  cellTemplate?: TemplateRef<{ $implicit: unknown; rowId: string }>;
}

const COMPONENT_INPUTS = new Set([
  'columns',
  'data',
  'filter',
  'filtervalue',
  'pagination',
  'paginationcurrentpage',
  'paginationsize',
  'paginationsizeoptions',
  'sort',
]);

@Component({
  selector: 'gcds-table-ng',
  standalone: false,
  template: `
    <gcds-table
      #gcdsTable
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
      <ng-content select="[slot='caption']"></ng-content>

      <ng-container *ngFor="let row of data; let rowIndex = index">
        <ng-container *ngFor="let column of columns">
          <span
            *ngIf="getTemplate(column.field) as template"
            [attr.slot]="getSlotName(row, column, rowIndex)"
          >
            <ng-container
              [ngTemplateOutlet]="template"
              [ngTemplateOutletContext]="{
                $implicit: row,
                row: row,
                rowIndex: rowIndex,
                column: column,
                value: getCellValue(row, column.field),
              }"
            ></ng-container>
          </span>
        </ng-container>
      </ng-container>

      <ng-content></ng-content>
    </gcds-table>
  `,
})
export class GcdsTableWithSlotsComponent
  implements AfterContentInit, AfterViewInit, OnChanges
{
  @Input() columns: AngularTableColumn[] = [];
  @Input() data: Record<string, unknown>[] = [];
  @Input() filter = false;
  @Input() filterValue = '';
  @Input() pagination = false;
  @Input() paginationCurrentPage = 1;
  @Input() paginationSize = 10;
  @Input() paginationSizeOptions: number[] = [10, 25, 50, 0];
  @Input() sort = false;

  @ContentChildren(GcdsCellDirective)
  cellTemplates!: QueryList<GcdsCellDirective>;

  @ViewChild('gcdsTable', { read: ElementRef })
  gcdsTableEl!: ElementRef<HTMLElement>;

  private _wcColumns: TableColumn[] = [];

  get wcColumns(): TableColumn[] {
    return this._wcColumns;
  }

  constructor(
    private host: ElementRef<HTMLElement>,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    this.forwardHostAttrs();
  }

  ngAfterContentInit(): void {
    this._wcColumns = this.computeWcColumns();

    this.cellTemplates.changes.subscribe(() => {
      this._wcColumns = this.computeWcColumns();
    });
  }

  ngOnChanges(): void {
    if (this.cellTemplates) {
      this._wcColumns = this.computeWcColumns();
    }
  }

  private forwardHostAttrs(): void {
    const hostAttrs = this.host.nativeElement.attributes;

    for (let i = 0; i < hostAttrs.length; i++) {
      const { name, value } = hostAttrs[i];

      // Skip Angular internals and anything owned by @Input
      if (
        name.startsWith('_ng') ||
        name.startsWith('ng-') ||
        COMPONENT_INPUTS.has(name.toLowerCase())
      ) {
        continue;
      }

      this.renderer.setAttribute(this.gcdsTableEl.nativeElement, name, value);
      this.renderer.removeAttribute(this.host.nativeElement, name);
    }
  }

  private computeWcColumns(): TableColumn[] {
    const templateMap = new Map(
      this.cellTemplates.map(d => [d.field, d.template]),
    );

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

  private get templateMap(): Map<string, TemplateRef<any>> {
    return new Map(this.cellTemplates.map(d => [d.field, d.template]));
  }

  getTemplate(field: string): TemplateRef<any> | null {
    return this.templateMap.get(field) ?? null;
  }

  getCellValue(row: Record<string, unknown>, field: string): unknown {
    return row?.[field as keyof typeof row];
  }

  getRowKey(row: Record<string, unknown>, rowIndex: number): string {
    const candidate = row?.['id'];

    if (candidate === null || candidate === undefined || candidate === '') {
      return String(rowIndex);
    }

    return String(candidate);
  }

  getSlotName(
    row: Record<string, unknown>,
    column: AngularTableColumn,
    rowIndex: number,
  ): string {
    return `cell-${this.getRowKey(row, rowIndex)}-${column.field}`;
  }
}
