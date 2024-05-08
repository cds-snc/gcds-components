import { newSpecPage } from '@stencil/core/testing';
import { GcdsSearch } from '../gcds-search';

describe('gcds-search', () => {
  it('renders w/ defaults', async () => {
    const page = await newSpecPage({
      components: [GcdsSearch],
      html: `<gcds-search></gcds-search>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-search>
        <mock:shadow-root>
          <div class="gcds-search">
            <gcds-sr-only tag="h2">
              Search
            </gcds-sr-only>
            <form action="https://www.canada.ca/en/sr/srb.html" class="gcds-search__form" method="get" role="search">
              <gcds-label hide-label="" label="Search Canada.ca" label-for="search"></gcds-label>
              <input class="gcds-search__input" id="search" list="search-list" maxlength="170" name="q" placeholder="Search Canada.ca" size="34" type="search">
              <gcds-button class="gcds-search__button" exportparts="button" type="submit">
                <gcds-icon fixed-width="" label="Search" name="search"></gcds-icon>
              </gcds-button>
            </form>
          </div>
        </mock:shadowroot>
      </gcds-search>
    `);
  });
  it('renders french', async () => {
    const page = await newSpecPage({
      components: [GcdsSearch],
      html: `<gcds-search lang="fr"></gcds-search>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-search lang="fr">
        <mock:shadow-root>
          <div class="gcds-search">
            <gcds-sr-only tag="h2">
              Recherche
            </gcds-sr-only>
            <form action="https://www.canada.ca/fr/sr/srb.html" class="gcds-search__form" method="get" role="search">
              <gcds-label hide-label="" label="Rechercher dans Canada.ca" label-for="search"></gcds-label>
              <input class="gcds-search__input" id="search" list="search-list" maxlength="170" name="q" placeholder="Rechercher dans Canada.ca" size="34" type="search">
              <gcds-button class="gcds-search__button" exportparts="button" type="submit">
                <gcds-icon fixed-width="" label="Recherche" name="search"></gcds-icon>
              </gcds-button>
            </form>
          </div>
        </mock:shadowroot>
      </gcds-search>
    `);
  });
  it('renders w/ custom properties', async () => {
    const page = await newSpecPage({
      components: [GcdsSearch],
      html: `<gcds-search
        search-id="searchForm"
        name="s"
        method="post"
        action="submit.html"
        placeholder="Text.ca"
      ></gcds-search>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-search action="submit.html" method="post" name="s" placeholder="Text.ca" search-id="searchForm">
        <mock:shadow-root>
          <div class="gcds-search">
            <gcds-sr-only tag="h2">
              Search
            </gcds-sr-only>
            <form action="submit.html" class="gcds-search__form" method="post" role="search">
            <gcds-label hide-label="" label="Search Text.ca" label-for="searchForm"></gcds-label>
              <input class="gcds-search__input" id="searchForm" list="search-list" maxlength="170" name="s" placeholder="Search Text.ca" size="34" type="search">
              <gcds-button class="gcds-search__button" exportparts="button" type="submit">
                <gcds-icon fixed-width="" label="Search" name="search"></gcds-icon>
              </gcds-button>
            </form>
          </div>
        </mock:shadowroot>
      </gcds-search>
    `);
  });
});
