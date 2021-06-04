import { Observable } from "rxjs"; 
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core"; 
@Injectable(
    { providedIn: 'root' }
) 
export class GitHubService { 
    private HOSTNAME: string = 'http://localhost:3000'; 
    private APIURL: string = '/api/commits'; 
    
    constructor(private _httpClient: HttpClient) { } 
    
    commits_request(): Observable<any> { 
        let full_url = this.HOSTNAME + this.APIURL; 
        return this._httpClient.get<any>(full_url) 
    } 
}