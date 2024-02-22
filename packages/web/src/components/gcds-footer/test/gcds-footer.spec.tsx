import { newSpecPage } from '@stencil/core/testing';
import { GcdsFooter } from '../gcds-footer';

describe('gcds-footer', () => {
  it('renders compact - English', async () => {
    const page = await newSpecPage({
      components: [GcdsFooter],
      html: `<gcds-footer display="compact" lang="en"></gcds-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-footer role="contentinfo" display="compact" lang="en">
        <mock:shadow-root>
          <h2 class="gcds-footer__header">About this site</h2>
          <div class="gcds-footer__sub">
            <div class="sub__container">
              <nav aria-labelledby="sub__header">
                <h3 class="sub__header" id="sub__header">
                  Government of Canada Corporate
                </h3>
                <ul>
                  <li>
                    <a href="https://www.canada.ca/en/social.html">
                      Social media
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/mobile.html">
                      Mobile applications
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/government/about.html">
                      About Canada.ca
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/transparency/terms.html">
                      Terms and conditions
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/transparency/privacy.html">
                      Privacy
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="sub__wordmark">
                <gcds-signature lang="en" type="wordmark" variant="colour"></gcds-signature>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-footer>
    `);
  });

  it('renders full - English', async () => {
    const page = await newSpecPage({
      components: [GcdsFooter],
      html: `<gcds-footer display="full" lang="en"></gcds-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-footer role="contentinfo" display="full" lang="en">
        <mock:shadow-root>
          <h2 class="gcds-footer__header">About this site</h2>
          <div class="gcds-footer__main">
            <div class="main__container">
              <nav aria-labelledby="govnav__header" class="main__govnav">
                <h3 id="govnav__header">
                  Government of Canada
                </h3>
                <ul class="govnav__list">
                  <li>
                    <a href="https://www.canada.ca/en/contact.html">
                      All Contacts
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/government/dept.html">
                      Departments and agencies
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/government/system.html">
                      About government
                    </a>
                  </li>
                </ul>
              </nav>
              <nav aria-labelledby="themenav__header" class="main__themenav">
                <h4 class="themenav__header" id="themenav__header">
                  Themes and topics
                </h4>
                <ul class="themenav__list">
                  <li>
                    <a href="https://www.canada.ca/en/services/jobs.html">
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/immigration-citizenship.html">
                      Immigration and citizenship
                    </a>
                  </li>
                  <li>
                    <a href="https://travel.gc.ca/">
                      Travel and tourism
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/business.html">
                      Business
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/benefits.html">
                      Benefits
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/health.html">
                      Health
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/taxes.html">
                      Taxes
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/environment.html">
                      Environment and natural resources
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/defence.html">
                      National security and defence
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/culture.html">
                      Culture, history and sport
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/policing.html">
                      Policing, justice and emergencies
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/transport.html">
                      Transport and infrastructure
                    </a>
                  </li>
                  <li>
                    <a href="https://international.gc.ca/world-monde/index.aspx?lang=eng">
                      Canada and the world
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/finance.html">
                      Money and finance
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/science.html">
                      Science and innovation
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/indigenous-peoples.html">
                      Indigenous peoples
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/veterans.html">
                      Veterans and military
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/youth.html">
                      Youth
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="gcds-footer__sub">
            <div class="sub__container">
              <nav aria-labelledby="sub__header">
                <h3 class="sub__header" id="sub__header">
                  Government of Canada Corporate
                </h3>
                <ul>
                  <li>
                    <a href="https://www.canada.ca/en/social.html">
                      Social media
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/mobile.html">
                      Mobile applications
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/government/about.html">
                      About Canada.ca
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/transparency/terms.html">
                      Terms and conditions
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/transparency/privacy.html">
                      Privacy
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="sub__wordmark">
                <gcds-signature lang="en" type="wordmark" variant="colour"></gcds-signature>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-footer>
    `);
  });

  it('renders compact - French', async () => {
    const page = await newSpecPage({
      components: [GcdsFooter],
      html: `<gcds-footer display="compact" lang="fr"></gcds-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-footer role="contentinfo" display="compact" lang="fr">
        <mock:shadow-root>
          <h2 class="gcds-footer__header">À propos de ce site</h2>
          <div class="gcds-footer__sub">
            <div class="sub__container">
              <nav aria-labelledby="sub__header">
                <h3 class="sub__header" id="sub__header">
                  Organisation du gouvernement du Canada
                </h3>
                <ul>
                  <li>
                    <a href="https://www.canada.ca/fr/sociaux.html">
                      Médias sociaux
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/mobile.html">
                      Applications mobiles
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/gouvernement/a-propos.html">
                      À propos de Canada.ca
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/transparence/avis.html">
                      Avis
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/transparence/confidentialite.html">
                      Confidentialité
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="sub__wordmark">
                <gcds-signature lang="fr" type="wordmark" variant="colour"></gcds-signature>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-footer>
    `);
  });

  it('renders full - French', async () => {
    const page = await newSpecPage({
      components: [GcdsFooter],
      html: `<gcds-footer display="full" lang="fr"></gcds-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-footer role="contentinfo" display="full" lang="fr">
        <mock:shadow-root>
          <h2 class="gcds-footer__header">À propos de ce site</h2>
          <div class="gcds-footer__main">
            <div class="main__container">
              <nav aria-labelledby="govnav__header" class="main__govnav">
                <h3 id="govnav__header">
                  Gouvernement du Canada
                </h3>
                <ul class="govnav__list">
                  <li>
                    <a href="https://www.canada.ca/fr/contact.html">
                      Toutes les coordonnées
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/gouvernement/min.html">
                      Ministères et organismes
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/gouvernement/systeme.html">
                      À propos du gouvernement
                    </a>
                  </li>
                </ul>
              </nav>
              <nav aria-labelledby="themenav__header" class="main__themenav">
                <h4 class="themenav__header" id="themenav__header">
                  Thèmes et sujets
                </h4>
                <ul class="themenav__list">
                  <li>
                    <a href="https://www.canada.ca/fr/services/emplois.html">
                      Emplois
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/services/immigration-citoyennete.html">
                      Immigration et citoyenneté
                    </a>
                  </li>
                  <li>
                    <a href="https://voyage.gc.ca/">
                      Voyage et tourisme
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/services/entreprises.html">
                      Entreprises
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/services/prestations.html">
                      Prestations
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/services/sante.html">
                      Santé
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/services/impots.html">
                      Impôts
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/services/environnement.html">
                      Environnement et ressources naturelles
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/services/defense.html">
                      Sécurité nationale et défense
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/services/culture.html">
                      Culture, histoire et sport
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/services/police.html">
                      Services de police, justice et urgences
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/services/transport.html">
                      Transport et infrastructure
                    </a>
                  </li>
                  <li>
                    <a href="https://www.international.gc.ca/world-monde/index.aspx?lang=fra">
                      Le Canada et le monde
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/services/finance.html">
                      Argent et finance
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/services/science.html">
                      Science et innovation
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/services/autochtones.html">
                      Autochtones
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/services/veterans.html">
                      Vétérans et militaires
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/services/jeunesse.html">
                      Jeunesse
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="gcds-footer__sub">
            <div class="sub__container">
              <nav aria-labelledby="sub__header">
                <h3 class="sub__header" id="sub__header">
                  Organisation du gouvernement du Canada
                </h3>
                <ul>
                  <li>
                    <a href="https://www.canada.ca/fr/sociaux.html">
                      Médias sociaux
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/mobile.html">
                      Applications mobiles
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/gouvernement/a-propos.html">
                      À propos de Canada.ca
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/transparence/avis.html">
                      Avis
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/fr/transparence/confidentialite.html">
                      Confidentialité
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="sub__wordmark">
                <gcds-signature lang="fr" type="wordmark" variant="colour"></gcds-signature>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-footer>
    `);
  });

  it('renders full with contextual - English', async () => {
    const page = await newSpecPage({
      components: [GcdsFooter],
      html: `<gcds-footer
        display="full"
        lang="en"
        contextual-heading="Heading"
        contextual-links='{ "Link 1": "#red", "Link 2": "#green", "Link 3": "#blue" }'
      ></gcds-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-footer contextual-heading="Heading" contextual-links="{ &quot;Link 1&quot;: &quot;#red&quot;, &quot;Link 2&quot;: &quot;#green&quot;, &quot;Link 3&quot;: &quot;#blue&quot; }" display="full" lang="en" role="contentinfo">
        <mock:shadow-root>
          <h2 class="gcds-footer__header">About this site</h2>
          <div class="gcds-footer__contextual">
            <div class="contextual__container">
              <nav aria-labelledby="contextual__header">
                <h3 class="contextual__header" id="contextual__header">
                  Heading
                </h3>
                <ul class="contextual__list">
                  <li>
                    <a href="#red">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#green">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#blue">
                      Link 3
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="gcds-footer__main">
            <div class="main__container">
              <nav aria-labelledby="govnav__header" class="main__govnav">
                <h3 id="govnav__header">
                  Government of Canada
                </h3>
                <ul class="govnav__list">
                  <li>
                    <a href="https://www.canada.ca/en/contact.html">
                      All Contacts
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/government/dept.html">
                      Departments and agencies
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/government/system.html">
                      About government
                    </a>
                  </li>
                </ul>
              </nav>
              <nav aria-labelledby="themenav__header" class="main__themenav">
                <h4 class="themenav__header" id="themenav__header">
                  Themes and topics
                </h4>
                <ul class="themenav__list">
                  <li>
                    <a href="https://www.canada.ca/en/services/jobs.html">
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/immigration-citizenship.html">
                      Immigration and citizenship
                    </a>
                  </li>
                  <li>
                    <a href="https://travel.gc.ca/">
                      Travel and tourism
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/business.html">
                      Business
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/benefits.html">
                      Benefits
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/health.html">
                      Health
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/taxes.html">
                      Taxes
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/environment.html">
                      Environment and natural resources
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/defence.html">
                      National security and defence
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/culture.html">
                      Culture, history and sport
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/policing.html">
                      Policing, justice and emergencies
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/transport.html">
                      Transport and infrastructure
                    </a>
                  </li>
                  <li>
                    <a href="https://international.gc.ca/world-monde/index.aspx?lang=eng">
                      Canada and the world
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/finance.html">
                      Money and finance
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/science.html">
                      Science and innovation
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/indigenous-peoples.html">
                      Indigenous peoples
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/veterans.html">
                      Veterans and military
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/services/youth.html">
                      Youth
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="gcds-footer__sub">
            <div class="sub__container">
              <nav aria-labelledby="sub__header">
                <h3 class="sub__header" id="sub__header">
                  Government of Canada Corporate
                </h3>
                <ul>
                  <li>
                    <a href="https://www.canada.ca/en/social.html">
                      Social media
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/mobile.html">
                      Mobile applications
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/government/about.html">
                      About Canada.ca
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/transparency/terms.html">
                      Terms and conditions
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/transparency/privacy.html">
                      Privacy
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="sub__wordmark">
                <gcds-signature lang="en" type="wordmark" variant="colour"></gcds-signature>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-footer>
    `);
  });

  it('renders with sub links - English', async () => {
    const page = await newSpecPage({
      components: [GcdsFooter],
      html: `<gcds-footer
          display="compact"
          lang="en"
          sub-links='{ "Link 1": "#red", "Link 2": "#green", "Link 3": "#blue" }'
        ></gcds-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-footer role="contentinfo" display="compact" lang="en" sub-links="{ &quot;Link 1&quot;: &quot;#red&quot;, &quot;Link 2&quot;: &quot;#green&quot;, &quot;Link 3&quot;: &quot;#blue&quot; }">
        <mock:shadow-root>
          <h2 class="gcds-footer__header">About this site</h2>
          <div class="gcds-footer__sub">
            <div class="sub__container">
              <nav aria-labelledby="sub__header">
                <h3 class="sub__header" id="sub__header">
                  Government of Canada Corporate
                </h3>
                <ul>
                  <li>
                    <a href="#red">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#green">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#blue">
                      Link 3
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="sub__wordmark">
                <gcds-signature lang="en" type="wordmark" variant="colour"></gcds-signature>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-footer>
    `);
  });
});
