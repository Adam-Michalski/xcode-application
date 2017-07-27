import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BasicSharedModule } from '../../shared/basic-shared.module';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users.routing';

@NgModule({
  imports: [
    CommonModule,
    BasicSharedModule,
    UsersRoutingModule,
    NgxDatatableModule,
  ],
  declarations: [
    UsersComponent
  ]
})
export class UsersModule {
}
