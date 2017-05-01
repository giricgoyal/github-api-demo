import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
export { AppComponent };
import { SharedModule } from './shared';
import { AppRouteModule } from './shared/config/app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule.forRoot(),
    NgbModule.forRoot(),
    BrowserModule.withServerTransition({ appId: 'cli-universal-demo' }),
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
