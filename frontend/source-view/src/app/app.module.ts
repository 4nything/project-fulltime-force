import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { GridListComponent } from './grid-list/grid-list.component';
import { GitHubService } from './service/github.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
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
    RouterModule.forRoot(routes, {useHash: true}),
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatCardModule,
    MatGridListModule,
    CommonModule
  ],
  providers: [DatePipe, GitHubService],
  bootstrap: [AppComponent],
})
export class AppModule { }
