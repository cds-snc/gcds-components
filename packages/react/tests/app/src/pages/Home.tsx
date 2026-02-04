import { GcdsHeading, GcdsText, GcdsLink } from '@gcds-core/components-react';

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
        <li>
          <p>Extra tests:</p>
          <ul className="list-disc">
            <li>
              <GcdsLink href="/file-uploader">
                File uploader
              </GcdsLink>
            </li>
          </ul>
        </li>
      </ul>
    </>
  )
};

export default Home;
