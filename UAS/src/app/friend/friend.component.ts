import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  data=[
    {id: 1, name: 'Peter Liu', email: 'Peter Liu', contact: '08123456789'},
    {id: 2, name: 'Peter Liu', email: 'Peter Liu', contact: '08123456789'}
  ]

  // submit(form){
  //   console.log(form);
  // }
  submit(form){
    this.data.push({id: this.data.length + 1, name: this.uppercase(form.nama) , email: form.email, contact: form.contact});
    form.valid;
  }

  uppercase(nama){
    return nama.toUpperCase();
  }
}