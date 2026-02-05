import { useState } from 'react';

import {
  GcdsFileUploader,
  GcdsHeading,
  GcdsBreadcrumbs,
  GcdsBreadcrumbsItem,
} from '@gcds-core/components-react';

const FileUploader = () => {
  const [files, setFiles] = useState('');

  const handleChange = (e: any) => {
    const selectedFiles = e.target.files;
    const fileNames = Array.from(selectedFiles).map((file: any) => file.name).join(', ');
    setFiles(fileNames);
  }
  return (
    <>
      <GcdsBreadcrumbs hideCanadaLink>
        <GcdsBreadcrumbsItem href="/">
          Home
        </GcdsBreadcrumbsItem>
      </GcdsBreadcrumbs>

      <GcdsHeading tag="h1">File Uploader Test</GcdsHeading>

      <form noValidate>
        <section className="b-solid p-300 mb-300" id="file-uploader">

          <GcdsHeading tag="h2">Gcds-file-uploader</GcdsHeading>
          <p>Testing whether the file-uploader still functions properly in React.</p>

          <GcdsFileUploader
            name="fileUpload"
            label="Upload your files"
            hint="You can upload multiple files."
            multiple
            onGcdsChange={handleChange}
          />

          <p>
            You entered: <span id="files">{files}</span>
          </p>
        </section>
      </form>
    </>
  );
};

export default FileUploader;
