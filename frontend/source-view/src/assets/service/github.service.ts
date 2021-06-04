import { Observable } from "rxjs"; 
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core"; 
@Injectable(
    { providedIn: 'root' }
) 
export class CommitsService { 
    private HOSTNAME: string = 'localhost:3000'; 
    private APIURL: string = '/api/commits'; 
    
    constructor(private _httpClient: HttpClient) { } 
    
    commits_request(): Observable<JSON> { 
        let full_url = this.HOSTNAME + this.APIURL; 
        return this._httpClient.get<JSON>(full_url) 
    } 
}