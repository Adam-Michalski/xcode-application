import {NgModule} from '@angular/core';
import {BasicSharedModule} from '../../shared/basic-shared.module';
import {UsersComponent} from './users.component';
import {UsersRoutingModule} from './users.routing';
import {Ng2TableModule} from 'ngx-datatable';

@NgModule({
  imports: [
    BasicSharedModule,
    UsersRoutingModule,
    Ng2TableModule
  ],
  declarations: [UsersComponent]
})
export class UsersModule {
}
