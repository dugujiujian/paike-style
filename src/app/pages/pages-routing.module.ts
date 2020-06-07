import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutDefaultComponent} from '../layout/default/default.component';
import {environment} from '@env/environment';
import {LoginComponent} from '../login/default/login.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule)},
    ]
  },
  {path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: environment.useHash,
    enableTracing: environment.enableTracing,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
