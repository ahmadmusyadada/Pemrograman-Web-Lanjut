import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit{
  yourData: boolean; 

  ngOnInit() {
  }

  data=[
    {nama: '', email: '', comment: ''}
  ]
  
  log(x){
    console.log(x);
  }

  submit(form){
    this.data.push({nama: form.nama , email: form.email, comment: form.comment});
    this.yourData = true;
  }
}