import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-ahmadmusyadadaa-formregister',
  templateUrl: './ahmadmusyadadaa-formregister.component.html',
  styleUrls: ['./ahmadmusyadadaa-formregister.component.css']
})

export class AhmadmusyadadaaFormregisterComponent implements OnInit {
  title = 'UTS';
  
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    alamat: new FormControl('', Validators.required),
    ttl: new FormControl('', Validators.required),
    jeniskelamin: new FormControl('', Validators.required),
    telepon: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', Validators.required)
  }, {
    validators: MustMatch('password', 'confirmPassword')
  })

  get f() {
    return this.form.controls;
  }
  
  login(){
    this.form.setErrors({
        invalidLogin: true
    });
  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value));
  }

  constructor() { }

  ngOnInit() {
  }
}