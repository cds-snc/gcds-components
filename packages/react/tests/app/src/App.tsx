import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import {
  GcdsHeader,
  GcdsFooter,
  GcdsContainer,
  GcdsRouterProvider,
} from '@gcds-core/components-react';

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <GcdsRouterProvider navigate={navigate} currentHref={pathname}>
      <GcdsHeader></GcdsHeader>
      <GcdsContainer tag="main" layout="page" className="mb-400">
        <Outlet />
      </GcdsContainer>
      <GcdsFooter></GcdsFooter>
    </GcdsRouterProvider>
  );
}

export default App;
