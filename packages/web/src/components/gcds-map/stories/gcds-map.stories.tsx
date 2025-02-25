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
      name: 'lat',
      control: { type: 'number' },
      table: {
        type: { summary: 'A decimal number between +/- 90.  Positive numbers are north of the equator. Latitudes which are meaningful depend on the projection system used.' },
        defaultValue: { summary: '0' }
      }
    },
    lon: {
      name: 'lon',
      control: { type: 'number', min: -180.0, max: +180.0 },
      table: {
        type: { summary: 'A decimal number between +/- 180.  Positive numbers are east of the meridian at Greenwich, UK.  Longitudes which are meaningful depend on the projection system used. ' },
        defaultValue: { summary: '0' }
      }
    },
    zoom: {
      name: 'zoom',
      control: { type: 'number' },
      table: {
        type: { summary: 'A non-negative integer, up to 26, used as a proxy for map scale. The map scale associated to a zoom value depends on the tiled coordinate reference system.' },
        defaultValue: { summary: '0' }
      }
    },
    projection: {
      name: 'projection',
      control: { type: 'select' },
      options: ['OSMTILE', 'CBMTILE','APSTILE', 'WGS84'],
      table: {
        type: { summary: 'A case-sensitive string token identifier of a standard or custom MapML tiled coordinated reference system. The "\:" character is not allowed.' },
        defaultValue: { summary: 'OSMTILE' }
      }
    },
    layer: {
      name: '\<map-layer\>',
      control: 'select',
      options: Object.keys(layerMap),
      mapping: layerMap,
      table: {
        type: { summary: 'Layers are specified by one or more \<map-layer\> elements.' },
        defaultValue: { summary: '-' }
      }
    },
    lang: {
      name: 'lang',
      control: { type: 'select' },
      options: ['en', 'fr'],
      table: {
        type: { summary: 'The language of the map viewer user interface. May be specified on any ancestor element, especially \<html lang=\>.' },
        defaultValue: { summary: 'en' },
      },
    },
    controls: {
      name: 'controls',
      control: 'boolean',
      table: {
        type: { summary: 'Enables or removes optional map controls' },
        defaultValue: { summary: 'false, equivalent to absent controls attribute' },
      },
    },
    static: {
      name: 'static',
      control: 'boolean',
      table: {
        type: { summary: 'Disables map events and most interactive behaviour. Typically used in conjunction with controls attribute.' },
        defaultValue: { summary: 'false, equivalent to absent static attribute, and the result is an interactive map.' }
      }
    },
    controlslist: {
      name: 'controlslist',
      control: 'multi-select',
      options: ['geolocation', 'nofullscreen', 'nozoom', 'nolayer', 'noreload', 'noscale'],
      table: {
        type: { summary: 'Space-separated list of case-insensitive string tokens of control name or "no"+control name' },
        defaultValue: { summary: 'Empty string, equivalent to absent controlslist attribute.' },
      },
    },
    caption: {
      name: '\<map-caption\>',
      control: { type: 'text' },
      table: {
        type: { summary: 'A string describing the purpose of the map. The \<map-caption\> element can be used to provide a screen reader-friendly caption or title for the map.' },
        defaultValue: { summary: '-' },
      },
    }
  }
};

// spacing and indentation is visually significant in the template (it's visible in the
// "Show Code" disclosure widget; don't change it without testing the result...
const TemplateBasic = (args) => {
  return `
    <mapml-viewer lat="${args.lat}" lon="${args.lon}" zoom="${args.zoom}" lang="${args.lang}" projection="${args.projection}"${args.controls ? ' controls' : ''}${args.static ? ' static' : ''}${args.controlslist.length > 0  ? ` controlslist="${args.controlslist.join(' ')}"` : ''}>

  <map-caption>${args.caption}</map-caption>

  <map-layer src="${args.layer}" ${`checked`}></map-layer>

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
  static: false,
  lang: 'en',
  controlslist: ['geolocation'],
  layer: '/dist/gcds/gcds-map/mapml/en/osmtile/cbmt',
  caption: 'A map of Canada'
};

export const HiddenBasemap = (args) => {
  return `
    <mapml-viewer lat="${args.lat}" lon="${args.lon}" zoom="${args.zoom}" projection="${args.projection}"${args.controls ? ' controls' : ''}>

  <map-caption>${args.caption}</map-caption>

  <map-layer src="${args.layer}" checked hidden></map-layer>

  <map-layer src="/dist/gcds/gcds-map/mapml/en/osmtile/current_conditions" checked></map-layer>

</mapml-viewer>
  `;
};
HiddenBasemap.args = {
  lat: 53.087426, 
  lon: -91.275330,
  zoom: 4,
  projection: 'OSMTILE',
  controls: true,
  layer: '/dist/gcds/gcds-map/mapml/en/osmtile/cbmt',
  caption: "Canada's current weather conditions"
};

const TemplatePlayground = args => `<mapml-viewer lat="${args.lat}" lon="${args.lon}" zoom="${args.zoom}" lang="${args.lang}" projection="${args.projection}"${args.controls ? ' controls' : ''}${args.static ? ' static' : ''}${args.controlslist.length > 0  ? ` controlslist="${args.controlslist.join(' ')}"` : ''}>

  <map-caption>${args.caption}</map-caption>

  <map-layer src="${args.layer}" checked hidden></map-layer>

  <map-layer src="/dist/gcds/gcds-map/mapml/en/osmtile/current_conditions" checked></map-layer>

</mapml-viewer>`; 

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  lat: 53.087426, 
  lon: -91.275330,
  zoom: 4,
  projection: 'OSMTILE',
  controls: true,
  static: false,
  lang: 'en',
  controlslist: ['geolocation'],
  layer: '/dist/gcds/gcds-map/mapml/en/osmtile/cbmt',
  caption: "Canada's current weather conditions"
};
