import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { APIClientService } from '../services/api-client.service';
import { AppComponent } from '../app.component';
import { GetApiService } from '../services/api-url.service';

@Injectable()
export class DashboardResolverService implements Resolve<any> {

  constructor(private api : APIClientService,
    private apiUrl : GetApiService) { }



  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | Observable<any> | Promise<any> {
    let res =  this.api.read(this.apiUrl.getDelayedUrl());
    return res;
 }
}
