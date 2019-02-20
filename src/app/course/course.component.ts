import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CoursesComponent implements OnInit {
  Courses;
  date   = new Date();
  title  = 'INI Tugas Pertama Biodata';
  nama   = 'Ahmad Musyadad Aminullah';
  alamat = 'Jl. Mawar gang 11';

  get format(){
    return 'fullDate';
  }
  
  constructor(private service: CoursesService) {
    this.Courses = service.getCourses();
  }

  ngOnInit() {
  }

}