import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CoursesComponent implements OnInit {
  title  = 'Belajar Angular';
  Courses;  

  binding = 'property-binding';
  imageUrl = 'http://lorempixel.com/400/200';
  colSpan = 2;
  isActive = true;

  constructor(private service: CoursesService) {
    this.Courses = service.getCourses();
  }

  ngOnInit() {
  }

}