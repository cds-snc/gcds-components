import { useState } from 'react';

import {
  GcdsHeading,
  GcdsBreadcrumbs,
  GcdsBreadcrumbsItem,
  GcdsButton,
  GcdsCheckboxes,
  GcdsDateInput,
  GcdsInput,
  GcdsTextarea,
  GcdsSelect,
  GcdsRadios
} from '@cdssnc/gcds-components-react';

const Forms = () => {
  type FormData = {
    name: string;
    number: number;
    message: string;
    dateFull: string;
    dateCompact: string;
    select: string;
    radio: string;
    check: string[];
  };

  const [formData, setFormData] = useState<FormData>({
    name: '',
    number: 0,
    message: '',
    dateFull: '',
    dateCompact: '',
    select: '',
    radio: '',
    check: []
  });

  // Handle form inputs to set into state
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    console.log(`Input changed: ${name} = ${value}`);

    setFormData({ ...formData, [name]: value });
  };

  const assignAll = () => {
    setFormData({
      name: 'John Doe',
      number: 23,
      message: 'This is a message showing state working correctly.',
      dateFull: '2024-12-25',
      dateCompact: '2024-12',
      select: '3',
      radio: 'radio2',
      check: ['check2', 'check1']
    });
  }

  const reset = () => {
    setFormData({
      name: '',
      number: 0,
      message: '',
      dateFull: '',
      dateCompact: '',
      select: '',
      radio: '',
      check: []
    });
  }
  return (
    <>
      <GcdsBreadcrumbs hideCanadaLink={true}>
        <GcdsBreadcrumbsItem href="/"> Home </GcdsBreadcrumbsItem>
      </GcdsBreadcrumbs>

      <GcdsHeading tag="h1"> Form components </GcdsHeading>

      <form>
        <section className="b-solid p-300 mb-300" id="input">
          <GcdsHeading tag="h2" marginTop="0">
            Gcds-input
          </GcdsHeading>

          <p>Text input and number input</p>

          <GcdsInput
            type="text"
            inputId="name"
            name="name"
            label="Full name"
            value={formData.name}
            onGcdsInput={event => handleInputChange(event)}
          />

          <GcdsInput
            type="number"
            inputId="number"
            name="number"
            label="Number"
            value={formData.number.toString()}
            onGcdsInput={event => handleInputChange(event)}
          />

          <p>
            You entered: <span id="input-name">{formData.name}</span>
          </p>
          <p>
            You entered: <span id="input-number">{formData.number}</span>
          </p>
        </section>

        <section className="b-solid p-300 mb-300" id="textarea">
          <GcdsHeading tag="h2" marginTop="0">
            Gcds-textarea
          </GcdsHeading>

          <GcdsTextarea
            label="Message"
            textareaId="message"
            name="message"
            value={formData.message}
            onGcdsInput={event => handleInputChange(event)}
          />

          <p>
            You entered: <span id="input-message">{formData.message}</span>
          </p>
        </section>

        <section className="b-solid p-300 mb-300" id="date-input">
          <GcdsHeading tag="h2" marginTop="0">
            Gcds-date-input
          </GcdsHeading>

          <p>Date input in full and compact format.</p>

          <GcdsDateInput
            legend="Full date"
            name="dateFull"
            format="full"
            value={formData.dateFull}
            onInput={event => handleInputChange(event)}
          />

          <GcdsDateInput
            legend="Compact date"
            name="dateCompact"
            format="compact"
            value={formData.dateCompact}
            onInput={event => handleInputChange(event)}
          />

          <p>
            You entered: <span id="input-date-full">{formData.dateFull}</span>
          </p>
          <p>
            You entered: <span id="input-date-compact">{formData.dateCompact}</span>
          </p>
        </section>

        <section className="b-solid p-300 mb-300" id="select">
          <GcdsHeading tag="h2" marginTop="0">
            Gcds-select
          </GcdsHeading>

          <GcdsSelect
            label="Select"
            selectId="select"
            name="select"
            value={formData.select}
            onGcdsInput={event => handleInputChange(event)}
          >
            <option value="">Select an option</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </GcdsSelect>

          <p>
            You entered: <span id="input-select">{formData.select}</span>
          </p>
        </section>

        <section className="b-solid p-300 mb-300" id="radios">
          <GcdsHeading tag="h2" marginTop="0">
            Gcds-radios
          </GcdsHeading>

          <GcdsRadios
            name="radio"
            legend="Radios"
            options={[
              { label: "Label for radio 1", id: "radio1", value: "radio1" },
              { label: "Label for radio 2", id: "radio2", value: "radio2" },
              { label: "Label for radio 3", id: "radio3", value: "radio3" }
            ]}
            value={formData.radio}
            onGcdsInput={event => handleInputChange(event)}
          />

          <p>
            You entered: <span id="input-radios">{formData.radio}</span>
          </p>
        </section>

        <section className="b-solid p-300 mb-300" id="checkboxes">
          <GcdsHeading tag="h2" marginTop="0">
            Gcds-checkboxes
          </GcdsHeading>

          <GcdsCheckboxes
            name="check"
            legend="Checkboxes"
            options={[
              { label: "Label for checkbox 1", id: "check1", value: "check1" },
              { label: "Label for checkbox 2", id: "check2", value: "check2" },
              { label: "Label for checkbox 3", id: "check3", value: "check3" }
            ]}
            value={formData.check}
            onGcdsInput={event => handleInputChange(event)}
          />

          <p>
            You entered: <span id="input-check">{formData.check.toString()}</span>
          </p>
        </section>

        <GcdsButton
          type="button"
          buttonRole="primary"
          id="assignAll"
          onGcdsClick={assignAll}
        >
          Assign all form fields
        </GcdsButton>
        <GcdsButton
          type="reset"
          buttonRole="danger"
          id="reset"
          onGcdsClick={reset}
        >
          Reset
        </GcdsButton>
      </form>
    </>
  )
};

export default Forms;