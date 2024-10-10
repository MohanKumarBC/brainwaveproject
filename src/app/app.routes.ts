import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurstoryComponent } from './ourstory/ourstory.component';
import { ContactComponent } from './contact/contact.component';
import { AddcontactComponent } from './addcontact/addcontact.component';

export const routes: Routes = [
  { path: '', redirectTo: '/ourstory', pathMatch: 'full' },
  { path: 'ourstory', component: OurstoryComponent },
  {
    path: 'contact',
    component: ContactComponent,
    children: [{ path: 'addcontact', component: AddcontactComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
