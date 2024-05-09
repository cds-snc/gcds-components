import { newSpecPage } from '@stencil/core/testing';
import { GcdsFooter } from '../gcds-footer';

describe('gcds-footer', () => {
  it('renders compact - English', async () => {
    const page = await newSpecPage({
      components: [GcdsFooter],
      html: `<gcds-footer display="compact" lang="en"></gcds-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-footer role="contentinfo" display="compact" lang="en" aria-label="Footer">
        <mock:shadow-root>
          <gcds-sr-only tag="h2">About this site</gcds-sr-only>
          <div class="gcds-footer__sub">
            <div class="sub__container">
              <nav aria-labelledby="sub__heading">
                <gcds-sr-only id="sub__heading" tag="h3">
                  Government of Canada Corporate
                </gcds-sr-only>
                <ul>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/social.html">
                      Social media
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/mobile.html">
                      Mobile applications
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/government/about.html">
                      About Canada.ca
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/transparency/terms.html">
                      Terms and conditions
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/transparency/privacy.html">
                      Privacy
                    </gcds-link>
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
      <gcds-footer role="contentinfo" display="full" lang="en" aria-label="Footer">
        <mock:shadow-root>
          <gcds-sr-only tag="h2">About this site</gcds-sr-only>
          <div class="gcds-footer__main">
            <div class="main__container">
              <nav aria-labelledby="govnav__heading" class="main__govnav">
                <h3 id="govnav__heading">
                  Government of Canada
                </h3>
                <ul class="govnav__list">
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/contact.html">
                      All Contacts
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/government/dept.html">
                      Departments and agencies
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/government/system.html">
                      About government
                    </gcds-link>
                  </li>
                </ul>
              </nav>
              <nav aria-labelledby="themenav__heading" class="main__themenav">
                <gcds-sr-only tag="h4" id="themenav__heading">
                  Themes and topics
                </gcds-sr-only>
                <ul class="themenav__list">
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/jobs.html">
                      Jobs
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/immigration-citizenship.html">
                      Immigration and citizenship
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://travel.gc.ca/">
                      Travel and tourism
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/business.html">
                      Business
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/benefits.html">
                      Benefits
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/health.html">
                      Health
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/taxes.html">
                      Taxes
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/environment.html">
                      Environment and natural resources
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/defence.html">
                      National security and defence
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/culture.html">
                      Culture, history and sport
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/policing.html">
                      Policing, justice and emergencies
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/transport.html">
                      Transport and infrastructure
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://international.gc.ca/world-monde/index.aspx?lang=eng">
                      Canada and the world
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/finance.html">
                      Money and finance
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/science.html">
                      Science and innovation
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/indigenous-peoples.html">
                      Indigenous peoples
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/veterans.html">
                      Veterans and military
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/youth.html">
                      Youth
                    </gcds-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="gcds-footer__sub">
            <div class="sub__container">
              <nav aria-labelledby="sub__heading">
                <gcds-sr-only id="sub__heading" tag="h3">
                  Government of Canada Corporate
                </gcds-sr-only>
                <ul>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/social.html">
                      Social media
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/mobile.html">
                      Mobile applications
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/government/about.html">
                      About Canada.ca
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/transparency/terms.html">
                      Terms and conditions
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/transparency/privacy.html">
                      Privacy
                    </gcds-link>
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
      <gcds-footer role="contentinfo" display="compact" lang="fr" aria-label="Footer">
        <mock:shadow-root>
          <gcds-sr-only tag="h2">À propos de ce site</gcds-sr-only>
          <div class="gcds-footer__sub">
            <div class="sub__container">
              <nav aria-labelledby="sub__heading">
                <gcds-sr-only id="sub__heading" tag="h3">
                  Organisation du gouvernement du Canada
                </gcds-sr-only>
                <ul>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/sociaux.html">
                      Médias sociaux
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/mobile.html">
                      Applications mobiles
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/gouvernement/a-propos.html">
                      À propos de Canada.ca
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/transparence/avis.html">
                      Avis
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/transparence/confidentialite.html">
                      Confidentialité
                    </gcds-link>
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
      <gcds-footer role="contentinfo" display="full" lang="fr" aria-label="Footer">
        <mock:shadow-root>
          <gcds-sr-only tag="h2">À propos de ce site</gcds-sr-only>
          <div class="gcds-footer__main">
            <div class="main__container">
              <nav aria-labelledby="govnav__heading" class="main__govnav">
                <h3 id="govnav__heading">
                  Gouvernement du Canada
                </h3>
                <ul class="govnav__list">
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/contact.html">
                      Toutes les coordonnées
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/gouvernement/min.html">
                      Ministères et organismes
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/gouvernement/systeme.html">
                      À propos du gouvernement
                    </gcds-link>
                  </li>
                </ul>
              </nav>
              <nav aria-labelledby="themenav__heading" class="main__themenav">
                <gcds-sr-only tag="h4" id="themenav__heading">
                  Thèmes et sujets
                </gcds-sr-only>
                <ul class="themenav__list">
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/services/emplois.html">
                      Emplois
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/services/immigration-citoyennete.html">
                      Immigration et citoyenneté
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://voyage.gc.ca/">
                      Voyage et tourisme
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/services/entreprises.html">
                      Entreprises
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/services/prestations.html">
                      Prestations
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/services/sante.html">
                      Santé
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/services/impots.html">
                      Impôts
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/services/environnement.html">
                      Environnement et ressources naturelles
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/services/defense.html">
                      Sécurité nationale et défense
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/services/culture.html">
                      Culture, histoire et sport
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/services/police.html">
                      Services de police, justice et urgences
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/services/transport.html">
                      Transport et infrastructure
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.international.gc.ca/world-monde/index.aspx?lang=fra">
                      Le Canada et le monde
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/services/finance.html">
                      Argent et finance
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/services/science.html">
                      Science et innovation
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/services/autochtones.html">
                      Autochtones
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/services/veterans.html">
                      Vétérans et militaires
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/services/jeunesse.html">
                      Jeunesse
                    </gcds-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="gcds-footer__sub">
            <div class="sub__container">
              <nav aria-labelledby="sub__heading">
                <gcds-sr-only id="sub__heading" tag="h3">
                  Organisation du gouvernement du Canada
                </gcds-sr-only>
                <ul>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/sociaux.html">
                      Médias sociaux
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/mobile.html">
                      Applications mobiles
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/gouvernement/a-propos.html">
                      À propos de Canada.ca
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/transparence/avis.html">
                      Avis
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/fr/transparence/confidentialite.html">
                      Confidentialité
                    </gcds-link>
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
      <gcds-footer contextual-heading="Heading" contextual-links="{ &quot;Link 1&quot;: &quot;#red&quot;, &quot;Link 2&quot;: &quot;#green&quot;, &quot;Link 3&quot;: &quot;#blue&quot; }" display="full" lang="en" role="contentinfo" aria-label="Footer">
        <mock:shadow-root>
          <gcds-sr-only tag="h2">About this site</gcds-sr-only>
          <div class="gcds-footer__contextual">
            <div class="contextual__container">
              <nav aria-labelledby="contextual__heading">
                <h3 class="contextual__heading" id="contextual__heading">
                  Heading
                </h3>
                <ul class="contextual__list">
                  <li>
                    <gcds-link size="small" href="#red">
                      Link 1
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="#green">
                      Link 2
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="#blue">
                      Link 3
                    </gcds-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="gcds-footer__main">
            <div class="main__container">
              <nav aria-labelledby="govnav__heading" class="main__govnav">
                <h3 id="govnav__heading">
                  Government of Canada
                </h3>
                <ul class="govnav__list">
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/contact.html">
                      All Contacts
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/government/dept.html">
                      Departments and agencies
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/government/system.html">
                      About government
                    </gcds-link>
                  </li>
                </ul>
              </nav>
              <nav aria-labelledby="themenav__heading" class="main__themenav">
                <gcds-sr-only tag="h4" id="themenav__heading">
                  Themes and topics
                </gcds-sr-only>
                <ul class="themenav__list">
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/jobs.html">
                      Jobs
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/immigration-citizenship.html">
                      Immigration and citizenship
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://travel.gc.ca/">
                      Travel and tourism
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/business.html">
                      Business
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/benefits.html">
                      Benefits
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/health.html">
                      Health
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/taxes.html">
                      Taxes
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/environment.html">
                      Environment and natural resources
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/defence.html">
                      National security and defence
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/culture.html">
                      Culture, history and sport
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/policing.html">
                      Policing, justice and emergencies
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/transport.html">
                      Transport and infrastructure
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://international.gc.ca/world-monde/index.aspx?lang=eng">
                      Canada and the world
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/finance.html">
                      Money and finance
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/science.html">
                      Science and innovation
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/indigenous-peoples.html">
                      Indigenous peoples
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/veterans.html">
                      Veterans and military
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/services/youth.html">
                      Youth
                    </gcds-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="gcds-footer__sub">
            <div class="sub__container">
              <nav aria-labelledby="sub__heading">
                <gcds-sr-only id="sub__heading" tag="h3">
                  Government of Canada Corporate
                </gcds-sr-only>
                <ul>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/social.html">
                      Social media
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/mobile.html">
                      Mobile applications
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/government/about.html">
                      About Canada.ca
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/transparency/terms.html">
                      Terms and conditions
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="https://www.canada.ca/en/transparency/privacy.html">
                      Privacy
                    </gcds-link>
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
      <gcds-footer role="contentinfo" display="compact" lang="en" sub-links="{ &quot;Link 1&quot;: &quot;#red&quot;, &quot;Link 2&quot;: &quot;#green&quot;, &quot;Link 3&quot;: &quot;#blue&quot; }" aria-label="Footer">
        <mock:shadow-root>
          <gcds-sr-only tag="h2">About this site</gcds-sr-only>
          <div class="gcds-footer__sub">
            <div class="sub__container">
              <nav aria-labelledby="sub__heading">
                <gcds-sr-only id="sub__heading" tag="h3">
                  Government of Canada Corporate
                </gcds-sr-only>
                <ul>
                  <li>
                    <gcds-link size="small" href="#red">
                      Link 1
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="#green">
                      Link 2
                    </gcds-link>
                  </li>
                  <li>
                    <gcds-link size="small" href="#blue">
                      Link 3
                    </gcds-link>
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
