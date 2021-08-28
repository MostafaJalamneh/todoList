import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  template:``,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  todoList: string[] = ['Working', 'Coding'];

  deleteWork(index: number): void {
    this.todoList.splice(index, 1);
  }

  addWork(work: string): void {
    this.todoList.push(work);
  }

  constructor() {}

  ngOnInit(): void {}
}
