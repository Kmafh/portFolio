import { Routes } from '@angular/router';
import { PagesComponent } from './features/pages.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
          { path: '', component: DashboardComponent,data:{title:'Dashboard'} },
        ],
      },
    { path: '', redirectTo: "/dashboard", pathMatch: 'full'},
];
