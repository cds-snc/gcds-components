export default {
  title: 'Components/Map',
  argTypes: {
      controls: {
        name: 'controls',
        control: 'boolean',
        table: {
          type: { summary: 'Add map controls' },
          defaultValue: { summary: 'true' }
        }
      },
      lat: {
        name: 'lat',
        control: 'text',
        table: {
          type: { summary: 'Initial latitude of map centre, range +/- 90' },
          defaultValue: { summary: '0' }
        }
      },
      lon: {
        name: 'lon',
        control: 'text',
        table: {
          type: { summary: 'Initial longitude of map centre, range +/- 180' },
          defaultValue: { summary: '0' }
        }
      },
      zoom: {
        name: 'zoom',
        control: 'text',
        table: {
          type: { summary: 'Initial zoom of map, range 0-22' },
          defaultValue: { summary: '0' }
        }
      },
      projection: {
        name: 'projection',
        control: 'select',
        options: ['OSMTILE', 'CBMTILE', 'WGS84'],
        table: {
          type: { summary: 'Tiled CRS name' },
          defaultValue: { summary: 'OSMTILE (Web Mercator)' },
        },
        type: { required: false }
      },
      controlslist: {
        name: 'controlslist',
        control: 'text',
        table: {
          type: { summary: 'Space separated list of tokens, including: geolocation, nofullscreen, nozoom, nolayer, noreload, noscale' },
          defaultValue: { summary: 'Empty string' },
        },
        type: { required: false }
      },
      caption: {
        name: 'caption',
        control: 'text',
        table: {
          type: { summary: 'The screen-reader accessible caption of the map (not visible)' },
          defaultValue: { summary: 'Empty string' }
        },
        type: { required: false }
      }
    }
};

const TemplateBasic = (args) => `
  <gcds-map lat="${args.lat}" lon="${args.lon}" zoom="${args.zoom}" ${args.controls ? 'controls' : ''}  ${args.controlslist ? `controlslist="${args.controlslist}"` : ''}
    projection="${args.projection}" title="this is a test">
    <gcds-map-layer
      label="Canada Base Map - Transportation (CBMT) - EPSG:3857"
      src="https://geogratis.gc.ca/mapml/en/osmtile/cbmt/"
      checked="true"
    ></gcds-map-layer>
    <gcds-map-layer
      label="Canada Base Map - Transportation (CBMT) - EPSG:3978"
      src="https://geogratis.gc.ca/mapml/en/cbmtile/cbmt/"
      checked="true"
    ></gcds-map-layer>
  </gcds-map>
`;

const TemplateMultiLayer = (args) => `
  <gcds-map lat="${args.lat}" lon="${args.lon}" zoom="${args.zoom}" ${args.controls ? 'controls' : ''}  ${args.controlslist ? `controlslist="${args.controlslist}"` : ''}
    projection="${args.projection}">
    <gcds-map-layer
      label="Canada Base Map - Transportation (CBMT)"
      src="https://geogratis.gc.ca/mapml/en/osmtile/cbmt/"
      checked="${args.checked}"
    ></gcds-map-layer>
    <gcds-map-layer
      label="Another Layer"
      src="https://geogratis.gc.ca/mapml/en/osmtile/kNN_LandCover_VegTreed_250m/"
      checked="${args.checked}"
    ></gcds-map-layer>
  </gcds-map>
`;

const TemplateHiddenBaseMap = (args) => `
  <gcds-map lat="${args.lat}" lon="${args.lon}" zoom="${args.zoom}" ${args.controls ? 'controls' : ''}  ${args.controlslist ? `controlslist="${args.controlslist}"` : ''}
    projection="${args.projection}">
    <gcds-map-layer
      label="Canada Base Map - Transportation (CBMT)"
      src="https://geogratis.gc.ca/mapml/en/osmtile/cbmt/"
      checked="${args.checked}"
      hidden="${args.hidden}"
    ></gcds-map-layer>
    <gcds-map-layer
      src="https://geogratis.gc.ca/mapml/en/osmtile/kNN_LandCover_VegTreed_250m/"
      checked="${args.checked}"
    ></gcds-map-layer>
  </gcds-map>
`;


// each named export is a 'story'
export const Default = TemplateBasic.bind({});
Default.args = {
  lat: 66.5,
  lon: -106,
  zoom: 2,
  projection: 'OSMTILE',
  controls: true
};

export const MultiLayer = TemplateMultiLayer.bind({});
MultiLayer.args = {
  lat: 66.5,
  lon: -106,
  zoom: 2,
  checked: false,
};

export const HiddenBaseMap = TemplateHiddenBaseMap.bind({});
HiddenBaseMap.args = {
  lat: 66.5,
  lon: -106,
  zoom: 2,
  checked: true,
  hidden: true
};
