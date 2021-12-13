import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageListClientsComponent } from './page-list-clients/page-list-clients.component';
import { PageAddClientComponent } from './page-add-client/page-add-client.component';
import { PageEditClientComponent } from './page-edit-client/page-edit-client.component';
import { PageSignInComponent } from './page-sign-in/page-sign-in.component';


@NgModule({
  declarations: [
    PageListClientsComponent,
    PageAddClientComponent,
    PageEditClientComponent,
    PageSignInComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
