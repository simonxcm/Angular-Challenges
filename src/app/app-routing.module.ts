import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IsAdminGuard } from './guard/is-admin.guard';
import { IsConnectedGuard } from './guard/is-connected.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { CanActivate } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [IsConnectedGuard]
  },
  {
    path: 'adminpage',
    component: AdminpageComponent,
    canActivate: [IsAdminGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
