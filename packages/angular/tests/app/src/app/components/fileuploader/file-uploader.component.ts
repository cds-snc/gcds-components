import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GcdsComponentsModule } from '@cdssnc/gcds-components-angular';

@Component({
  selector: 'app-fileuploader',
  standalone: true,
  imports: [CommonModule, GcdsComponentsModule],
  template: `
    <gcds-breadcrumbs hide-canada-link>
      <gcds-breadcrumbs-item href="/home" routerLink="/home">
        Home
      </gcds-breadcrumbs-item>
    </gcds-breadcrumbs>

    <gcds-heading tag="h1">File Uploader Test</gcds-heading>

    <form novalidate>
      <section class="b-solid p-300 mb-300" id="file-uploader">
        <gcds-heading tag="h2" margin-top="0">Gcds-file-uploader</gcds-heading>
        <p>
          Testing whether the file-uploader still functions properly in Angular.
        </p>

        <gcds-file-uploader
          name="file-uploader"
          label="Upload your files"
          hint="You can upload multiple files."
          [multiple]="true"
          (change)="handleChange($event)"
        ></gcds-file-uploader>

        <p>You entered: <span id="files"></span></p>
      </section>
    </form>
  `,
})
export class FileUploaderComponent {
  handleChange(event: any) {
    const inputFiles = event.target.files;
    const filesElement = document.getElementById('files');
    if (filesElement) {
      filesElement.innerText = Array.from(inputFiles)
        .map(file => (file as File).name)
        .join(', ');
    }
  }
}
