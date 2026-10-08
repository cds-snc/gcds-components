import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Directive({
  selector:
    'gcds-breadcrumbs-item[routerLink], gcds-button[routerLink], gcds-card[routerLink], gcds-header[routerLink], gcds-lang-toggle[routerLink], gcds-link[routerLink], gcds-nav-link[routerLink], [gcdsRouterLink]',
  standalone: true,
})
export class GcdsRouterDirective implements OnInit, OnDestroy {
  @Input() routerLink!: string | any[];
  @Input() queryParams?: { [k: string]: any };
  @Input() fragment?: string;

  /**
   * Modifier keys of the last click. Older components only send the href in gcdsClick,
   * so the click is captured before it reaches the shadow DOM.
   */
  private modifiedClick = false;

  constructor(
    private router: Router,
    private el: ElementRef<HTMLElement>,
  ) {}

  private captureClick = (e: MouseEvent) => {
    this.modifiedClick =
      e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
  };

  ngOnInit() {
    this.el.nativeElement.addEventListener('click', this.captureClick, true);
  }

  ngOnDestroy() {
    this.el.nativeElement.removeEventListener('click', this.captureClick, true);
  }

  @HostListener('gcdsClick', ['$event'])
  onGcdsClick(event: CustomEvent) {
    const detail = event.detail;
    const hasNavDetail =
      typeof detail === 'object' && detail !== null && 'shouldRoute' in detail;

    // Leave new tab / new window clicks and external links to the browser
    const shouldRoute = hasNavDetail ? detail.shouldRoute : !this.modifiedClick;
    this.modifiedClick = false;
    if (!shouldRoute) return;

    event.preventDefault();

    let commands;

    if (this.routerLink !== '' && this.routerLink != null) {
      commands = this.routerLink;
    } else if (hasNavDetail) {
      // gcds-nav: path is already same origin and ready for the router
      commands = detail.path;
    } else if (typeof detail === 'object' && detail !== null) {
      commands = detail.href;
    } else {
      commands = detail;
    }

    const extras: NavigationExtras = {
      queryParams: this.queryParams,
      fragment: this.fragment,
    };

    if (Array.isArray(commands)) {
      this.router.navigate(commands, extras);
    } else if (typeof commands === 'string') {
      this.router.navigateByUrl(commands, extras);
    } else {
      console.warn('Invalid routerLink or event detail:', commands);
    }
  }
}
