import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AhmadmusyadadaaFormregisterComponent } from './ahmadmusyadadaa-formregister/ahmadmusyadadaa-formregister.component';
@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AhmadmusyadadaaFormregisterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { AhmadmusyadadaaFormregisterComponent } from './ahmadmusyadadaa-formregister/ahmadmusyadadaa-formregister.component';
// import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

// @NgModule({
//    declarations: [
//       AppComponent,
//       AhmadmusyadadaaFormregisterComponent,
//       ReactiveFormComponent
//    ],
//    imports: [
//       BrowserModule,
//       AppRoutingModule,
//    ],
//    providers: [],
//    bootstrap: [
//       AppComponent
//    ]
// })
// export class AppModule { }