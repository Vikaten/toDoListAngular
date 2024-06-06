import { Component, ViewEncapsulation, input } from '@angular/core';
import { ITodo } from './interfaces';
import { TodoServiceTsService } from './services/todo-service';
import { OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './index.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todolist';
  task: any;
  public mom: any = moment("YYYY");

  constructor(public todoService: TodoServiceTsService) {
    console.log(this.mom);
  }

  addNewDoing() {
    this.todoService.addNewDoing();
  }

  checkingTheString() {
    this.todoService.checkingTheString();
  }

  deleteOne(index: number) {
    this.todoService.deleteOne(index);
  }

  deleteAll() {
    this.todoService.deleteAll();
  }

  ngOnInit() {
    this.todoService.localStorage();
  }

  localStorage() {
    this.todoService.localStorage();
  }

  saveChecked(index: number) {
    this.todoService.saveChecked(index);
  }

  setDate(date: any) {
    this.todoService.setDate(date);
  }
}
