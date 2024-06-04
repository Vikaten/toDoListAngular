import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces';
import moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceTsService {
  public toDoList: ITodo[] = [];
  public newToDo: string = '';
  public date: Date = new Date;
  public milsec: number = 0;
  
  addNewDoing() {
    let toDo = {
      text: this.newToDo,
      isChecked: false,
      id: Date.now(),
      date: this.date
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

  setDate(date: any) {
    this.milsec = new Date(date).getTime();
    if (this.milsec < Date.now() + 86400000) {
      console.log(date);
      return true;
      
    }
  }
}
