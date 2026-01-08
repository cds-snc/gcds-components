import { Outlet } from 'react-router-dom';

import {
  GcdsHeader,
  GcdsFooter,
  GcdsContainer,
} from '@cdssnc/gcds-components-react';

function App() {
  return (
    <>
      <GcdsHeader></GcdsHeader>
      <GcdsContainer tag="main" layout="page" className="mb-400">
        <Outlet />
      </GcdsContainer>
      <GcdsFooter></GcdsFooter>
    </>
  );
}

export default App;
