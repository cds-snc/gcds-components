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
  @Prop({ reflect: true }) controls: boolean = false;
  @Prop() controlslist: string;
  @Prop() width: string = '100%'; 
  @Prop() height: string = '400px';
  @Prop() caption: string; 

  mapViewer: HTMLMapmlViewerElement;

  // written with the help of ChatGPT and Pierre Dubois.
  async componentWillLoad() {
    try {
      const scriptId = 'mapml-loader';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = './dist/gcds/gcds-map/mapml.js';
        script.crossOrigin = 'anonymous';
        script.id = scriptId;
        document.head.appendChild(script);
        script.onload = () => console.log('MapML module dynamically loaded');
        script.onerror = (err) => console.error('Error loading MapML module:', err);
      } else {
        console.log('MapML script already loaded');
      }
    } catch (err) {
      console.error('Error injecting MapML script:', err);
    }
  }
  componentDidLoad() {
    // Apply width and height as CSS variables
    this.el.style.setProperty('--map-width', this.width);
    this.el.style.setProperty('--map-height', this.height);

    // Reference the <mapml-viewer> element
    this.mapViewer = this.el.shadowRoot.querySelector('mapml-viewer') as HTMLMapmlViewerElement;

    // this needs to be handled outside of render() function so we don't end
    // up with > 1 <map-caption> element inside <mapml-viewer>
    if (this.caption) {
      this.handleCaptionChange(this.caption);
    }
    // Handle <layer-> readiness once the map is rendered
    this.handleLayerReady();
  }

  @Watch('zoom')
  handleZoomChange(newValue: any, oldValue: any) {
    if (this.mapViewer) {
      if (newValue !== oldValue) {
        this.mapViewer.zoomTo(this.mapViewer.lat, this.mapViewer.lon, newValue);
      }
    }
  }
  @Watch('controls')
  handleControlsChange(newValue: any) {
    if (this.mapViewer) {
      if (newValue) {
        this.mapViewer.setAttribute('controls', '');
      } else {
        this.mapViewer.removeAttribute('controls');
      }
    }
  }
  @Watch('controlslist')
  handleControlsListChange(newValue: any, oldValue: any) {
    if (this.mapViewer && newValue !== oldValue) {
      this.mapViewer.setAttribute('controlslist', newValue);
    }
  }
  @Watch('projection')
  handleProjectionChange(newValue: any, oldValue: any) {
    if (this.mapViewer && newValue !== oldValue) {
      this.mapViewer.setAttribute('projection', newValue);
    }
  }
  @Watch('caption')
  handleCaptionChange(newValue: string) {
    let captionEl = this.mapViewer.querySelector('map-caption');
    if (this.mapViewer) {
      if (newValue) {
        if (!captionEl) {
          captionEl = document.createElement('map-caption');
          this.mapViewer.prepend(captionEl);
        }
        captionEl.textContent = newValue;
      } else if (captionEl) {
        captionEl.remove();
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
      </Host>
    );
  }
}

declare class HTMLMapmlViewerElement extends HTMLElement {
  lat: number;
  lon: number;
  zoom: number;
  projection: string;
  controls: boolean;
  controlsList: string;
  zoomTo(lat: number, lon: number, zoom: number): void;
}
