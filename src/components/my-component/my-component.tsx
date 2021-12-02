import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'gc-ds-button',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The button label
   */
  @Prop() label: string;

  private getText(): string {
    return format(this.label);
  }

  render() {
    return <button>{this.getText()}</button>;
  }
}
