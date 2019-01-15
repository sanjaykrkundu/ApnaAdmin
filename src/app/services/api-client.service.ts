import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class APIClientService {

  constructor(
    private _http: HttpClient,
  ) { }


  public read(url: string): Observable<any> {
    return this._http.get(url);
  }
}