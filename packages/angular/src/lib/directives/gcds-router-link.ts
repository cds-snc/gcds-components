import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Directive({
  selector:
    'gcds-breadcrumbs-item[routerLink], gcds-button[routerLink], gcds-card[routerLink], gcds-header[routerLink], gcds-lang-toggle[routerLink], gcds-link[routerLink], gcds-nav-link[routerLink], [gcdsRouterLink]',
  standalone: false,
})
export class GcdsRouterDirective implements OnInit {
  @Input() routerLink!: string | any[];
  @Input() queryParams?: { [k: string]: any };
  @Input() fragment?: string;
  @Input() routerLinkActive?: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  @HostListener('gcdsClick', ['$event'])
  onGcdsClick(event: CustomEvent) {
    event.preventDefault();

    const commands =
      this.routerLink !== '' && this.routerLink != null
        ? this.routerLink
        : typeof event.detail === 'object' && event.detail !== null
          ? event.detail.href
          : event.detail;

    const extras: NavigationExtras = {
      queryParams: this.queryParams,
      fragment: this.fragment,
    };

    if (Array.isArray(commands)) {
      this.router.navigate(commands, extras);
    } else if (typeof commands === 'string') {
      console.log('I am here', commands);
      this.router.navigateByUrl(commands, extras);
    } else {
      console.warn('Invalid routerLink or event detail:', commands);
    }
  }
}
