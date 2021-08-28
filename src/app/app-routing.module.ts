import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TodoMainComponent } from './todo-main/todo-main.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'main', component: TodoMainComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
