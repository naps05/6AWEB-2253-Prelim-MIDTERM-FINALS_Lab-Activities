import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Myservice } from './myservice';
import { NewCmp } from './new-cmp/new-cmp';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewCmp ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  todaydate;
  componentproperty;

  constructor(private myservice: Myservice) {
    this.todaydate = this.myservice.ShowTodayDate();
    this.componentproperty = this.myservice.serviceproperty;
  }
}
