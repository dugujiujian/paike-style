import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {ConsoleComponent} from './console/console.component';
import {WorkspaceComponent} from '@pages/dashboard/workspace/workspace.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: WorkspaceComponent},
      {path: 'workspace', component: WorkspaceComponent},
      {path: 'console', component: ConsoleComponent},
      {path: 'welcome', component: WelcomeComponent}
      ]
  },
];

@NgModule({
  declarations: [
    ConsoleComponent,
    WelcomeComponent,
    WorkspaceComponent
  ],
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
