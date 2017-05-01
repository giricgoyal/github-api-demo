import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './component';

const routes: Routes = [
    {
        path: '',
        component: UserListComponent
    }
];

export const UserListRouteModule: ModuleWithProviders = RouterModule.forChild(routes);