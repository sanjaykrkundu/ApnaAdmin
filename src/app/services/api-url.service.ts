import { Injectable } from "@angular/core";

@Injectable()
export class GetApiService {

    getDelayedUrl() : string{
        return 'https://reqres.in/api/users?delay=3';
    }
}