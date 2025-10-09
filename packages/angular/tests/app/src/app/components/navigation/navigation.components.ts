import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GcdsComponentsModule } from '@cdssnc/gcds-components-angular';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, GcdsComponentsModule],
  template: `
    <gcds-breadcrumbs [hideCanadaLink]="true">
      <gcds-breadcrumbs-item href="/home" routerLink="/home">
        Home
      </gcds-breadcrumbs-item>
    </gcds-breadcrumbs>

    <gcds-heading tag="h1"> Navigation components </gcds-heading>

    <gcds-text>
      Page to show our navigation components take advantage of routerLink.
    </gcds-text>

    <gcds-text>
      All links point to: <strong>{{ path }}</strong>
    </gcds-text>

    <section id="breadcrumb-item" class="mb-400">
      <gcds-breadcrumbs-item href="{{ path }}" routerLink="{{ path }}">
        Breadcrumb item
      </gcds-breadcrumbs-item>
    </section>

    <section id="button-component" class="mb-400">
      <gcds-button
        type="link"
        href="{{ path }}"
        routerLink="{{ path }}"
        routerLinkActive="active"
      >
        Button component
      </gcds-button>
    </section>

    <section id="card-component" class="mb-400">
      <gcds-card
        card-title="Card component"
        href="{{ path }}"
        routerLink="{{ path }}"
        badge="badge"
        description="Description or supporting text relating to the headline."
      >
      </gcds-card>
    </section>

    <section id="lang-toggle" class="mb-400">
      <gcds-lang-toggle
        href="{{ path }}"
        routerLink="{{ path }}"
        lang="fr"
      ></gcds-lang-toggle>
    </section>

    <section id="link-component" class="mb-400">
      <gcds-link href="{{ path }}" routerLink="{{ path }}">
        Link component
      </gcds-link>
    </section>

    <section id="nav-link-component" class="mb-400">
      <gcds-nav-link href="{{ path }}" routerLink="{{ path }}">
        Nav link component
      </gcds-nav-link>
    </section>
  `,
})
export class NavComponent implements OnInit {
  path = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.path = this.route.snapshot.data['path'];
  }
}
