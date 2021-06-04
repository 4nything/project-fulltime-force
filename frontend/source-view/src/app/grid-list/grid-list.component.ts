import { Component, OnInit } from '@angular/core';
import { Router } from 'express';
import { GitHubService } from '../service/github.service';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnInit {
  public dataCommits: any;
  public showSpinner: boolean = true;

  constructor(
    private _commitService: GitHubService,
    private _sharedService: SharedService,
  ){}

  ngOnInit(): void {
    this.subscribeCommits();
  }

  subscribeCommits(){
    try{
      this._commitService.commits_request().subscribe(
        result => {
          if (result.status === 'success'){
            this.dataCommits = result.data;
          }
          this.showSpinner = false;
        }
      )
    }catch(e){
      console.log(e);
      console.log("Error at commits_request");
      this._sharedService.openSnackBar('Error al retrieving data', 1000, 'problema');
    }
  }

}
