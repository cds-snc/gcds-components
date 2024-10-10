export default {
  title: 'Components/Map',
  argTypes: {
      projection: {
        name: 'projection',
        control: 'select',
        options: ['OSMTILE', 'CBMTILE', 'WGS84'],
        table: {
          type: { summary: 'Tiled CRS name' },
          defaultValue: { summary: 'OSMTILE (Web Mercator)' },
        },
        type: { required: false }
      }
    }
};

const Template = (args) => `
  <gcds-map lat="${args.lat}" lon="${args.lon}" zoom="${args.zoom}" controls>
    <gcds-map-layer
      label="Canada Base Map - Transportation (CBMT)"
      src="https://geogratis.gc.ca/mapml/en/osmtile/cbmt/"
      checked="${args.checked}"
    ></gcds-map-layer>
    <gcds-map-layer
      label="Another Layer"
      src="https://geogratis.gc.ca/mapml/en/osmtile/kNN_LandCover_VegTreed_250m/"
    ></gcds-map-layer>
  </gcds-map>
`;

// each named export is a 'story'
export const Default = Template.bind({});
Default.args = {
  lat: 66.5,
  lon: -106,
  zoom: 2,
  projection: 'OSMTILE',
  controls: true,
  checked: true
};

export const CustomMap = Template.bind({});
CustomMap.args = {
  lat: 40.7128,
  lon: -74.0060,
  zoom: 8,
  layer1Opacity: 0.8,
  checked: false,
};
