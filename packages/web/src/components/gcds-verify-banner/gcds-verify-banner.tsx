import { Component, Element, Host, Prop, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';

import CanadaFlag from './assets/canada-flag.svg';
import ContentToggleArrow from './assets/content-toggle-arrow.svg';
import Lock from './assets/lock.svg';

@Component({
  tag: 'gcds-verify-banner',
  styleUrl: 'gcds-verify-banner.css',
  shadow: true,
})
export class GcdsVerifyBanner {
  @Element() el: HTMLElement;

  private lang: string;


  /**
   * Props
   */

  /**
   * Defines the container width of the verify banner content
   */
  @Prop() container?: 'full' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' = 'xl';

  /**
   * Defines if the banner's position is fixed.
   */
  @Prop() isFixed?: boolean = false;

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
  }

  render() {
    const { container, isFixed, lang } = this;

    return (
      <Host>
        <details class={`gcds-verify-banner ${isFixed ? 'verify-banner--is-fixed' : ''}`}>
          <summary
            class={container ? `container-${container}` : ''}
            aria-expanded="false"
            role="button"
          >
            <span class='svg-container' innerHTML={CanadaFlag} />
            <p>
              <small>{lang === 'en' ? 'An official website of the Government of Canada.' : 'Les sites Web officiels du gouvernement du Canada.'}</small>
              <a class="verify-banner__toggle">
                <small>{lang === 'en' ? 'Learn to recognize one' : 'Comment les reconnaître'}</small>
                <span class='svg-container' innerHTML={ContentToggleArrow} />
              </a>
            </p>
          </summary>
          <div class={`verify-banner__content ${container ? `container-${container}` : ''}`}>
            <p><small>{lang === 'en' ? 'It can be hard to know what sites to trust. Here\'s how to identify a Government of Canada website before you share any info:' : 'Il peut être difficile de savoir quels sites sont fiables. Avant de partager des renseignements, vérifiez les points suivant pour déterminer s\'il s\'agit bien d\'un site du gouvernement du Canada:'}</small></p>
            <br/>
            {lang === 'en' ?
              <gcds-grid tag="ul" container="lg" columns="1fr" columns-tablet={container === 'xs' || container === 'sm' ? '1fr' : '1fr 1fr'}>
                <li>
                  <h4>Canada.ca or gc.ca</h4>
                  <p><small>Government of Canada website's normally use Canada.ca or gc.ca in the URL.</small></p>
                </li>
                <li>
                  <h4>Available in both of Canada's Official Languages</h4>
                  <p><small>Information will be available in both English and French.</small></p>
                </li>
                <li>
                  <h4>A padlock icon and HTTPS</h4>
                  <p><small>Secure Government of Canada websites use <strong>https://</strong> and <span class='svg-container' innerHTML={Lock} /> in the address bar.</small></p>
                </li>
                <li>
                  <h4>A point of contact</h4>
                  <p><small>Contact information will have Canada.ca, gc.ca, or the department name in the email address.</small></p>
                </li>
              </gcds-grid>
            :
              <gcds-grid tag="ul" container="lg" columns="1fr" columns-tablet={container === 'xs' || container === 'sm' ? '1fr' : '1fr 1fr'}>
                <li>
                  <h4>Canada.ca ou gc.ca</h4>
                  <p><small>On retrouve normalement Canada.ca ou gc.ca dans l'adresse URL d'un site Web du gouvernement du Canada.</small></p>
                </li>
                <li>
                  <h4>Offert dans les deux langues officielles</h4>
                  <p><small>Vérifiez que les renseignements sont accessibles en français et en anglais.</small></p>
                </li>
                <li>
                  <h4>Une icône de cadenas et HTTPS</h4>
                  <p><small>Lorsqu'un navigateur affiche les sites Web sécuritaires du gouvernement du Canada, on retrouve <strong>https://</strong> et <span class='svg-container' innerHTML={Lock} /> dans la barre URL.</small></p>
                </li>
                <li>
                  <h4>Un point de communication</h4>
                  <p><small>On retrouve Canada.ca, gc.ca ou le nom du ministère dans l'URL de toute adresse courriel du gouvernement du Canada.</small></p>
                </li>
              </gcds-grid>
            }
          </div>
        </details>
      </Host>
    );
  }
}
