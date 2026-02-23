import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.tsx'
import Home from './pages/Home.tsx';
import Forms from './pages/Forms.tsx';
import FileUploader from './pages/FileUploader.tsx';

import '@gcds-core/css-shortcuts/dist/gcds-css-shortcuts.min.css';
import '@gcds-core/components-react/gcds.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="forms" element={<Forms />} />
          <Route path="file-uploader" element={<FileUploader />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
