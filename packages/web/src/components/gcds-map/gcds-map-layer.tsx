import { Component, Prop } from '@stencil/core';  // Remove 'h'

@Component({
  tag: 'gcds-map-layer',
  shadow: true,
})
export class GcdsMapLayer {
  @Prop() label: string;
  @Prop() src: string;
  @Prop() checked: boolean;
  @Prop() opacity: number;

  render() {
    return null;  // No rendering done here
  }
}
