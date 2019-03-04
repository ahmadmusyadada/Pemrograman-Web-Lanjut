import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-server',
  templateUrl: './server.component.html',
  // template: `<h1> hello {{name}} </h1>`,
  styleUrls: ['./server.component.css']
  // styles:[`
  // h1 {
    // color: dodgerblue;
  // }`]
})
export class ServerComponent implements OnInit {

  // name: string = "angular"
  constructor() { }

  ngOnInit() {  
  }

}
