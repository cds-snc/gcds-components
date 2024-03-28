import { newSpecPage } from '@stencil/core/testing';
import { GcdsPagination } from '../gcds-pagination';

describe('gcds-pagination', () => {
  it('render simple label - English', async () => {
    const page = await newSpecPage({
      components: [GcdsPagination],
      html: `
      <gcds-pagination
        display="simple"
        previous-href="#previous"
        previous-label="Previous label"
        next-href="#next"
        next-label="Next label"
        lang="en"
      ></gcds-pagination>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-pagination display="simple" lang="en" next-href="#next" next-label="Next label" previous-href="#previous" previous-label="Previous label" role="navigation">
        <mock:shadow-root>
          <div class="gcds-pagination">
            <ul class="gcds-pagination-simple">
              <li class="gcds-pagination-simple-previous">
                <a aria-label="Previous page: Previous label" href="#previous">
                  <gcds-icon margin-right="200" name="arrow-left"></gcds-icon>
                  <div class="gcds-pagination-simple-text">
                    Previous
                  </div>
                  <span>
                    Previous label
                  </span>
                </a>
              </li>
              <li class="gcds-pagination-simple-next">
                <a aria-label="Next page: Next label" href="#next">
                  <div class="gcds-pagination-simple-text">
                    Next
                  </div>
                  <span>
                    Next label
                  </span>
                  <gcds-icon margin-left="200" name="arrow-right"></gcds-icon>
                </a>
              </li>
            </ul>
          </div>
        </mock:shadow-root>
      </gcds-pagination>
    `);
  });

  it('render simple no label - English', async () => {
    const page = await newSpecPage({
      components: [GcdsPagination],
      html: `
      <gcds-pagination
        display="simple"
        previous-href="#previous"
        next-href="#next"
        lang="en"
      ></gcds-pagination>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-pagination display="simple" lang="en" next-href="#next" previous-href="#previous" role="navigation">
        <mock:shadow-root>
          <div class="gcds-pagination">
            <ul class="gcds-pagination-simple">
              <li class="gcds-pagination-simple-previous">
                <a aria-label="Previous page" href="#previous">
                  <gcds-icon margin-right="200" name="arrow-left"></gcds-icon>
                  <div class="gcds-pagination-simple-text">
                    Previous
                  </div>
                  <span>
                  </span>
                </a>
              </li>
              <li class="gcds-pagination-simple-next">
                <a aria-label="Next page" href="#next">
                  <div class="gcds-pagination-simple-text">
                    Next
                  </div>
                  <span>
                  </span>
                  <gcds-icon margin-left="200" name="arrow-right"></gcds-icon>
                </a>
              </li>
            </ul>
          </div>
        </mock:shadow-root>
      </gcds-pagination>
    `);
  });

  it('render simple label - French', async () => {
    const page = await newSpecPage({
      components: [GcdsPagination],
      html: `
      <gcds-pagination
        display="simple"
        previous-href="#previous"
        previous-label="Previous label"
        next-href="#next"
        next-label="Next label"
        lang="fr"
      ></gcds-pagination>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-pagination display="simple" lang="fr" next-href="#next" next-label="Next label" previous-href="#previous" previous-label="Previous label" role="navigation">
        <mock:shadow-root>
          <div class="gcds-pagination">
            <ul class="gcds-pagination-simple">
              <li class="gcds-pagination-simple-previous">
                <a aria-label="Page précédente: Previous label" href="#previous">
                  <gcds-icon margin-right="200" name="arrow-left"></gcds-icon>
                  <div class="gcds-pagination-simple-text">
                  Précédent
                  </div>
                  <span>
                    Previous label
                  </span>
                </a>
              </li>
              <li class="gcds-pagination-simple-next">
                <a aria-label="Page suivante: Next label" href="#next">
                  <div class="gcds-pagination-simple-text">
                    Suivante
                  </div>
                  <span>
                    Next label
                  </span>
                  <gcds-icon margin-left="200" name="arrow-right"></gcds-icon>
                </a>
              </li>
            </ul>
          </div>
        </mock:shadow-root>
      </gcds-pagination>
    `);
  });

  it('render simple no label - French', async () => {
    const page = await newSpecPage({
      components: [GcdsPagination],
      html: `
      <gcds-pagination
        display="simple"
        previous-href="#previous"
        next-href="#next"
        lang="fr"
      ></gcds-pagination>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-pagination display="simple" lang="fr" next-href="#next" previous-href="#previous" role="navigation">
        <mock:shadow-root>
          <div class="gcds-pagination">
            <ul class="gcds-pagination-simple">
              <li class="gcds-pagination-simple-previous">
                <a aria-label="Page précédente" href="#previous">
                  <gcds-icon margin-right="200" name="arrow-left"></gcds-icon>
                  <div class="gcds-pagination-simple-text">
                    Précédent
                  </div>
                  <span>
                  </span>
                </a>
              </li>
              <li class="gcds-pagination-simple-next">
                <a aria-label="Page suivante" href="#next">
                  <div class="gcds-pagination-simple-text">
                    Suivante
                  </div>
                  <span>
                  </span>
                  <gcds-icon margin-left="200" name="arrow-right"></gcds-icon>
                </a>
              </li>
            </ul>
          </div>
        </mock:shadow-root>
      </gcds-pagination>
    `);
  });

  it('render list - under 10 items - English', async () => {
    const page = await newSpecPage({
      components: [GcdsPagination],
      html: `
      <gcds-pagination
        display="list"
        current-page="5"
        total-pages="9"
        label="Search results"
        lang="en"
      ></gcds-pagination>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-pagination aria-label="Search results" current-page="5" display="list" label="Search results" lang="en" role="navigation" total-pages="9">
        <mock:shadow-root>
          <div class="gcds-pagination">
            <div>
              <ul class="gcds-pagination-list">
                <li>
                  <a aria-label="Previous page: Page 4 of 9 of Search results" class="gcds-pagination-end-button" href="javascript:void(0)">
                    <gcds-icon margin-right="200" name="arrow-left"></gcds-icon>
                    Previous
                  </a>
                </li>
                <li>
                  <a aria-label="Page 1 of 9 of Search results" href="javascript:void(0)">
                    1
                  </a>
                </li>
                <li aria-hidden="true" class="gcds-pagination-list-mobile-ellipses">
                  <span class="gcds-pagination-list-ellipses">
                    ...
                  </span>
                </li>
                <li class="gcds-pagination-list-breakpoint-sm">
                  <a aria-label="Page 2 of 9 of Search results" href="javascript:void(0)">
                    2
                  </a>
                </li>
                <li class="gcds-pagination-list-breakpoint-xs">
                  <a aria-label="Page 3 of 9 of Search results" href="javascript:void(0)">
                    3
                  </a>
                </li>
                <li>
                  <a aria-label="Page 4 of 9 of Search results" href="javascript:void(0)">
                    4
                  </a>
                </li>
                <li>
                  <a aria-current="page" aria-label="Page 5 of 9 of Search results" href="javascript:void(0)">
                    5
                  </a>
                </li>
                <li>
                  <a aria-label="Page 6 of 9 of Search results" href="javascript:void(0)">
                    6
                  </a>
                </li>
                <li class="gcds-pagination-list-breakpoint-xs">
                  <a aria-label="Page 7 of 9 of Search results" href="javascript:void(0)">
                    7
                  </a>
                </li>
                <li class="gcds-pagination-list-breakpoint-sm">
                  <a aria-label="Page 8 of 9 of Search results" href="javascript:void(0)">
                    8
                  </a>
                </li>
                <li aria-hidden="true" class="gcds-pagination-list-mobile-ellipses">
                  <span class="gcds-pagination-list-ellipses">
                    ...
                  </span>
                </li>
                <li>
                  <a aria-label="Page 9 of 9 of Search results" href="javascript:void(0)">
                    9
                  </a>
                </li>
                <li>
                  <a aria-label="Next page: Page 6 of 9 of Search results" class="gcds-pagination-end-button" href="javascript:void(0)">
                    Next
                    <gcds-icon margin-left="200" name="arrow-right"></gcds-icon>
                  </a>
                </li>
              </ul>
              <ul class="gcds-pagination-list-mobile-prevnext">
                <li>
                  <a aria-label="Previous page: Page 4 of 9 of Search results" class="gcds-pagination-end-button-mobile" href="javascript:void(0)">
                    <gcds-icon margin-right="200" name="arrow-left"></gcds-icon>
                    Prev
                  </a>
                </li>
                <li>
                  <a aria-label="Next page: Page 6 of 9 of Search results" class="gcds-pagination-end-button-mobile" href="javascript:void(0)">
                    Next
                    <gcds-icon margin-left="200" name="arrow-right"></gcds-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-pagination>
    `);
  });

  it('render list - 20 items - English', async () => {
    const page = await newSpecPage({
      components: [GcdsPagination],
      html: `
      <gcds-pagination
        display="list"
        current-page="10"
        total-pages="20"
        label="Search results"
        lang="en"
      ></gcds-pagination>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-pagination aria-label="Search results" current-page="10" display="list" label="Search results" lang="en" role="navigation" total-pages="20">
        <mock:shadow-root>
          <div class="gcds-pagination">
            <div>
              <ul class="gcds-pagination-list">
                <li>
                  <a aria-label="Previous page: Page 9 of 20 of Search results" class="gcds-pagination-end-button" href="javascript:void(0)">
                    <gcds-icon margin-right="200" name="arrow-left"></gcds-icon>
                    Previous
                  </a>
                </li>
                <li>
                  <a aria-label="Page 1 of 20 of Search results" href="javascript:void(0)">
                    1
                  </a>
                </li>
                <li aria-hidden="true">
                  <span class="gcds-pagination-list-ellipses">
                    ...
                  </span>
                </li>
                <li class="gcds-pagination-list-breakpoint-xxs">
                  <a aria-label="Page 8 of 20 of Search results" href="javascript:void(0)">
                    8
                  </a>
                </li>
                <li>
                  <a aria-label="Page 9 of 20 of Search results" href="javascript:void(0)">
                    9
                  </a>
                </li>
                <li>
                  <a aria-current="page" aria-label="Page 10 of 20 of Search results" href="javascript:void(0)">
                    10
                  </a>
                </li>
                <li>
                  <a aria-label="Page 11 of 20 of Search results" href="javascript:void(0)">
                    11
                  </a>
                </li>
                <li class="gcds-pagination-list-breakpoint-xxs">
                  <a aria-label="Page 12 of 20 of Search results" href="javascript:void(0)">
                    12
                  </a>
                </li>
                <li aria-hidden="true">
                  <span class="gcds-pagination-list-ellipses">
                    ...
                  </span>
                </li>
                <li>
                  <a aria-label="Page 20 of 20 of Search results" href="javascript:void(0)">
                    20
                  </a>
                </li>
                <li>
                  <a aria-label="Next page: Page 11 of 20 of Search results" class="gcds-pagination-end-button" href="javascript:void(0)">
                    Next
                    <gcds-icon margin-left="200" name="arrow-right"></gcds-icon>
                  </a>
                </li>
              </ul>
              <ul class="gcds-pagination-list-mobile-prevnext">
                <li>
                  <a aria-label="Previous page: Page 9 of 20 of Search results" class="gcds-pagination-end-button-mobile" href="javascript:void(0)">
                    <gcds-icon margin-right="200" name="arrow-left"></gcds-icon>
                    Prev
                  </a>
                </li>
                <li>
                  <a aria-label="Next page: Page 11 of 20 of Search results" class="gcds-pagination-end-button-mobile" href="javascript:void(0)">
                    Next
                    <gcds-icon margin-left="200" name="arrow-right"></gcds-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-pagination>
    `);
  });

  it('render list - under 10 items - French', async () => {
    const page = await newSpecPage({
      components: [GcdsPagination],
      html: `
      <gcds-pagination
        display="list"
        current-page="5"
        total-pages="9"
        label="Search results"
        lang="fr"
      ></gcds-pagination>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-pagination aria-label="Search results" current-page="5" display="list" label="Search results" lang="fr" role="navigation" total-pages="9">
        <mock:shadow-root>
          <div class="gcds-pagination">
            <div>
              <ul class="gcds-pagination-list">
                <li>
                  <a aria-label="Page précédente: Page 4 sur 9 des Search results" class="gcds-pagination-end-button" href="javascript:void(0)">
                    <gcds-icon margin-right="200" name="arrow-left"></gcds-icon>
                    Précédent
                  </a>
                </li>
                <li>
                  <a aria-label="Page 1 sur 9 des Search results" href="javascript:void(0)">
                    1
                  </a>
                </li>
                <li aria-hidden="true" class="gcds-pagination-list-mobile-ellipses">
                  <span class="gcds-pagination-list-ellipses">
                    ...
                  </span>
                </li>
                <li class="gcds-pagination-list-breakpoint-sm">
                  <a aria-label="Page 2 sur 9 des Search results" href="javascript:void(0)">
                    2
                  </a>
                </li>
                <li class="gcds-pagination-list-breakpoint-xs">
                  <a aria-label="Page 3 sur 9 des Search results" href="javascript:void(0)">
                    3
                  </a>
                </li>
                <li>
                  <a aria-label="Page 4 sur 9 des Search results" href="javascript:void(0)">
                    4
                  </a>
                </li>
                <li>
                  <a aria-current="page" aria-label="Page 5 sur 9 des Search results" href="javascript:void(0)">
                    5
                  </a>
                </li>
                <li>
                  <a aria-label="Page 6 sur 9 des Search results" href="javascript:void(0)">
                    6
                  </a>
                </li>
                <li class="gcds-pagination-list-breakpoint-xs">
                  <a aria-label="Page 7 sur 9 des Search results" href="javascript:void(0)">
                    7
                  </a>
                </li>
                <li class="gcds-pagination-list-breakpoint-sm">
                  <a aria-label="Page 8 sur 9 des Search results" href="javascript:void(0)">
                    8
                  </a>
                </li>
                <li aria-hidden="true" class="gcds-pagination-list-mobile-ellipses">
                  <span class="gcds-pagination-list-ellipses">
                    ...
                  </span>
                </li>
                <li>
                  <a aria-label="Page 9 sur 9 des Search results" href="javascript:void(0)">
                    9
                  </a>
                </li>
                <li>
                  <a aria-label="Page suivante: Page 6 sur 9 des Search results" class="gcds-pagination-end-button" href="javascript:void(0)">
                    Suivante
                    <gcds-icon margin-left="200" name="arrow-right"></gcds-icon>
                  </a>
                </li>
              </ul>
              <ul class="gcds-pagination-list-mobile-prevnext">
                <li>
                  <a aria-label="Page précédente: Page 4 sur 9 des Search results" class="gcds-pagination-end-button-mobile" href="javascript:void(0)">
                    <gcds-icon margin-right="200" name="arrow-left"></gcds-icon>
                    Préc.
                  </a>
                </li>
                <li>
                  <a aria-label="Page suivante: Page 6 sur 9 des Search results" class="gcds-pagination-end-button-mobile" href="javascript:void(0)">
                    Suivante
                    <gcds-icon margin-left="200" name="arrow-right"></gcds-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-pagination>
    `);
  });

  it('render list - 20 items - French', async () => {
    const page = await newSpecPage({
      components: [GcdsPagination],
      html: `
      <gcds-pagination
        display="list"
        current-page="10"
        total-pages="20"
        label="Search results"
        lang="fr"
      ></gcds-pagination>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-pagination aria-label="Search results" current-page="10" display="list" label="Search results" lang="fr" role="navigation" total-pages="20">
        <mock:shadow-root>
          <div class="gcds-pagination">
            <div>
              <ul class="gcds-pagination-list">
                <li>
                  <a aria-label="Page précédente: Page 9 sur 20 des Search results" class="gcds-pagination-end-button" href="javascript:void(0)">
                    <gcds-icon margin-right="200" name="arrow-left"></gcds-icon>
                    Précédent
                  </a>
                </li>
                <li>
                  <a aria-label="Page 1 sur 20 des Search results" href="javascript:void(0)">
                    1
                  </a>
                </li>
                <li aria-hidden="true">
                  <span class="gcds-pagination-list-ellipses">
                    ...
                  </span>
                </li>
                <li class="gcds-pagination-list-breakpoint-xxs">
                  <a aria-label="Page 8 sur 20 des Search results" href="javascript:void(0)">
                    8
                  </a>
                </li>
                <li>
                  <a aria-label="Page 9 sur 20 des Search results" href="javascript:void(0)">
                    9
                  </a>
                </li>
                <li>
                  <a aria-current="page" aria-label="Page 10 sur 20 des Search results" href="javascript:void(0)">
                    10
                  </a>
                </li>
                <li>
                  <a aria-label="Page 11 sur 20 des Search results" href="javascript:void(0)">
                    11
                  </a>
                </li>
                <li class="gcds-pagination-list-breakpoint-xxs">
                  <a aria-label="Page 12 sur 20 des Search results" href="javascript:void(0)">
                    12
                  </a>
                </li>
                <li aria-hidden="true">
                  <span class="gcds-pagination-list-ellipses">
                    ...
                  </span>
                </li>
                <li>
                  <a aria-label="Page 20 sur 20 des Search results" href="javascript:void(0)">
                    20
                  </a>
                </li>
                <li>
                  <a aria-label="Page suivante: Page 11 sur 20 des Search results" class="gcds-pagination-end-button" href="javascript:void(0)">
                    Suivante
                    <gcds-icon margin-left="200" name="arrow-right"></gcds-icon>
                  </a>
                </li>
              </ul>
              <ul class="gcds-pagination-list-mobile-prevnext">
                <li>
                  <a aria-label="Page précédente: Page 9 sur 20 des Search results" class="gcds-pagination-end-button-mobile" href="javascript:void(0)">
                    <gcds-icon margin-right="200" name="arrow-left"></gcds-icon>
                    Préc.
                  </a>
                </li>
                <li>
                  <a aria-label="Page suivante: Page 11 sur 20 des Search results" class="gcds-pagination-end-button-mobile" href="javascript:void(0)">
                    Suivante
                    <gcds-icon margin-left="200" name="arrow-right"></gcds-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-pagination>
    `);
  });
});
