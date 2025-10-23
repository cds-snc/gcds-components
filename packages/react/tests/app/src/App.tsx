import { Outlet } from 'react-router-dom';

import { GcdsHeader, GcdsFooter, GcdsContainer } from '@cdssnc/gcds-components-react';

function App() {
  return (
    <>
      <GcdsHeader></GcdsHeader>
      <GcdsContainer
        size='xl'
        tag='main'
        centered={true}
        mainContainer={true}
        className='mb-400'
      >
        <Outlet />
      </GcdsContainer>
      <GcdsFooter></GcdsFooter>
    </>
  )
}

export default App
