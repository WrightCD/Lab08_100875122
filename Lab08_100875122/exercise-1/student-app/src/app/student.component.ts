import { Component } from "@angular/core";

@Component({
  selector: 'students',
  template: '<h2>{{getTitle()}}</h2><br/><p>{{getCurrentDate()}}</p>'
})

export class StudentsComponent{
  title = "My List of Students"

  getTitle(){
    return this.title;
  }

  getCurrentDate(){
    return Date();
  }
}