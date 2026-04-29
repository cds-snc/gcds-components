<script setup>
import { ref, onMounted, h } from 'vue'
import { GcdsTableWithSlots } from '@gcds-core/components-vue'

// the first argument must match the ref value in the template
const input = ref(null)
const table = ref(null);
const tableSlot = ref(null);
const slotData = ref([]);

async function getFirst151Pokemon() {
  try {
    // Step 1: Get the first 151 Pokémon (just names + URLs)
    const listResponse = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=151',
    );
    const listData = await listResponse.json();

    // Step 2: Fetch full details for each Pokémon
    const pokemonDetails = await Promise.all(
      listData.results.map(async pokemon => {
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
  }
}

onMounted(async () => {
    // Populate the table columns
    table.value.columns = [
      {
        field: 'number',
        header: 'Pokédex',
        align: 'end',
        rowHeader: true,
      },
      {
        field: 'name',
        header: 'Name',
      },
      {
        field: 'sprite',
        header: 'Sprite',
        align: 'center',
        sort: false,
        renderCell: (value, row) => {
          const img = document.createElement('img');
          img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${row.number}.png`;
          img.alt = row.name;
          img.width = 150;
          img.height = 150;
          return img;
        },
      },
      { field: 'height', header: 'Height', align: 'end' },
      { field: 'weight', header: 'Weight', align: 'end' },
      {
        field: 'base_experience',
        header: 'Base experience',
        sort: false,
        align: 'end',
      },
      {
        field: 'actions',
        header: 'Actions',
        align: 'center',
        sort: false,
        // Won't work in Vue
        // renderCell: (_, row) => {
        //   return h(
        //     'gcds-button',
        //     {
        //       buttonRole: 'secondary',
        //       onClick: () => {
        //         if (row.number === 7) {
        //           alert(`You clicked on ${row.name}! The best Pokémon!`);
        //         } else {
        //           alert(`This is ${row.name}, not Squirtle!`);
        //         }
        //       },
        //     },
        //     'Alert name',
        //   );
        // }
        renderCell: (value, row) => {
          const button = document.createElement('gcds-button');
          button.setAttribute('button-role', 'secondary');
          button.textContent = 'Alert name';
          button.addEventListener('click', () => {
            if (row.number === 7) {
              alert(`You clicked on ${row.name}! The best Pokémon!`);
            } else {
              alert(`This is ${row.name}, not Squirtle!`);
            }
          });
          return button;
        },
      },
    ];


  // Populate the table rows with results from API
  getFirst151Pokemon().then(pokemon => {
    table.value.data = pokemon;
  });

  slotData.value = await getFirst151Pokemon();
})
</script>

<template>
  <gcds-breadcrumbs hide-canada-link>
      <gcds-breadcrumbs-item href="/">
        Home
      </gcds-breadcrumbs-item>
    </gcds-breadcrumbs>

    <gcds-heading tag="h1">Table Test</gcds-heading>

    <section class="b-solid p-300 mb-300" id="table-test">
      <gcds-heading tag="h2">Gcds-table</gcds-heading>
      <p>Testing whether the table still functions properly in Vue.</p>

      <gcds-heading tag="h4">With slots</gcds-heading>

      <GcdsTableWithSlots
        ref="tableSlot"
        id="my-table-slots"
        :pagination="true"
        :filter="true"
        :data="slotData"
        :sort="true"
        :columns="[
          {
            field: 'number',
            header: 'Pokédex',
            align: 'end',
            rowHeader: true,
          },
          {
            field: 'name',
            header: 'Name',
          },
          {
            field: 'sprite',
            header: 'Sprite',
            align: 'center',
            sort: false,
            slotted: true,
          },
          { field: 'height', header: 'Height', align: 'end' },
          { field: 'weight', header: 'Weight', align: 'end' },
          {
            field: 'base_experience',
            header: 'Base experience',
            sort: false,
            align: 'end',
          },
          {
            field: 'actions',
            header: 'Actions',
            align: 'center',
            sort: false,
            slotted: true,
          },
        ]"
      >
        <div slot="caption">
          <gcds-heading tag="h4">Pokémon - Slots</gcds-heading>
          Table of the best Pokémon (first generation).
        </div>
        <template #cell:sprite="{ row }">
          <img
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${row.number}.png`"
            :alt="row.name"
            :data-test="row.name"
            width="150"
            height="150"
          />
        </template>
        <template #cell:actions="{ row }">
          <gcds-button
            button-role="secondary"
            @click="() => {
              console.log(row);
            }"
          >
            Console log row data
          </gcds-button>
        </template>
      </GcdsTableWithSlots>

      <gcds-heading tag="h3">With renderCell</gcds-heading>

      <gcds-table
        id="my-table"
        ref="table"
        sort="true"
        pagination="true"
        pagination-current-page="1"
        filter="true"
      >
        <div slot="caption">
          <gcds-heading tag="h4">Pokémon</gcds-heading>
          Table of the best Pokémon (first generation).
        </div>
      </gcds-table>
    </section>
</template>