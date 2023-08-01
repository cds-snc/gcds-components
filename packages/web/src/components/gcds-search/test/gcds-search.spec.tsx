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
        <section class="gcds-search">
          <h2 class="gcds-search__header">
            Search
          </h2>
          <form action="https://www.canada.ca/en/sr/srb.html" class="gcds-search__form" method="get" role="search">
            <gcds-label hide-label="" label="Search Canada.ca" label-for="search"></gcds-label>
            <input class="gcds-search__input" id="search" list="search-list" maxlength="170" name="q" placeholder="Search Canada.ca" size="34" type="search">
            <gcds-button class="gcds-search__button" exportparts="button" type="submit">
              <gcds-icon fixed-width="" label="Search" name="search"></gcds-icon>
            </gcds-button>
          </form>
        </section>
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
      <section class="gcds-search">
          <h2 class="gcds-search__header">
            Recherche
          </h2>
          <form action="https://www.canada.ca/fr/sr/srb.html" class="gcds-search__form" method="get" role="search">
            <gcds-label hide-label="" label="Recherche dans Canada.ca" label-for="search"></gcds-label>
            <input class="gcds-search__input" id="search" list="search-list" maxlength="170" name="q" placeholder="Recherche dans Canada.ca" size="34" type="search">
            <gcds-button class="gcds-search__button" exportparts="button" type="submit">
              <gcds-icon fixed-width="" label="Recherche" name="search"></gcds-icon>
            </gcds-button>
          </form>
        </section>
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
        <section class="gcds-search">
          <h2 class="gcds-search__header">
            Search
          </h2>
          <form action="submit.html" class="gcds-search__form" method="post" role="search">
          <gcds-label hide-label="" label="Search Text.ca" label-for="searchForm"></gcds-label>
            <input class="gcds-search__input" id="searchForm" list="search-list" maxlength="170" name="s" placeholder="Search Text.ca" size="34" type="search">
            <gcds-button class="gcds-search__button" exportparts="button" type="submit">
              <gcds-icon fixed-width="" label="Search" name="search"></gcds-icon>
            </gcds-button>
          </form>
        </section>
      </gcds-search>
    `);
  });
});
