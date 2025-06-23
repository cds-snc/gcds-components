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

  constructor(private router: Router) {}

  ngOnInit() {}

  @HostListener('gcdsClick', ['$event'])
  onGcdsClick(event: CustomEvent) {
    event.preventDefault();

    let commands;

    if (this.routerLink !== '' && this.routerLink != null) {
      commands = this.routerLink;
    } else if (typeof event.detail === 'object' && event.detail !== null) {
      commands = event.detail.href;
    } else {
      commands = event.detail;
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
