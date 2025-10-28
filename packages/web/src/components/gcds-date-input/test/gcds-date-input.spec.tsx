import { newSpecPage } from '@stencil/core/testing';
import { GcdsDateInput } from '../gcds-date-input';

describe('gcds-date-input', () => {
  it('renders - full', async () => {
    const page = await newSpecPage({
      components: [GcdsDateInput],
      html: `<gcds-date-input legend="Date input" name="date" format="full"></gcds-date-input>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-date-input format="full" legend="Date input" name="date">
        <mock:shadow-root>
          <fieldset aria-labelledby="date-input-legend" class="gcds-date-input__fieldset" tabindex="-1">
            <legend id="date-input-legend">
              Date input
            </legend>
            <gcds-select aria-invalid="false" class="gcds-date-input__month" defaultvalue="Select a month" label="Month" name="month" selectid="month" value="">
              <option value="01">
                January
              </option>
              <option value="02">
                February
              </option>
              <option value="03">
                March
              </option>
              <option value="04">
                April
              </option>
              <option value="05">
                May
              </option>
              <option value="06">
                June
              </option>
              <option value="07">
                July
              </option>
              <option value="08">
                August
              </option>
              <option value="09">
                September
              </option>
              <option value="10">
                October
              </option>
              <option value="11">
                November
              </option>
              <option value="12">
                December
              </option>
            </gcds-select>
            <gcds-input aria-invalid="false" class="gcds-date-input__day" inputid="day" label="Day" name="day" size="2" type="number" value=""></gcds-input>
            <gcds-input aria-invalid="false" class="gcds-date-input__year" inputid="year" label="Year" name="year" size="4" type="number" value=""></gcds-input>
          </fieldset>
        </gcds-date-input>
    `);
  });

  it('renders - full - french', async () => {
    const page = await newSpecPage({
      components: [GcdsDateInput],
      html: `<gcds-date-input legend="Date input" name="date" format="full" lang="fr"></gcds-date-input>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-date-input format="full" lang="fr" legend="Date input" name="date">
        <mock:shadow-root>
          <fieldset aria-labelledby="date-input-legend" class="gcds-date-input__fieldset" tabindex="-1">
            <legend id="date-input-legend">
              Date input
            </legend>
            <gcds-input aria-invalid="false" class="gcds-date-input__day" inputid="day" label="Jour" name="day" size="2" type="number" value=""></gcds-input>
            <gcds-select aria-invalid="false" class="gcds-date-input__month" defaultvalue="Sélectionnez un mois" label="Mois" name="month" selectid="month" value="">
              <option value="01">
                janvier
              </option>
              <option value="02">
                février
              </option>
              <option value="03">
                mars
              </option>
              <option value="04">
                avril
              </option>
              <option value="05">
                mai
              </option>
              <option value="06">
                juin
              </option>
              <option value="07">
                juillet
              </option>
              <option value="08">
                août
              </option>
              <option value="09">
                septembre
              </option>
              <option value="10">
                octobre
              </option>
              <option value="11">
                novembre
              </option>
              <option value="12">
                décembre
              </option>
            </gcds-select>
            <gcds-input aria-invalid="false" class="gcds-date-input__year" inputid="year" label="Année" name="year" size="4" type="number" value=""></gcds-input>
          </fieldset>
        </mock:shadow-root>
      </gcds-date-input>
    `);
  });

  it('renders - compact', async () => {
    const page = await newSpecPage({
      components: [GcdsDateInput],
      html: `<gcds-date-input legend="Date input" name="date" format="compact"></gcds-date-input>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-date-input format="compact" legend="Date input" name="date">
        <mock:shadow-root>
          <fieldset aria-labelledby="date-input-legend" class="gcds-date-input__fieldset" tabindex="-1">
            <legend id="date-input-legend">
              Date input
            </legend>
            <gcds-select aria-invalid="false" class="gcds-date-input__month" defaultvalue="Select a month" label="Month" name="month" selectid="month" value="">
              <option value="01">
                January
              </option>
              <option value="02">
                February
              </option>
              <option value="03">
                March
              </option>
              <option value="04">
                April
              </option>
              <option value="05">
                May
              </option>
              <option value="06">
                June
              </option>
              <option value="07">
                July
              </option>
              <option value="08">
                August
              </option>
              <option value="09">
                September
              </option>
              <option value="10">
                October
              </option>
              <option value="11">
                November
              </option>
              <option value="12">
                December
              </option>
            </gcds-select>
            <gcds-input aria-invalid="false" class="gcds-date-input__year" inputid="year" label="Year" name="year" size="4" type="number" value=""></gcds-input>
          </fieldset>
        </gcds-date-input>
    `);
  });

  it('renders - compact - french', async () => {
    const page = await newSpecPage({
      components: [GcdsDateInput],
      html: `<gcds-date-input legend="Date input" name="date" format="compact" lang="fr"></gcds-date-input>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-date-input format="compact" lang="fr" legend="Date input" name="date">
        <mock:shadow-root>
          <fieldset aria-labelledby="date-input-legend" class="gcds-date-input__fieldset" tabindex="-1">
            <legend id="date-input-legend">
              Date input
            </legend>
            <gcds-select aria-invalid="false" class="gcds-date-input__month" defaultvalue="Sélectionnez un mois" label="Mois" name="month" selectid="month" value="">
              <option value="01">
                janvier
              </option>
              <option value="02">
                février
              </option>
              <option value="03">
                mars
              </option>
              <option value="04">
                avril
              </option>
              <option value="05">
                mai
              </option>
              <option value="06">
                juin
              </option>
              <option value="07">
                juillet
              </option>
              <option value="08">
                août
              </option>
              <option value="09">
                septembre
              </option>
              <option value="10">
                octobre
              </option>
              <option value="11">
                novembre
              </option>
              <option value="12">
                décembre
              </option>
            </gcds-select>
            <gcds-input aria-invalid="false" class="gcds-date-input__year" inputid="year" label="Année" name="year" size="4" type="number" value=""></gcds-input>
          </fieldset>
        </mock:shadow-root>
      </gcds-date-input>
    `);
  });

  it('renders - required', async () => {
    const page = await newSpecPage({
      components: [GcdsDateInput],
      html: `<gcds-date-input legend="Date input" name="date" format="full" required></gcds-date-input>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-date-input format="full" legend="Date input" name="date" required>
        <mock:shadow-root>
          <fieldset aria-labelledby="date-input-legend" class="gcds-date-input__fieldset" tabindex="-1">
            <legend id="date-input-legend">
              Date input
              <span class="legend__required">
                (required)
              </span>
            </legend>
            <gcds-select aria-invalid="false" aria-required="true" class="gcds-date-input__month" defaultvalue="Select a month" label="Month" name="month" selectid="month" value="">
              <option value="01">
                January
              </option>
              <option value="02">
                February
              </option>
              <option value="03">
                March
              </option>
              <option value="04">
                April
              </option>
              <option value="05">
                May
              </option>
              <option value="06">
                June
              </option>
              <option value="07">
                July
              </option>
              <option value="08">
                August
              </option>
              <option value="09">
                September
              </option>
              <option value="10">
                October
              </option>
              <option value="11">
                November
              </option>
              <option value="12">
                December
              </option>
            </gcds-select>
            <gcds-input aria-invalid="false" aria-required="true" class="gcds-date-input__day" inputid="day" label="Day" name="day" size="2" type="number" value=""></gcds-input>
            <gcds-input aria-invalid="false" aria-required="true" class="gcds-date-input__year" inputid="year" label="Year" name="year" size="4" type="number" value=""></gcds-input>
          </fieldset>
        </gcds-date-input>
    `);
  });

  it('renders - hint', async () => {
    const page = await newSpecPage({
      components: [GcdsDateInput],
      html: `<gcds-date-input legend="Date input" name="date" format="full" hint="This is a hint"></gcds-date-input>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-date-input format="full" legend="Date input" name="date" hint="This is a hint">
        <mock:shadow-root>
          <fieldset aria-labelledby="date-input-legend date-input-hint" class="gcds-date-input__fieldset" tabindex="-1">
            <legend id="date-input-legend">
              Date input
            </legend>
            <gcds-hint id="date-input-hint" hint-id="date-input">
              This is a hint
            </gcds-hint>
            <gcds-select aria-invalid="false" class="gcds-date-input__month" defaultvalue="Select a month" label="Month" name="month" selectid="month" value="">
              <option value="01">
                January
              </option>
              <option value="02">
                February
              </option>
              <option value="03">
                March
              </option>
              <option value="04">
                April
              </option>
              <option value="05">
                May
              </option>
              <option value="06">
                June
              </option>
              <option value="07">
                July
              </option>
              <option value="08">
                August
              </option>
              <option value="09">
                September
              </option>
              <option value="10">
                October
              </option>
              <option value="11">
                November
              </option>
              <option value="12">
                December
              </option>
            </gcds-select>
            <gcds-input aria-invalid="false" class="gcds-date-input__day" inputid="day" label="Day" name="day" size="2" type="number" value=""></gcds-input>
            <gcds-input aria-invalid="false" class="gcds-date-input__year" inputid="year" label="Year" name="year" size="4" type="number" value=""></gcds-input>
          </fieldset>
        </gcds-date-input>
    `);
  });

  it('renders - full value', async () => {
    const page = await newSpecPage({
      components: [GcdsDateInput],
      html: `<gcds-date-input legend="Date input" name="date" format="full" value="1991-03-15"></gcds-date-input>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-date-input format="full" legend="Date input" name="date" value="1991-03-15">
        <mock:shadow-root>
          <fieldset aria-labelledby="date-input-legend" class="gcds-date-input__fieldset" tabindex="-1">
            <legend id="date-input-legend">
              Date input
            </legend>
            <gcds-select aria-invalid="false" class="gcds-date-input__month" defaultvalue="Select a month" label="Month" name="month" selectid="month" value="03">
              <option value="01">
                January
              </option>
              <option value="02">
                February
              </option>
              <option value="03">
                March
              </option>
              <option value="04">
                April
              </option>
              <option value="05">
                May
              </option>
              <option value="06">
                June
              </option>
              <option value="07">
                July
              </option>
              <option value="08">
                August
              </option>
              <option value="09">
                September
              </option>
              <option value="10">
                October
              </option>
              <option value="11">
                November
              </option>
              <option value="12">
                December
              </option>
            </gcds-select>
            <gcds-input aria-invalid="false" class="gcds-date-input__day" inputid="day" label="Day" name="day" size="2" type="number" value="15"></gcds-input>
            <gcds-input aria-invalid="false" class="gcds-date-input__year" inputid="year" label="Year" name="year" size="4" type="number" value="1991"></gcds-input>
          </fieldset>
        </gcds-date-input>
    `);
  });

  it('renders - compact value', async () => {
    const page = await newSpecPage({
      components: [GcdsDateInput],
      html: `<gcds-date-input legend="Date input" name="date" format="compact" value="1991-03"></gcds-date-input>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-date-input format="compact" legend="Date input" name="date" value="1991-03">
        <mock:shadow-root>
          <fieldset aria-labelledby="date-input-legend" class="gcds-date-input__fieldset" tabindex="-1">
            <legend id="date-input-legend">
              Date input
            </legend>
            <gcds-select aria-invalid="false" class="gcds-date-input__month" defaultvalue="Select a month" label="Month" name="month" selectid="month" value="03">
              <option value="01">
                January
              </option>
              <option value="02">
                February
              </option>
              <option value="03">
                March
              </option>
              <option value="04">
                April
              </option>
              <option value="05">
                May
              </option>
              <option value="06">
                June
              </option>
              <option value="07">
                July
              </option>
              <option value="08">
                August
              </option>
              <option value="09">
                September
              </option>
              <option value="10">
                October
              </option>
              <option value="11">
                November
              </option>
              <option value="12">
                December
              </option>
            </gcds-select>
            <gcds-input aria-invalid="false" class="gcds-date-input__year" inputid="year" label="Year" name="year" size="4" type="number" value="1991"></gcds-input>
          </fieldset>
        </gcds-date-input>
    `);
  });

  it('renders - full - improper value', async () => {
    const page = await newSpecPage({
      components: [GcdsDateInput],
      html: `<gcds-date-input legend="Date input" name="date" format="full" value="1991-03-015"></gcds-date-input>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-date-input format="full" legend="Date input" name="date" value="1991-03-015">
        <mock:shadow-root>
          <fieldset aria-labelledby="date-input-legend" class="gcds-date-input__fieldset" tabindex="-1">
            <legend id="date-input-legend">
              Date input
            </legend>
            <gcds-select aria-invalid="false" class="gcds-date-input__month" defaultvalue="Select a month" label="Month" name="month" selectid="month" value="03">
              <option value="01">
                January
              </option>
              <option value="02">
                February
              </option>
              <option value="03">
                March
              </option>
              <option value="04">
                April
              </option>
              <option value="05">
                May
              </option>
              <option value="06">
                June
              </option>
              <option value="07">
                July
              </option>
              <option value="08">
                August
              </option>
              <option value="09">
                September
              </option>
              <option value="10">
                October
              </option>
              <option value="11">
                November
              </option>
              <option value="12">
                December
              </option>
            </gcds-select>
            <gcds-input aria-invalid="false" class="gcds-date-input__day" inputid="day" label="Day" name="day" size="2" type="number" value="015"></gcds-input>
            <gcds-input aria-invalid="false" class="gcds-date-input__year" inputid="year" label="Year" name="year" size="4" type="number" value="1991"></gcds-input>
          </fieldset>
        </mock:shadow-root>
      </gcds-date-input>
    `);
  });

  it('renders - compact - improper value', async () => {
    const page = await newSpecPage({
      components: [GcdsDateInput],
      html: `<gcds-date-input legend="Date input" name="date" format="compact" value="1991-15"></gcds-date-input>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-date-input format="compact" legend="Date input" name="date" value="1991-15">
        <mock:shadow-root>
          <fieldset aria-labelledby="date-input-legend" class="gcds-date-input__fieldset" tabindex="-1">
            <legend id="date-input-legend">
              Date input
            </legend>
            <gcds-select aria-invalid="false" class="gcds-date-input__month" defaultvalue="Select a month" label="Month" name="month" selectid="month" value="15">
              <option value="01">
                January
              </option>
              <option value="02">
                February
              </option>
              <option value="03">
                March
              </option>
              <option value="04">
                April
              </option>
              <option value="05">
                May
              </option>
              <option value="06">
                June
              </option>
              <option value="07">
                July
              </option>
              <option value="08">
                August
              </option>
              <option value="09">
                September
              </option>
              <option value="10">
                October
              </option>
              <option value="11">
                November
              </option>
              <option value="12">
                December
              </option>
            </gcds-select>
            <gcds-input aria-invalid="false" class="gcds-date-input__year" inputid="year" label="Year" name="year" size="4" type="number" value="1991"></gcds-input>
          </fieldset>
        </mock:shadow-root>
      </gcds-date-input>
    `);
  });

  it('does not render - missing all required fields', async () => {
    const page = await newSpecPage({
      components: [GcdsDateInput],
      html: `<gcds-date-input></gcds-date-input>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-date-input>
        <mock:shadow-root>
      </gcds-date-input>
    `);
  });

  it('does not render - missing format', async () => {
    const page = await newSpecPage({
      components: [GcdsDateInput],
      html: `<gcds-date-input legend="Date input" name="date"></gcds-date-input>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-date-input legend="Date input" name="date">
        <mock:shadow-root>
      </gcds-date-input>
    `);
  });

  it('does not render - missing name', async () => {
    const page = await newSpecPage({
      components: [GcdsDateInput],
      html: `<gcds-date-input legend="Date input" format="full"></gcds-date-input>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-date-input legend="Date input" format="full">
        <mock:shadow-root>
      </gcds-date-input>
    `);
  });

  it('does not render - missing legend', async () => {
    const page = await newSpecPage({
      components: [GcdsDateInput],
      html: `<gcds-date-input name="date" format="full"></gcds-date-input>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-date-input name="date" format="full">
        <mock:shadow-root>
      </gcds-date-input>
    `);
  });

  it('render - full - invalid value', async () => {
    const page = await newSpecPage({
      components: [GcdsDateInput],
      html: `<gcds-date-input legend="Date input" name="date" format="full" value="222f-23-red"></gcds-date-input>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-date-input format="full" legend="Date input" name="date" value="222f-23-red">
        <mock:shadow-root>
          <fieldset aria-labelledby="date-input-legend" class="gcds-date-input__fieldset" tabindex="-1">
            <legend id="date-input-legend">
              Date input
            </legend>
            <gcds-select aria-invalid="false" class="gcds-date-input__month" defaultvalue="Select a month" label="Month" name="month" selectid="month" value="23">
              <option value="01">
                January
              </option>
              <option value="02">
                February
              </option>
              <option value="03">
                March
              </option>
              <option value="04">
                April
              </option>
              <option value="05">
                May
              </option>
              <option value="06">
                June
              </option>
              <option value="07">
                July
              </option>
              <option value="08">
                August
              </option>
              <option value="09">
                September
              </option>
              <option value="10">
                October
              </option>
              <option value="11">
                November
              </option>
              <option value="12">
                December
              </option>
            </gcds-select>
            <gcds-input aria-invalid="false" class="gcds-date-input__day" inputid="day" label="Day" name="day" size="2" type="number" value="red"></gcds-input>
            <gcds-input aria-invalid="false" class="gcds-date-input__year" inputid="year" label="Year" name="year" size="4" type="number" value="222f"></gcds-input>
          </fieldset>
        </gcds-date-input>
    `);
  });

  it('render - compact - invalid value', async () => {
    const page = await newSpecPage({
      components: [GcdsDateInput],
      html: `<gcds-date-input legend="Date input" name="date" format="compact" value="222f-23-red"></gcds-date-input>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-date-input format="compact" legend="Date input" name="date" value="222f-23-red">
        <mock:shadow-root>
          <fieldset aria-labelledby="date-input-legend" class="gcds-date-input__fieldset" tabindex="-1">
            <legend id="date-input-legend">
              Date input
            </legend>
            <gcds-select aria-invalid="false" class="gcds-date-input__month" defaultvalue="Select a month" label="Month" name="month" selectid="month" value="23">
              <option value="01">
                January
              </option>
              <option value="02">
                February
              </option>
              <option value="03">
                March
              </option>
              <option value="04">
                April
              </option>
              <option value="05">
                May
              </option>
              <option value="06">
                June
              </option>
              <option value="07">
                July
              </option>
              <option value="08">
                August
              </option>
              <option value="09">
                September
              </option>
              <option value="10">
                October
              </option>
              <option value="11">
                November
              </option>
              <option value="12">
                December
              </option>
            </gcds-select>
            <gcds-input aria-invalid="false" class="gcds-date-input__year" inputid="year" label="Year" name="year" size="4" type="number" value="222f"></gcds-input>
          </fieldset>
        </gcds-date-input>
    `);
  });
});
