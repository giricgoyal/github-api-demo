import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children : [
            {
                path: '',
                loadChildren: '../user-list/index#UserListModule',
            },
            {
                path: 'user-info/:login',
                loadChildren: '../user-info/index#UserInfoModule',
            }
        ]
    }
];

export const MainRouteModule: ModuleWithProviders = RouterModule.forChild(routes);
