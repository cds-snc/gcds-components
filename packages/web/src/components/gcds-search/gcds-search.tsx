import {
  Component,
  Host,
  Prop,
  Element,
  State,
  Event,
  EventEmitter,
  h,
} from '@stencil/core';
import { assignLanguage, observerConfig, emitEvent } from '../../utils/utils';
import I18N from './i18n/I18N';

@Component({
  tag: 'gcds-search',
  styleUrl: 'gcds-search.css',
  shadow: true,
})
export class GcdsSearch {
  @Element() el: HTMLElement;

  /**
   * Set the placeholder and label for the search input. Becomes "Search [placeholder]"
   */
  @Prop() placeholder: string = 'Canada.ca';

  /**
   * Sets the action for the search form. Default will be canada.ca global search
   */
  @Prop() action: string = '/sr/srb.html';

  /**
   * Set the form method of the search form
   */
  @Prop() method: 'get' | 'post' = 'get';

  /**
   * Set the name of the search input
   */
  @Prop() name: string = 'q';

  /**
   * Set the id of the search input
   */
  @Prop() searchId: string = 'search';

  /**
   * Set the value of the search input
   */
  @Prop({ mutable: true }) value: string;

  /**
   * Set a list of predefined search terms
   */
  @Prop() suggested: Array<string>;

  /**
   * Events
   */

  /**
   * Emitted when the search element has recieved input.
   */
  @Event() gcdsInput!: EventEmitter<string>;

  /**
   * Emitted when the search input value has changed.
   */
  @Event() gcdsChange!: EventEmitter<string>;

  /**
   * Emitted when the search input value has gained focus.
   */
  @Event() gcdsFocus!: EventEmitter<object>;

  /**
   * Emitted when the search input has lost focus.
   */
  @Event() gcdsBlur!: EventEmitter<object>;

  /**
   * Emitted when the search form has submitted.
   */
  @Event() gcdsSubmit!: EventEmitter<object>;

  /**
   * Language of rendered component
   */
  @State() lang: string;

  private handleInput = (e, customEvent) => {
    const input = e.target as HTMLInputElement;
    this.value = input.value;

    customEvent.emit(this.value);
  };

  /*
   * Observe lang attribute change
   */
  updateLang() {
    const observer = new MutationObserver(mutations => {
      if (mutations[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    observer.observe(this.el, observerConfig);
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
  }

  render() {
    const {
      placeholder,
      action,
      method,
      name,
      value,
      lang,
      searchId,
      suggested,
    } = this;

    const labelText = `${I18N[lang].searchLabel.replace('{$}', placeholder)}`;

    const attrsInput = {
      name,
      placeholder: labelText,
    };

    const formAction =
      action === '/sr/srb.html'
        ? `https://www.canada.ca/${lang}/sr/srb.html`
        : action;

    return (
      <Host>
        <div class="gcds-search">
          <gcds-sr-only tag="h2">{I18N[lang].search}</gcds-sr-only>
          <form
            action={formAction}
            method={method}
            role="search"
            onSubmit={e => emitEvent(e, this.gcdsSubmit, this.value)}
            class="gcds-search__form"
          >
            <gcds-label
              label={labelText}
              label-for={searchId}
              hide-label
            ></gcds-label>
            <input
              type="search"
              id={searchId}
              list="search-list"
              size={34}
              maxLength={170}
              onInput={e => this.handleInput(e, this.gcdsInput)}
              onChange={e => this.handleInput(e, this.gcdsChange)}
              onFocus={() => this.gcdsFocus.emit()}
              onBlur={() => this.gcdsBlur.emit()}
              {...attrsInput}
              class="gcds-search__input"
              value={value}
            ></input>

            {suggested && (
              <datalist id="search-list">
                {suggested.map((k, v) => (
                  <option value={k} key={v} />
                ))}
              </datalist>
            )}

            <gcds-button
              type="submit"
              class="gcds-search__button"
              exportparts="button"
            >
              <gcds-icon
                name="search"
                label={I18N[lang].search}
                fixed-width
              ></gcds-icon>
            </gcds-button>
          </form>
        </div>
      </Host>
    );
  }
}
