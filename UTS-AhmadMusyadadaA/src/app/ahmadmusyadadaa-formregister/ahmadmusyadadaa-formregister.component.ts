import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ahmadmusyadadaa-formregister',
  templateUrl: './ahmadmusyadadaa-formregister.component.html',
  styleUrls: ['./ahmadmusyadadaa-formregister.component.css']
})

export class AhmadmusyadadaaFormregisterComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),

  })

  login(){
    this.form.setErrors({
        invalidLogin: true
    });
  }

  get name(){
    return this.form.get('name');
  }

  title = 'UTS';
  model: any = {};
  onSubmit() {
    console.log();
  }

  constructor() { }

  ngOnInit() {
  }
}

export function MustMatch(controlName: string, matchingControlName: string) {
  
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      

      // return null if controls haven't initialised yet
      if (!control || !matchingControl) {
        return null;
      }

      // return null if another validator has already found an error on the matchingControl
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          return null;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}