// src/types/gcds-map.d.ts

export interface MapMLViewerElement extends HTMLElement {
  whenLayersReady: () => Promise<void>;
  layers: HTMLCollectionOf<Element>;
}

export interface MapLayerElement extends HTMLElement {
  src: string;
  checked: boolean;
}

