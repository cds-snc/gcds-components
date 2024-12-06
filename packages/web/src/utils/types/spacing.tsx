// The type representing individual spacing unit values
export type SpacingValues =
  | '0'
  | '25'
  | '50'
  | '75'
  | '100'
  | '125'
  | '150'
  | '175'
  | '200'
  | '225'
  | '250'
  | '300'
  | '350'
  | '400'
  | '450'
  | '500'
  | '550'
  | '600'
  | '650'
  | '700'
  | '750'
  | '800'
  | '850'
  | '900'
  | '950'
  | '1000'
  | '1050'
  | '1100'
  | '1150'
  | '1200'
  | '1250';

// Helper function to generate SpacingArray dynamically
export function generateSpacingArray(): SpacingValues[] {
  const values = [];

  for (let i = 0; i <= 1250; i += 25) {
    values.push(i.toString() as SpacingValues);
  }

  return values;
}

export const SpacingArray = generateSpacingArray();