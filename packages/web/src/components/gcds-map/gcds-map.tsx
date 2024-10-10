import { Component, Element, h, Prop, Host } from '@stencil/core';

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
  @Prop() controls: boolean = true;
  @Prop() controlslist: string;
  @Prop() width: string = '100%'; 
  @Prop() height: string = '400px';

  componentDidLoad() {
    // Apply width and height as CSS variables
    this.el.style.setProperty('--map-width', this.width);
    this.el.style.setProperty('--map-height', this.height);

    // Handle <layer-> readiness once the map is rendered
    this.handleLayerReady();
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
              checked={layer.getAttribute('checked') === 'true' ? 'checked' : undefined}
              opacity={layer.getAttribute('opacity')}
              ></layer->
            ))}
        </mapml-viewer>
        <script type="module"  src="https://cdn.jsdelivr.net/npm/@maps4html/mapml/dist/mapml.js"></script>
      </Host>
    );
  }
}