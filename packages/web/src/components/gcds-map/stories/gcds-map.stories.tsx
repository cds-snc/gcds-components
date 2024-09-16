import type { MapMLViewerElement } from '../../../gcds-map';

const LAYER_OPTIONS = [
  ['./dist/gcds/gcds-map/assets/mapml/en/cbmtile/toporama', 'Toporama'],
  ['./dist/gcds/gcds-map/assets/mapml/en/cbmtile/cbmt', 'Canada Base Map - Transportation'],
  ['./dist/gcds/gcds-map/assets/mapml/en/osmtile/osm', 'OpenStreetMap'],
  ['./dist/gcds/gcds-map/assets/mapml/en/apstile/arctic', 'Arctic Ocean Basemap MapML Service']
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
// "Show Code" disclosure widget; don't change it without testing the result...)
const TemplateBasic = (args) => {
  return `<!-- Web component code (HTML, Angular, Vue) -->
<mapml-viewer lat="${args.lat}" lon="${args.lon}" zoom="${args.zoom}" lang="${args.lang}" projection="${args.projection}"${args.controls ? ' controls' : ''}${args.static ? ' static' : ''}${args.controlslist.length > 0  ? ` controlslist="${args.controlslist.join(' ')}"` : ''}>

  <map-caption>${args.caption}</map-caption>

  <map-layer src="${args.layer}" ${`checked`}></map-layer>

</mapml-viewer>
<!-- React code -->`;
};

export const Default = TemplateBasic.bind({});
Default.args = {
  lat: 48.474287,
  lon: -123.390541,
  zoom: 11,
  projection: 'OSMTILE',
  controls: true,
  static: false,
  lang: 'en',
  controlslist: ['geolocation'],
  layer: './dist/gcds/gcds-map/assets/mapml/en/osmtile/cbmt',
  caption: 'A map of Victoria, Canada'
};

export const HiddenBasemap = (args) => {
  return `<!-- Web component code (HTML, Angular, Vue) -->
<mapml-viewer lat="${args.lat}" lon="${args.lon}" zoom="${args.zoom}" projection="${args.projection}"${args.controls ? ' controls' : ''}>

  <map-caption>${args.caption}</map-caption>

  <map-layer src="${args.layer}" checked hidden></map-layer>

  <map-layer src="./dist/gcds/gcds-map/assets/mapml/en/osmtile/current_conditions" checked></map-layer>

</mapml-viewer>
<!-- React code -->`;
};
HiddenBasemap.args = {
  lat: 53.087426, 
  lon: -91.275330,
  zoom: 4,
  projection: 'OSMTILE',
  controls: true,
  layer: './dist/gcds/gcds-map/assets/mapml/en/osmtile/cbmt',
  caption: "Canada's current weather conditions"
};

export const Playground = args => `<mapml-viewer lat="${args.lat}" lon="${args.lon}" zoom="${args.zoom}" lang="${args.lang}" projection="${args.projection}"${args.controls ? ' controls' : ''}${args.static ? ' static' : ''}${args.controlslist.length > 0  ? ` controlslist="${args.controlslist.join(' ')}"` : ''}>

  <map-caption>${args.caption}</map-caption>

  <map-layer src="${args.layer}" checked hidden></map-layer>

  <map-layer src="./dist/gcds/gcds-map/assets/mapml/en/osmtile/current_conditions" checked></map-layer>

</mapml-viewer>`; 

Playground.args = {
  lat: 53.087426, 
  lon: -91.275330,
  zoom: 4,
  projection: 'OSMTILE',
  controls: true,
  static: false,
  lang: 'en',
  controlslist: ['geolocation'],
  layer: './dist/gcds/gcds-map/assets/mapml/en/osmtile/cbmt',
  caption: "Canada's current weather conditions"
};

export const GeoJSON2MapMLExample = args => `<mapml-viewer id="np" lat="${args.lat}" lon="${args.lon}" zoom="${args.zoom}" lang="${args.lang}" projection="${args.projection}"${args.controls ? ' controls' : ''}${args.static ? ' static' : ''}${args.controlslist.length > 0  ? ` controlslist="${args.controlslist.join(' ')}"` : ''}>

  <map-caption>${args.caption}</map-caption>

  <map-layer src="${args.layer}" checked hidden></map-layer>

  <!-- A GeoJSON <map-layer> is created and styled by a function call here -->

</mapml-viewer>`;

GeoJSON2MapMLExample.args = {
  lat: 53.087426, 
  lon: -91.275330,
  zoom: 4,
  projection: 'OSMTILE',
  controls: true,
  static: false,
  lang: 'en',
  controlslist: ['geolocation'],
  layer: './dist/gcds/gcds-map/assets/mapml/en/osmtile/cbmt',
  caption: "Canada's Provinces and Territories in styled GeoJSON"
};

GeoJSON2MapMLExample.loaders = [
  async () => {
    try {
      const response = await fetch('./dist/gcds/gcds-map/assets/canada.json');
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const geoJsonData = await response.json();
      
      // Return the data for use in the story
      return { geoJsonData };
    } catch (error) {
      console.error('Error loading GeoJSON data:', error);
      return { geoJsonData: null, error };
    }
  }
];

GeoJSON2MapMLExample.parameters = {
  docs: {
    source: {
      type: 'code',
      language: 'html',
      code: `<!-- Web component code (HTML, Angular, Vue) -->
<mapml-viewer id="np" lat="${GeoJSON2MapMLExample.args.lat}" lon="${GeoJSON2MapMLExample.args.lon}" zoom="${GeoJSON2MapMLExample.args.zoom}" lang="${GeoJSON2MapMLExample.args.lang}" projection="${GeoJSON2MapMLExample.args.projection}"${GeoJSON2MapMLExample.args.controls ? ' controls' : ''}${GeoJSON2MapMLExample.args.static ? ' static' : ''}${GeoJSON2MapMLExample.args.controlslist.length > 0  ? ` controlslist="${GeoJSON2MapMLExample.args.controlslist.join(' ')}"` : ''}>

  <map-caption>${GeoJSON2MapMLExample.args.caption}</map-caption>

  <map-layer src="${GeoJSON2MapMLExample.args.layer}" checked hidden></map-layer>

  <!-- this layer created via javascript, using M.geojson2mapml API functions -->
  <map-layer label="Provinces and territories of Canada" checked media="(0 < map-zoom < 7)" opacity="0.65">
    <map-style>
     .canada { fill-opacity: 0.7; stroke-width: 1; stroke: white; stroke-opacity: 1; stroke-dasharray: 3; } 
     .bc { fill: #ffdeb2; stroke: #e6c8a1; } .ab { fill: #facad6; stroke: #e8708e; } 
     .sk { fill: #b5ffe4; stroke: #9ad9c2;} .mb { fill: #e6e6fa;  stroke: #cdcdde; } 
     .on { fill: #facad6; stroke: #e8708e; } .qc { fill: #b5ffe4; stroke: #9ad9c2;} 
     .nb { fill: #ffdeb2; } .pei { fill: #e6e6fa; stroke: #cdcdde;} 
     .ns { fill: #facad6;  stroke: #e8708e; } .nl { fill: #ebc798; stroke: #d0a368; } 
     .yk { fill: #ebc798; stroke: #d0a368; } .nwt { fill: #e6e6fa; stroke: #cdcdde; } 
     .nt { fill: #ffdeb2; stroke: #e6c8a1; }
    </map-style>
    <map-meta name="extent" content="top-left-longitude=-141.01143, top-left-latitude=41.71096, bottom-right-longitude=-52.61941,bottom-right-latitude=83.13505"></map-meta>
    <map-meta name="projection" content="OSMTILE"></map-meta>
    <map-meta name="cs" content="gcrs"></map-meta>
    <map-feature class="canada nl">
      <map-featurecaption>Newfoundland and Labrador</map-featurecaption>
      <map-geometry>...</map-geometry>
      <map-properties>...</map-properties>
    </map-feature>
    ... etc ...
  </map-layer>

</mapml-viewer>
<!-- React code -->`
    }
  }
};

GeoJSON2MapMLExample.play = async ({ canvasElement, loaded }) => {
  console.log('Play function started');
  try {
    const { geoJsonData } = loaded;
    
    // Configure MapML options for the geojson2mapml api
    let provOptions = { 
      projection: "OSMTILE",
      label: "Provinces and Territories of Canada", 
      caption: "PRENAME",
      geometryFunction: function (g, f) {
        if (g.nodeName === "MAP-MULTIPOLYGON") {
          let polys = g.querySelectorAll("map-polygon");
          for (let i=0; i < polys.length; i++) {
            polys[i].setAttribute("class", "h");
          }
        } else {
          g.setAttribute("class", "h");
        }
        switch (f.properties.PRUID) {
          case '10':
            g.className = 'canada nl'
            break;
          case '11':
            g.className = 'canada pei'
            break;
          case '12':
            g.className = 'canada ns'
            break;
          case '13':
            g.className = 'canada nb'
            break;
          case '24':
            g.className = 'canada qc'
            break;
          case '35':
            g.className = 'canada on'
            break;
          case '46':
            g.className = 'canada mb'
            break;
          case '47':
            g.className = 'canada sk'
            break;
          case '48':
            g.className = 'canada ab'
            break;
          case '59':
            g.className = 'canada bc'
            break;
          case '60':
            g.className = 'canada yk'
            break;
          case '61':
            g.className = 'canada nwt'
            break;
          case '62':
            g.className = 'canada nt'
            break;
        }
        return g;
      }
    };
    
    // Access the MapML global object
    const mapmlGlobal = window as any;
    if (typeof mapmlGlobal.M === 'undefined') {
      console.log('M not found!');
      return;
    }
    
    // Convert GeoJSON to MapML
    let provs = mapmlGlobal.M.geojson2mapml(geoJsonData, provOptions);

    // post-process the <map-layer> just created - need to update the geojson2mapml
    // api to add map-feature and perhaps other callbacks opportunities for 
    // post-facto setting class values and perhaps other stuff tbc

    const features = provs.querySelectorAll('map-feature');
    features.forEach(feature => {
      const taggedGeometry = feature.querySelector('.canada');
      feature.setAttribute('class', taggedGeometry.getAttribute('class'))
      taggedGeometry.removeAttribute('class');
    });

    // this layer should not be rendered at large scales (too generalized)
    provs.setAttribute('media','(0 < map-zoom < 7)');
    provs.setAttribute('opacity', '0.65');
    console.log('provinces geojson layer created');
    
    // Get the map viewer
    const mapViewer = canvasElement;
    if (!mapViewer) {
      console.log('Map viewer not found!');
      return;
    }
    let mapStyle = document.createElement('map-style');
    mapStyle.innerHTML = `.canada { fill-opacity: 0.7; stroke-width: 1; stroke: white; stroke-opacity: 1; stroke-dasharray: 3; } 
            .bc { fill: #ffdeb2; stroke: #e6c8a1; } .ab { fill: #facad6; stroke: #e8708e; } .sk { fill: #b5ffe4; stroke: #9ad9c2;} .mb { fill: #e6e6fa;  stroke: #cdcdde; } 
            .on { fill: #facad6; stroke: #e8708e; } .qc { fill: #b5ffe4; stroke: #9ad9c2;} .nb { fill: #ffdeb2; } .pei { fill: #e6e6fa; stroke: #cdcdde;} 
            .ns { fill: #facad6;  stroke: #e8708e; } .nl { fill: #ebc798; stroke: #d0a368; } 
            .yk { fill: #ebc798; stroke: #d0a368; } .nwt { fill: #e6e6fa; stroke: #cdcdde; } .nt { fill: #ffdeb2; stroke: #e6c8a1; }`

    // scope styles to this layer only
    provs.insertAdjacentElement('afterbegin',mapStyle);
    
    mapViewer.appendChild(provs);
    console.log('Added GeoJSON layer to map');
  } catch (error) {
    console.error('Error in map playground:', error);
  }
};
customElements.whenDefined('mapml-viewer').then(() => {
  (async () => {
    console.log('starting playground operations...');

    // Load data while waiting for the viewer to render
    const loadDataPromise = GeoJSON2MapMLExample.loaders[0]();
    
    // Function to find the viewer
    const findViewer = () => {
      return new Promise((resolve, reject) => {
        // Set a maximum timeout (e.g., 10 seconds) to avoid infinite polling
        const maxTimeout = setTimeout(() => {
          clearInterval(interval);
          reject(new Error('Timed out waiting for #np element'));
        }, 10000);
        
        const interval = setInterval(() => {
          const viewer = document.querySelector('#np');
          if (viewer) {
            clearInterval(interval);
            clearTimeout(maxTimeout);
            resolve(viewer);
          }
        }, 100); 
      });
    };
    
    const addGeoJSONLayer = async () => {
      try {
        const [loadedData, viewer] = await Promise.all([loadDataPromise, findViewer()]);

        console.log('Found viewer and loaded data, running play function');
        await GeoJSON2MapMLExample.play({ canvasElement: viewer, loaded: loadedData });
      } catch (error) {
        console.error('Error during initialization:', error);
      }
    };
    addGeoJSONLayer();
/*

NOTE: This doesn't work, and I'm not sure why.  It could be that the viewer's load
event is run just once when it first renders and never again thereafter; I didn't
dig into it too much.  The issue that I was trying to solve is that the geojson
layer is added when the overview page loads the first time, and is removed when the user
navigates away from the overview (the state is lost, because it's not part of the
story, it's accomplished by the play function).

    document.addEventListener('load', async (event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail && customEvent.detail.target && customEvent.detail.target.id === 'np') {
        console.log('calling addGeoJSON');
        addGeoJSONLayer();
      }
    }, true);
*/
  })();
});

export const DarkMode = args => `<!-- Web component code (HTML, Angular, Vue) -->
<mapml-viewer lat="${args.lat}" lon="${args.lon}" zoom="${args.zoom}" lang="${args.lang}" projection="${args.projection}"${args.controls ? ' controls' : ''}${args.static ? ' static' : ''}${args.controlslist.length > 0  ? ` controlslist="${args.controlslist.join(' ')}"` : ''}>

  <map-caption>${args.caption}</map-caption>

  <map-layer media="(prefers-color-scheme: dark)" src="./dist/gcds/gcds-map/assets/mapml/en/osmtile/dark.mapml" checked></map-layer>

  <map-layer media="(prefers-color-scheme: light)" src="./dist/gcds/gcds-map/assets/mapml/en/osmtile/light.mapml" checked></map-layer>

</mapml-viewer>
<!-- React code -->`; 

DarkMode.args = {
  lat: 53.087426, 
  lon: -91.275330,
  zoom: 4,
  projection: 'OSMTILE',
  controls: true,
  static: false,
  lang: 'en',
  controlslist: ['geolocation'],
  caption: "OpenStreetMap in pmtiles archive format, demonstrating light and dark mode maps"
};

export const InlineVsRemote = (args) => {
  return `<!-- Web component code (HTML, Angular, Vue) -->
<mapml-viewer lat="${args.lat}" lon="${args.lon}" zoom="${args.zoom}" projection="${args.projection}"${args.controls ? ' controls' : ''}>

  <map-caption>${args.caption}</map-caption>

  <map-layer label="Remote layer content - XHTML markup rules" src="${args.layer}" checked hidden></map-layer>

  <map-layer label="map-title takes precedence" checked>
    <map-title>Inline layer content - HTML markup rules</map-title>
    <map-meta name="projection" content="OSMTILE"></map-meta>
    <map-feature zoom="15">
      <map-featurecaption>The Man With Two Hats</map-featurecaption>
      <map-properties>
        <h2><a href="https://www.veterans.gc.ca/en/remembrance/memorials/national-inventory-canadian-memorials/details/9304">The Man With Two Hats</a></h2>
      </map-properties>
      <map-geometry>
        <map-point>
          <map-coordinates>-75.705278 45.397778</map-coordinates>
        </map-point>
      </map-geometry>
    </map-feature>
  </map-layer>

</mapml-viewer>
<!-- React code -->`;
};
InlineVsRemote.args = {
  lat: 53.087426, 
  lon: -91.275330,
  zoom: 4,
  projection: 'OSMTILE',
  controls: true,
  layer: './dist/gcds/gcds-map/assets/mapml/en/osmtile/cbmt',
  caption: "A map with remote and inline MapML content layers"
};

export const CustomProjection = (args) => {
  const viewer = document.querySelector('mapml-viewer')  as MapMLViewerElement; 
  viewer.defineCustomProjection(`{ "projection": "EPSG3573", "proj4string" : "+proj=laea +lat_0=90 +lon_0=-100 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs",  "origin" : [-4889334.802955,4889334.802955], "resolutions" : [38197.92815,19098.96407,9549.482037,4774.741019,2387.370509,1193.685255,596.8426273,298.4213137,149.2106568,74.60532841,37.30266421], "bounds" : [[-4594983,4507258],[4655569,-4562485]], "tilesize" : 256 }`);
  return `
    <mapml-viewer lat="${args.lat}" lon="${args.lon}" zoom="${args.zoom}" lang="${args.lang}" projection="${args.projection}"${args.controls ? ' controls' : ''}${args.static ? ' static' : ''}${args.controlslist.length > 0  ? ` controlslist="${args.controlslist.join(' ')}"` : ''}>

  <map-caption>${args.caption}</map-caption>

  <map-layer src="${args.layer}" ${`checked`}></map-layer>

</mapml-viewer>
  `;
};

CustomProjection.args = {
  lat: 76.263458,
  lon: -96.785466,
  zoom: 1,
  projection: 'EPSG3573',
  controls: true,
  static: false,
  lang: 'en',
  controlslist: ['geolocation'],
  layer: './dist/gcds/gcds-map/assets/mapml/en/custom/arcticsdi.mapml',
  caption: 'A map in a custom-defined projection'
};

CustomProjection.parameters = {
  docs: {
    source: {
      type: 'code',
      language: 'html',
      code: `<!-- Web component code (HTML, Angular, Vue) -->
<script type="module">
  const viewer = document.querySelector('mapml-viewer');
  viewer.defineCustomProjection(\`{ 
    "projection": "EPSG3573",
    "proj4string" : "+proj=laea +lat_0=90 +lon_0=-100 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs",  
    "origin" : [-4889334.802955,4889334.802955], 
    "resolutions" : [38197.92815,19098.96407,9549.482037,4774.741019,2387.370509,1193.685255,596.8426273,298.4213137,149.2106568,74.60532841,37.30266421],
    "bounds" : [[-4594983,4507258],[4655569,-4562485]], 
    "tilesize" : 256 }
  \`);
</script>

<mapml-viewer projection="${CustomProjection.args.projection}" lat="${CustomProjection.args.lat}" lon="${CustomProjection.args.lon}" zoom="${CustomProjection.args.zoom}" lang="${CustomProjection.args.lang}" ${CustomProjection.args.controls ? ' controls' : ''}${CustomProjection.args.static ? ' static' : ''}${CustomProjection.args.controlslist.length > 0  ? ` controlslist="${CustomProjection.args.controlslist.join(' ')}"` : ''}>

  <map-caption>${CustomProjection.args.caption}</map-caption>

  <map-layer src="${CustomProjection.args.layer}" checked></map-layer>
  
</mapml-viewer>
<!-- React code -->`
    }
  }
};