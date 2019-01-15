import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardResolverService } from './dashboard/dashboard-resolver.service';
import { APIClientService } from './services/api-client.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from './requests/requests.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path:'dashboard',
    component: DashboardComponent,
    resolve: {details: DashboardResolverService}
  },
  {
    path:'requests',
    component: RequestsComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    CommonModule,
    DashboardModule
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
