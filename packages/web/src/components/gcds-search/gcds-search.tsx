import { Component, Host, Prop, Element, State, Event, EventEmitter, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import I18N from './i18n/i18n'

@Component({
  tag: 'gcds-search',
  styleUrl: 'gcds-search.css',
  shadow: false,
  scoped: true,
})
export class GcdsSearch {
  @Element() el: HTMLElement;

  /**
  * Set the placeholder and label for the search input. Becomes "Search [placeholder]"
  */
  @Prop() placeholder: string = "Canada.ca";

  /**
  * Sets the action for the search form. Default will be canada.ca global search
  */
  @Prop() action: string = "/sr/srb.html";

  /**
  * Set the form method of the search form
  */
  @Prop() method: "get" | "post" = "get";

  /**
  * Set the name of the search input
  */
  @Prop() name: string = "q";

  /**
  * Set the name of the search input
  */
  @Prop() searchId: string = "search";

  /**
  * Set a list of predefined search terms
  */
  @Prop() suggested: Array<string>;

  /**
  * Emitted when the search input value has changed.
  */
  @Event() gcdsChange!: EventEmitter<object>;

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

  /*
  * Observe lang attribute change
  */
  updateLang() {
    const observer = new MutationObserver((mutations) => {
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
    const { placeholder, action, method, name, lang, searchId, suggested } = this;

    let labelText = `${I18N[lang].searchLabel.replace("{$}", placeholder)}`

    const attrsInput = {
      name,
      placeholder: labelText
    };

    let formAction = action === '/sr/srb.html' ? `https://www.canada.ca/${lang}/sr/srb.html` : action;

    return (
      <Host>
        <section class="gcds-search">
          <h2 class="gcds-search__header">{I18N[lang].search}</h2>
          <form
            action={formAction}
            method={method}
            role="search"
            onSubmit={() => this.gcdsSubmit.emit()}
            class="gcds-search__form"
          >
            <gcds-label
              label={labelText}
              label-for={searchId}
              hide-label
            >
            </gcds-label>
            <input
              type="search"
              id={searchId}
              list="search-list"
              size={34}
              maxLength={170}
              onChange={() => this.gcdsChange.emit()}
              onFocus={() => this.gcdsFocus.emit()}
              onBlur={() => this.gcdsBlur.emit()}
              {...attrsInput}
              class="gcds-search__input"
            ></input>

            {suggested &&
              <datalist id="search-list">
                {suggested.map((k,v) => <option value={k} key={v} />)}
              </datalist>
            }
            
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
        </section>

      </Host>
    );
  }

}
