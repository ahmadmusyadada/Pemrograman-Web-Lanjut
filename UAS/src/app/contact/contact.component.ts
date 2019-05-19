import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

// export class ContactComponent implements OnInit {
//   @Input() nama: string;
//   @Input() comment: string;

//   constructor() { }

//   ngOnInit() {
//   }

export class ContactComponent{
  yourData: boolean; 

  data=[
    {nama: '', email: '', comment: ''}
  ]
  
  log(x){
    console.log(x);
  }

  submit(form){
    this.yourData = true;
  }
}