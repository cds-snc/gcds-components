import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GcdsComponentsModule } from '@gcds-core/components-angular';
import type { AngularTableColumn } from '@gcds-core/components-angular';

async function getFirst151Pokemon() {
  try {
    // Step 1: Get the first 151 Pokémon (just names + URLs)
    const listResponse = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=151',
    );
    const listData = await listResponse.json();

    // Step 2: Fetch full details for each Pokémon
    const pokemonDetails = await Promise.all(
      listData.results.map(async (pokemon: any) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();

        return {
          number: data.id,
          name: data.name,
          height: data.height,
          weight: data.weight,
          base_experience: data.base_experience,
        };
      }),
    );

    return pokemonDetails;
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
    return [];
  }
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, GcdsComponentsModule],
  template: `
    <gcds-breadcrumbs hide-canada-link>
      <gcds-breadcrumbs-item href="/home" routerLink="/home">
        Home
      </gcds-breadcrumbs-item>
    </gcds-breadcrumbs>

    <gcds-heading tag="h1">Table Test</gcds-heading>

    <section class="b-solid p-300 mb-300" id="table">
      <gcds-heading tag="h2" margin-top="0">Gcds-table</gcds-heading>
      <p>Testing whether the table still functions properly in Angular.</p>

      <gcds-heading tag="h3" margin-top="0">With slots</gcds-heading>

      <gcds-table-ng
        id="table-slots"
        [columns]="columns"
        [data]="data"
        [pagination]="true"
        [filter]="true"
        [sort]="true"
      >
        <div slot="caption">
          <gcds-heading tag="h4">Pokémon - slots</gcds-heading>
          Table of the best Pokémon (first generation).
        </div>
        <ng-template gcdsCell="sprite" let-row let-rowIndex="rowIndex">
          <img
            [src]="
              row.number
                ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
                  row.number +
                  '.png'
                : ''
            "
            [alt]="row.name"
          />
        </ng-template>
        <ng-template gcdsCell="actions" let-row let-rowIndex="rowIndex">
          <gcds-button button-role="secondary" (click)="logRow(row)">
            Console log row data
          </gcds-button>
        </ng-template>
      </gcds-table-ng>
    </section>
  `,
})
export class TableComponent {
  @ViewChild('spriteCell') spriteCell!: TemplateRef<unknown>;
  @ViewChild('actionsCell') actionsCell!: TemplateRef<unknown>;
  pokemonData: any[] = [];

  async ngOnInit() {
    const data = await getFirst151Pokemon();

    if (data) {
      this.pokemonData = data;
    }
  }
  get columns(): AngularTableColumn[] {
    return [
      {
        field: 'number',
        header: 'Pokédex',
        alignment: 'end',
        rowHeader: true,
      },
      {
        field: 'name',
        header: 'Name',
      },
      {
        field: 'sprite',
        header: 'Sprite',
        alignment: 'center',
        sort: false,
        slotted: true,
      },
      { field: 'height', header: 'Height', alignment: 'end' },
      { field: 'weight', header: 'Weight', alignment: 'end' },
      {
        field: 'base_experience',
        header: 'Base experience',
        sort: false,
        alignment: 'end',
      },
      {
        field: 'actions',
        header: 'Actions',
        alignment: 'center',
        sort: false,
        slotted: true,
      },
    ];
  }

  get data() {
    return this.pokemonData;
  }

  logRow(row: any) {
    console.log(row);
  }
}
