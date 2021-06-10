import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todolist } from '../todolist';

let _id: number = 1;

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todolist: Todolist[] = [];
  content: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  toggleTodo(i: number) {
    this.todolist[i].complete = !this.todolist[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todolist = {
        id: _id++,
        content: value,
        complete: false 
      };
      this.todolist.push(todo);
      this.content.reset();
    }
  }
}
