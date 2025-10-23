import { GcdsHeading, GcdsText, GcdsLink } from '@cdssnc/gcds-components-react';

const Home = () => {
  return (
    <>
      <GcdsHeading tag="h1">
        GCDS React test app
      </GcdsHeading>

      <GcdsText>
        React test app to test GCDS React components and React functions.
      </GcdsText>

      <ul className="list-disc">
        <li>
          <GcdsLink href="/forms">Form components</GcdsLink>
        </li>
      </ul>
    </>
  )
};

export default Home;