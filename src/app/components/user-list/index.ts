import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { UserListComponent } from './component';
import { UserListRouteModule } from './routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    NgbModule,
    UserListRouteModule,
    SharedModule
  ],
  declarations: [
    UserListComponent
  ]
})

export class UserListModule {}