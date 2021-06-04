import { Component, OnInit } from '@angular/core';
import { GitHubService } from 'src/assets/service/github.service';
import { SharedService } from 'src/assets/service/shared.service';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnInit {
  public dataCommits: any;

  constructor(
    private _commitService: GitHubService,
    private _sharedService: SharedService
  ){}

  ngOnInit(): void {
    this.subscribeCommits();
  }

  subscribeCommits(){
    try{
      this._commitService.commits_request().subscribe(
        result => {
          console.log(result)
        }
      )
    }catch(e){
      console.log(e);
      console.log("Error at commits_request");
      this._sharedService.openSnackBar('Error al retrieving data', 1000, 'problema');
    }
  }
}
