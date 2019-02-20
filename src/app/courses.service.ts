import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  // getCourses(){
  //   return [
  //     {id: 0, name: 'HTML'},
  //     {id: 1, name: 'PHP'},
  //     {id: 2, name: 'Angular'},
  //     {id: 3, name: 'C#'},
  //     {id: 4, name: 'VB.net'},
  //   ]
  // }

  getCourses(){
    return [
      {no: 1, hobby: 'Berlari', keterangan: 'Lari 1 jam tiap hari'},
      {no: 2, hobby: 'Senam', keterangan: 'Senam tiap sore'},
      {no: 3, hobby: 'Bermain musik', keterangan: 'Bermain musik saat waktu senggang'},
    ]
  }
}
