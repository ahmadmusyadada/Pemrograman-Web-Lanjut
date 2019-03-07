import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent  {
  text = 'Menggunakan String Interpolar (Data Binding)';
  nama = 'test';
  password = '';
  constructor() { }

  ngOnInit() {
  }

  onKeyUpdate(name){
    this.nama = name;
  }
}