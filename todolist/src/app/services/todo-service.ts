import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces';
import moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceTsService {
  public toDoList: ITodo[] = [];
  public newToDo: string = '';

  addNewDoing() {
    let toDo = {
      text: this.newToDo,
      isChecked: false,
      id: Date.now(),
      date: moment().format("MMM Do YY")
    };

    this.toDoList.push(toDo);
    this.newToDo = '';
    localStorage.setItem('todo', JSON.stringify(this.toDoList));
  }

  checkingTheString() {
    if (this.newToDo.length > 0) {
      this.addNewDoing();
    } else {
      alert('Ваша строка не должна быть пустая. Заполните ее, пожалуйста!');
    }
  }

  deleteOne(index: number) {
    this.toDoList.splice(index, 1);
  }

  deleteAll() {
    this.toDoList = [];
  }

  localStorage() {
    if (window.localStorage.getItem('todo')) {
      this.toDoList = JSON.parse(localStorage.getItem('todo')!);
    }
  }

  saveChecked(index: number) {
    this.toDoList[index].isChecked = !this.toDoList[index].isChecked;
    localStorage.setItem('todo', JSON.stringify(this.toDoList));
    this.localStorage();
  }

  setDate() {
    console.log(this.toDoList)
  }
}
