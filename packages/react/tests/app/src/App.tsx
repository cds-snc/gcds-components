import { Outlet } from 'react-router-dom';

import {
  GcdsHeader,
  GcdsFooter,
  GcdsContainer,
} from '@gcds-core/components-react';

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
