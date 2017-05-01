import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './components/main/index#MainModule'
    }
];

export const AppRouteModule: ModuleWithProviders = RouterModule.forRoot(routes);