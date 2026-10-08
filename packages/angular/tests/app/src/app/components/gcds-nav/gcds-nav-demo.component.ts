import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GcdsComponentsModule } from '@gcds-core/components-angular';
import type { NavItem } from '@gcds-core/components';

@Component({
  selector: 'app-gcds-nav-demo',
  standalone: true,
  imports: [GcdsComponentsModule],
  template: `
    <!-- Items input -->
    <gcds-nav variant="top" label="Top navigation" [items]="topNavItems"></gcds-nav>

    <div class="d-flex gap-400 mt-400">
      <!-- Child elements, routed by provideGcdsRouting() without any routerLink -->
      <gcds-nav variant="side" label="Section navigation">
        <gcds-nav-link href="/navigation/start">Start to use</gcds-nav-link>
        <gcds-nav-group open-trigger="Components">
          <gcds-nav-link href="/navigation/alert">Alert</gcds-nav-link>
          <gcds-nav-link href="/navigation/button">Button</gcds-nav-link>
        </gcds-nav-group>
      </gcds-nav>

      <div>
        <gcds-heading tag="h1">Navigation: {{ page() }}</gcds-heading>
      </div>
    </div>
  `,
})
export class GcdsNavDemoComponent {
  page = toSignal(
    inject(ActivatedRoute).paramMap.pipe(map(params => params.get('page') ?? 'home')),
  );

  topNavItems: NavItem[] = [
    { label: 'Navigation test', href: '/navigation', home: true },
    { label: 'Products', href: '/navigation/products' },
    { label: 'About', href: '/navigation/about' },
    {
      label: 'Resources',
      children: [
        { label: 'Blog', href: '/navigation/blog' },
        { label: 'Guides', href: '/navigation/guides' },
      ],
    },
    { label: 'Canada.ca', href: 'https://www.canada.ca/', external: true },
  ];
}
