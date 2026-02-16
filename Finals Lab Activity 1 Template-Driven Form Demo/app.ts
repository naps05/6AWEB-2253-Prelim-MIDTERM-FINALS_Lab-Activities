import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-demo/template-demo.html',
  styleUrls: ['./template-demo/template-demo.css']
})
export class App {
  title = "Bank Account Registration";

  // Form Properties
  username = '';
  email = '';
  password = '';
  role = '';
  gender = '';
  status = '';
  comments = '';

  submitted = false;

  onSubmit() {
    // This triggers the success interaction
    this.submitted = true;
  }

  resetForm() {
    this.submitted = false;
  }
}
