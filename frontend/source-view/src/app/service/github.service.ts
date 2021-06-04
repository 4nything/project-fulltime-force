import { Observable } from "rxjs"; 
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core"; 
@Injectable(
    { providedIn: 'root' }
) 
export class GitHubService { 
    private apiurl: string = 'http://localhost:3000/api/commits'; 
    
    constructor(private _httpClient: HttpClient) { } 
    
    commits_request(): Observable<any> {  
        return this._httpClient.get(this.apiurl) 
    } 
}