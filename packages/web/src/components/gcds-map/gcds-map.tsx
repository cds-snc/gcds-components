import { Component, Element, h, Prop } from '@stencil/core';
import 'https://cdn.jsdelivr.net/npm/@maps4html/mapml/dist/mapml-viewer.js';  // Import mapml-viewer

@Component({
  tag: 'gcds-map',
  styleUrl: 'gcds-map.css',
  shadow: true,
})
export class GcdsMap {
  @Element() el: HTMLElement;

  // <mapml-viewer> attributes
  @Prop() lat: number;
  @Prop() lon: number;
  @Prop() zoom: number;
  @Prop() projection: string = 'OSMTILE';  // Default projection
  @Prop() controls: boolean = true;
  @Prop() controlslist: string;

  // Add width and height props to allow setting dimensions at design time
  @Prop() width: string = '100%';  // Allow setting width of the map
  @Prop() height: string = '400px';  // Allow setting height of the map

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
    // Find the <gcds-map-layer> children inside the light DOM
    const layers = Array.from(this.el.querySelectorAll('gcds-map-layer'));

    return (
      <mapml-viewer
        lat={this.lat}
        lon={this.lon}
        zoom={this.zoom}
        projection={this.projection}
        controls={this.controls ? true : undefined}
        controlslist={this.controlslist}  // Pass the controlslist to mapml-viewer
      >
        {layers.map((layer) => (
          <layer-
            label={layer.getAttribute('label')}
            src={layer.getAttribute('src')}
            checked={layer.getAttribute('checked') === 'true' ? 'checked' : undefined}
            opacity={layer.getAttribute('opacity')}  // Pass the opacity to the <layer-> element
          ></layer->
        ))}
      </mapml-viewer>
    );
  }
}
