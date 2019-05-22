import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent {
  searchText: any = {name: ''};
  constructor(private authService: AuthService, filterPipe: FilterPipe) {
    console.log(filterPipe.transform(this.data, {nama: ''}));
  }

  data=[
    {id: 1, name: 'Peter Liu', email: 'Peter Liu', contact: '08123456789'},
    {id: 2, name: 'Pitir Liu', email: 'Peter Liu', contact: '08123456789'}
  ]

  submit(form){
    this.data.push({id: this.data.length + 1, name: this.uppercase(form.nama) , email: form.email, contact: form.contact});
    form.valid;
  }

  uppercase(nama){
    return nama.toUpperCase();
  }
}