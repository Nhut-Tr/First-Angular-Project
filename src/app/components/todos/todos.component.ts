import { Component, OnInit } from '@angular/core';
import { todo } from './../../models/todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!:todo[];
  inputTodo:string="";

  constructor() { }

  ngOnInit(): void {
    this.todos=[
      {
        content:'Learn all ng of Angular',
        completed:true,
        
       },
     {
      content:'Learn about Angular',
      completed:false,
      
     },
     {
      content:'Install the Angular CLI',
      completed:false
     },
     {
      content:'Build project using Angular',
      completed:false
     },
     {
      content:'Push project using Angular to Github',
      completed:false
     },
    ]
  }

  toggleDone(id:number){
    this.todos.map((v,i)=>{
      if(i==id) v.completed = !v.completed
      return v;
    })
  }

  deleteTask(id:number){
    this.todos = this.todos.filter((v,i) => i !== id);
  }

  addTask(){
    
    if(this.inputTodo==""){
      window.location.reload();
      alert('Please enter your task! We will reload right now')
    }
    else{
      this.todos.push({
        content:this.inputTodo,
        completed:false
      });
      this.inputTodo="";
    }
  }

}
