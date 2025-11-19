import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.components';
import { FormsComponent } from './components/forms/forms.component';
import { NavComponent } from './components/navigation/navigation.components';
import { FileUploaderComponent } from './components/fileuploader/file-uploader.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'file-uploader', component: FileUploaderComponent },
  {
    path: 'nav-one',
    component: NavComponent,
    data: { path: '/nav-two' },
  },
  {
    path: 'nav-two',
    component: NavComponent,
    data: { path: '/nav-one' },
  },
];
