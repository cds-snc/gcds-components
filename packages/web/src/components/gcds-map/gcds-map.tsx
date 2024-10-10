import { Component, Element, h, Prop, Host, Watch } from '@stencil/core';

@Component({
  tag: 'gcds-map',
  styleUrl: 'gcds-map.css',
  shadow: true,
})
export class GcdsMap {
  @Element() el: HTMLElement;

  @Prop() lat: number;
  @Prop() lon: number;
  @Prop() zoom: number;
  @Prop() projection: string = 'OSMTILE';
  @Prop() controls: boolean = false;
  @Prop() controlslist: string;
  @Prop() width: string = '100%'; 
  @Prop() height: string = '400px';

  mapViewer: HTMLMapmlViewerElement;

  componentDidLoad() {
    // Apply width and height as CSS variables
    this.el.style.setProperty('--map-width', this.width);
    this.el.style.setProperty('--map-height', this.height);

    // Reference the <mapml-viewer> element
    this.mapViewer = this.el.shadowRoot.querySelector('mapml-viewer') as HTMLMapmlViewerElement;

    // Handle <layer-> readiness once the map is rendered
    this.handleLayerReady();
  }

  @Watch('lat')
  @Watch('lon')
  @Watch('zoom')
  @Watch('projection')
  @Watch('controls')
  @Watch('controlslist')
  handlePropChange(propName: string, newValue: any) {
    if (this.mapViewer) {
      switch (propName) {
        case 'lat':
        case 'lon':
        case 'zoom':
          this.mapViewer.zoomTo(this.lat,this.lon,this.zoom);
          break;
        case 'projection':
          this.mapViewer.setAttribute(propName, newValue.toString());
          break;
        case 'controls':
          if (newValue) {
            this.mapViewer.setAttribute('controls', '');
          } else {
            this.mapViewer.removeAttribute('controls');
          }
          break;
        case 'controlslist':
          if (newValue) {
            this.mapViewer.controlsList = newValue;
          } else {
            this.mapViewer.removeAttribute('controlslist');
          }
          break;
      }
    }
  }

  handleLayerReady() {
    // Wait for the 'layer-' custom element to be defined
    customElements.whenDefined('layer-').then(() => {
      // Find all <layer-> elements inside the mapml-viewer
      const layers = Array.from(this.el.shadowRoot.querySelectorAll('layer-'));

      layers.forEach((layer) => {
        // Now we know the <layer-> element is fully defined, call whenReady()
        (layer as any).whenReady().then(() => {
          // Check for <map-extent> in the layer's shadow DOM and add 'checked' attribute
          // this is necessary only for geogratis MapML resources, but harmless
          // otherwise (unless someone wanted to have an unchecked sublayer, for
          // some reason (it is possible, but maybe not useful).
          const mapExtent = layer.shadowRoot?.querySelector('map-extent');
          if (mapExtent && !mapExtent.hasAttribute('checked')) {
            mapExtent.setAttribute('checked', 'true');
            // the geogratis layers only have a single extent, hide it to 
            // reduce cognitive load, improve a11y
            mapExtent.setAttribute('hidden', 'true')
          }
        });
      });
    });
  }

  render() {
    // Find the <gcds-map-layer> children inside the light DOM of <gcds-map>
    const layers = Array.from(this.el.querySelectorAll('gcds-map-layer'));

    return (
      <Host>
        <mapml-viewer
          lat={this.lat}
          lon={this.lon}
          zoom={this.zoom}
          projection={this.projection ? this.projection : undefined}
          controls={this.controls ? true : undefined}
          controlslist={this.controlslist ? this.controlslist : undefined}
        >
          {layers.map((layer) => (
            <layer-
              label={layer.getAttribute('label')}
              src={layer.getAttribute('src')}
              hidden={layer.getAttribute('hidden') === 'true' ? 'hidden' : undefined}
              checked={layer.getAttribute('checked') === 'true' ? 'checked' : undefined}
              opacity={layer.getAttribute('opacity')}
            ></layer->
          ))}
        </mapml-viewer>
        <script
          type="module"
          src="https://cdn.jsdelivr.net/npm/@maps4html/mapml/dist/mapml.js"
          integrity="sha384-D5NIJ25KvizEU8FGdiQ1zkGxMN9UDe1WutBPXZgYCMro40DHP/t6zRvvbWkmmylr"
          crossOrigin="anonymous"
        ></script>
      </Host>
    );
  }
}

// Declare the HTMLMapmlViewerElement type
declare class HTMLMapmlViewerElement extends HTMLElement {
  lat: number;
  lon: number;
  zoom: number;
  projection: string;
  controls: boolean;
  controlsList: string;
}
