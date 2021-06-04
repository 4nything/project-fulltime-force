import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule }from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GitHubService } from 'src/assets/service/github.service';
import { GridListComponent } from './grid-list/grid-list.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: GridListComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    GridListComponent
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    MatGridListModule,
    MatCardModule,
    RouterModule.forRoot(routes, {useHash: true}),
    HttpClientModule,
    BrowserModule
  ],
  providers: [DatePipe, GitHubService],
  bootstrap: [AppComponent],
})
export class AppModule { }
