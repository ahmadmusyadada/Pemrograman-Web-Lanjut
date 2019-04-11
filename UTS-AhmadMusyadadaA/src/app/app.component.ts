import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'UTS';
  courses = [1,2];
  // courses = [];
  coursesForOne;
  loadCourses(){
    this.coursesForOne=[
      {id: 1, nama: 'course1'},
      {id: 2, nama: 'course2'},
      {id: 3, nama: 'course3'},
      {id: 4, nama: 'course4'},
      {id: 5, nama: 'course5'} 
    ]
  }

  coursesFor=[
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
    {id: 4, name: 'course4'},
    {id: 5, name: 'course5'}
  ]
  
  viewMode='map';

  onAdd(){
    this.coursesFor.push({id: 6, name:'courses6'});
  }

  onRemove(item){
    console.log(item);
    let index = this.coursesFor.indexOf(item);
    console.log(index);
    this.coursesFor.splice(index, 1);
  }

  onChange(item){
    item.name = 'Updated';
  }

  trackCourse(index, itemone){
    return itemone ? itemone.id : undefined;
  }
}