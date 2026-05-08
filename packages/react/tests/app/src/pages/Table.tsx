import { useState, useEffect } from 'react';
import {
  GcdsTable,
  GcdsHeading,
  GcdsBreadcrumbs,
  GcdsBreadcrumbsItem,
  GcdsButton,
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
          pagination={true}
          filter={true}
          sort={true}
          paginationSizeOptions={[10, 25, 50, 0]}
          columns={[
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
              renderCell: ({ row }) => {
                return (
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${row.number}.png`}
                    alt={row.name as string}
                    width={150}
                    height={150}
                  />
                );
              },
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
              renderCell: ({ row }) => {
                return (
                  <GcdsButton
                    buttonRole="secondary"
                    onClick={() => console.log(row)}
                  >
                    Console log row data
                  </GcdsButton>
                )
              }
            },
          ]}
          data={pokemonData as Record<string, unknown>[]}
        >
          <div slot="caption">
            <GcdsHeading tag="h3">Pokémon</GcdsHeading>
            Table of the best Pokémon (first generation).
          </div>
        </GcdsTable>
      </section >
    </>
  );
};

export default Table;