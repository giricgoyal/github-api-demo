import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { UserInfoComponent } from './component';
import { UserInfoRouteModule } from './routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    NgbModule,
    UserInfoRouteModule,
    SharedModule
  ],
  declarations: [
    UserInfoComponent
  ]
})

export class UserInfoModule {}