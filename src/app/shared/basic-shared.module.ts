import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {Ng2TableModule} from 'ngx-datatable';

@NgModule({
  imports: [CommonModule, Ng2TableModule],
  exports: [CommonModule]
})
export class BasicSharedModule {
}
