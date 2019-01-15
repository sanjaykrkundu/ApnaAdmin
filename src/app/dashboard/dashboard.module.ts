import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIClientService } from '../services/api-client.service';
import { DashboardResolverService } from './dashboard-resolver.service';
import { HttpClientModule } from '@angular/common/http';
import { GetApiService } from '../services/api-url.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    APIClientService,
    DashboardResolverService,
    GetApiService
  ]
})
export class DashboardModule { }
