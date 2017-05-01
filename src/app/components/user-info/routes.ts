import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInfoComponent } from './component';

const routes: Routes = [
    {
        path: '',
        component: UserInfoComponent
    }
];

export const UserInfoRouteModule: ModuleWithProviders = RouterModule.forChild(routes);