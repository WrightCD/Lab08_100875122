import { Component } from "@angular/core";

@Component({
  selector: 'students',
  template: '<h2>{{getTitle()}}</h2><br/><p>{{getDate()}}</p>'
})

export class StudentsComponent{
  title = "My List of Students"

  getTitle(){
    return this.title;
  }

  getDate(){
    return Date();
  }
}