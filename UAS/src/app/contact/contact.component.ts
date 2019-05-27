import { Component, OnInit } from '@angular/core';

class data{
  constructor(
    public name: string = '',
    public email: string = '',
    public comment: string = ''
  ) {}
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})

export class ContactComponent implements OnInit{
  inputData: data[] = [];
  inputModel: data;
  yourData: boolean; 

  ngOnInit() {
  }

  onNew() {
    this.inputModel = new data();
  }

  submit(){
    this.inputData.push(this.inputModel);
    this.yourData = true;
  }
}