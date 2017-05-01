import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HttpService, ToasterInjectableService, SessionService } from './services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ HttpService, ToasterInjectableService, SessionService]
    }
  }
}