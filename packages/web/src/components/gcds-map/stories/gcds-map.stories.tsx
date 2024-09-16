const LAYER_OPTIONS = [
  ['/dist/gcds/gcds-map/mapml/en/cbmtile/toporama', 'Toporama'],
  ['/dist/gcds/gcds-map/mapml/en/cbmtile/cbmt', 'Canada Base Map - Transportation'],
  ['/dist/gcds/gcds-map/mapml/en/osmtile/osm', 'OpenStreetMap'],
  ['/dist/gcds/gcds-map/mapml/en/apstile/arctic', 'Arctic Ocean Basemap MapML Service']
];

// Build a mapping object so we can show titles in the dropdown but store the URL as the actual value
const layerMap = LAYER_OPTIONS.reduce((obj, [url, title]) => {
  obj[title] = url;
  return obj;
}, {});

export default {
  title: 'Components/Map',

  argTypes: {
    lat: {
      name: 'Latitude',
      control: { type: 'number' },
      defaultValue: 66.5
    },
    lon: {
      name: 'Longitude',
      control: { type: 'number' },
      defaultValue: -106
    },
    zoom: {
      name: 'Zoom Level',
      control: { type: 'number' },
      defaultValue: 2
    },
    projection: {
      name: 'Projection',
      control: { type: 'select' },
      options: ['OSMTILE', 'CBMTILE','APSTILE', 'WGS84'],
      defaultValue: 'OSMTILE'
    },
    layer: {
      name: 'Layer',
      control: 'select',
      options: Object.keys(layerMap),
      mapping: layerMap,
      defaultValue: '/dist/gcds/gcds-map/mapml/en/cbmtile/toporama'
    },
    controlslist: {
      name: 'controlslist',
      control: 'multi-select',
      options: ['geolocation', 'nofullscreen', 'nozoom', 'nolayer', 'noreload', 'noscale'],
      table: {
        type: { summary: 'Space-separated list of tokens for controls to display' },
        defaultValue: { summary: 'Empty string' },
      },
    },
    caption: {
      name: 'Caption',
      control: { type: 'text' },
    }
  }
};

const TemplateBasic = (args) => {
  return `
    <mapml-viewer lat="${args.lat}" lon="${args.lon}" zoom="${args.zoom}"
      projection="${args.projection}" ${args.controls ? 'controls' : ''} 
      controlslist="${args.controlslist.length > 0 ? args.controlslist.join(' ') : ''}">
      <map-caption>${args.caption}</map-caption>

      <map-layer src="${args.layer}" checked="true"></map-layer>
    </mapml-viewer>
  `;
};

export const Default = TemplateBasic.bind({});
Default.args = {
  lat: 66.5,
  lon: -106,
  zoom: 2,
  projection: 'OSMTILE',
  controls: true,
  controlslist: ['geolocation'],
  layer: '/dist/gcds/gcds-map/mapml/en/osmtile/cbmt',
  caption: 'A map of Canada'
};
