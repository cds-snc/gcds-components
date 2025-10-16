import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GcdsComponentsModule } from '@cdssnc/gcds-components-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GcdsComponentsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('GCDS angular test app');
}
