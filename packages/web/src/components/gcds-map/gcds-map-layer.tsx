import { Component, Prop } from '@stencil/core';  // Remove 'h'

@Component({
  tag: 'gcds-map-layer',
  shadow: false,
})
export class GcdsMapLayer {
  @Prop() src: string;
  @Prop() checked: boolean = true;
  @Prop() hidden: boolean = false;
  @Prop() label: string;
  @Prop() opacity: number;

  render() {
    return null;  // No rendering done here
  }
}
