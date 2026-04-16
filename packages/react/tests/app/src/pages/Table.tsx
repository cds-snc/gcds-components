import { useState, useEffect } from 'react';
import {
  GcdsTable,
  GcdsHeading,
  GcdsBreadcrumbs,
  GcdsBreadcrumbsItem,
} from '@gcds-core/components-react';

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

const Table = () => {
  const [pokemonData, setPokemonData] = useState<object[]>([]);

  useEffect(() => {
    getFirst151Pokemon().then(data => {
      if (data) {
        setPokemonData(data);
      }
    });
  }, []);

  return (
    <>
      <GcdsBreadcrumbs hideCanadaLink>
        <GcdsBreadcrumbsItem href="/">
          Home
        </GcdsBreadcrumbsItem>
      </GcdsBreadcrumbs>

      <GcdsHeading tag="h1">Table Test</GcdsHeading>

      <section className="b-solid p-300 mb-300" id="table">
        <GcdsHeading tag="h2">Gcds-table</GcdsHeading>
        <p>Testing whether the table still functions properly in React.</p>

        <GcdsTable
          sort={true}
          pagination={true}
          filter={true}
          columns={[
            {
              field: 'number',
              header: 'Pokédex',
              align: 'end',
              rowHeader: true,
            },
            {
              field: 'name',
              header: 'Name',
              sortDirection: 'asc',
            },
            {
              field: 'sprite',
              header: 'Sprite',
              align: 'center',
              sort: false,
              renderCell: (_, row) => {
                const img = document.createElement('img');
                img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${row.number}.png`;
                img.alt = row.name as string;
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
              // This won't work in React
              // renderCell: (_, row) => {
              //   return (
              //     <GcdsButton
              //       buttonRole="secondary"
              //       onClick={() => {
              //         if (row.number === 7) {
              //           alert(`You clicked on ${row.name}! The best Pokémon!`);
              //         } else {
              //           alert(`This is ${row.name}, not Squirtle!`);
              //         }
              //       }}
              //     >
              //       Alert name
              //     </GcdsButton>
              //   );
              // },

              renderCell: (_, row) => {
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
          ]}
          data={pokemonData}
        >
          <div slot="caption">
            <h2>Pokémon</h2>
            Table of the best Pokémon (first generation).
          </div>
        </GcdsTable>
      </section>
    </>
  );
};

export default Table;