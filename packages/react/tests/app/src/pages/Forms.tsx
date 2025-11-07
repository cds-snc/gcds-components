import { useRef, useState } from 'react';

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
  GcdsRadios,
  GcdsErrorSummary
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

  // useRef holds the form data; a small state tick forces re-renders when needed
  const formRef = useRef<FormData>({
    name: '',
    number: 0,
    message: '',
    dateFull: '',
    dateCompact: '',
    select: '',
    radio: '',
    check: []
  });
  const [, setTick] = useState(0);

  // Handle form inputs to set into ref and force update
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    // mutate ref and trigger a re-render
    (formRef.current as any)[name] = value;
    setTick(t => t + 1);
  };

  const assignAll = () => {
    formRef.current = {
      name: 'John Doe',
      number: 23,
      message: 'This is a message showing state working correctly.',
      dateFull: '2024-12-25',
      dateCompact: '2024-12',
      select: '3',
      radio: 'radio2',
      check: ['check2', 'check1']
    };
    setTick(t => t + 1);
  }

  const reset = () => {
    formRef.current = {
      name: '',
      number: 0,
      message: '',
      dateFull: '',
      dateCompact: '',
      select: '',
      radio: '',
      check: []
    };
    setTick(t => t + 1);
  }
  return (
    <>
      <GcdsBreadcrumbs hideCanadaLink={true}>
        <GcdsBreadcrumbsItem href="/"> Home </GcdsBreadcrumbsItem>
      </GcdsBreadcrumbs>

      <GcdsHeading tag="h1"> Form components </GcdsHeading>

      <form noValidate>
        <GcdsErrorSummary></GcdsErrorSummary>
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
            value={formRef.current.name}
            onGcdsInput={event => handleInputChange(event)}
            validateOn='submit'
            required
          />

          <GcdsInput
            type="number"
            inputId="number"
            name="number"
            label="Number"
            value={formRef.current.number.toString()}
            onGcdsInput={event => handleInputChange(event)}
          />

          <p>
            You entered: <span id="input-name">{formRef.current.name}</span>
          </p>
          <p>
            You entered: <span id="input-number">{formRef.current.number}</span>
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
            value={formRef.current.message}
            onGcdsInput={event => handleInputChange(event)}
            validateOn='submit'
            required
          />

          <p>
            You entered: <span id="input-message">{formRef.current.message}</span>
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
            value={formRef.current.dateFull}
            onInput={event => handleInputChange(event)}
            validateOn='submit'
            required
          />

          <GcdsDateInput
            legend="Compact date"
            name="dateCompact"
            format="compact"
            value={formRef.current.dateCompact}
            onInput={event => handleInputChange(event)}
            validateOn='submit'
            required
          />

          <p>
            You entered: <span id="input-date-full">{formRef.current.dateFull}</span>
          </p>
          <p>
            You entered: <span id="input-date-compact">{formRef.current.dateCompact}</span>
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
            value={formRef.current.select}
            onGcdsInput={event => handleInputChange(event)}
            validateOn='submit'
            required
          >
            <option value="">Select an option</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </GcdsSelect>

          <p>
            You entered: <span id="input-select">{formRef.current.select}</span>
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
            value={formRef.current.radio}
            onGcdsInput={event => handleInputChange(event)}
            validateOn='submit'
            required
          />

          <p>
            You entered: <span id="input-radios">{formRef.current.radio}</span>
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
            value={formRef.current.check}
            onGcdsInput={event => handleInputChange(event)}
            validateOn='submit'
            required
          />

          <p>
            You entered: <span id="input-check">{formRef.current.check.toString()}</span>
          </p>
        </section>

        <GcdsButton
          type="submit"
          buttonRole="primary"
          id="submit"
        >
          Submit
        </GcdsButton>
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