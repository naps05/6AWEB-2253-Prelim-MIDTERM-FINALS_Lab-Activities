import { Component } from '@angular/core';
import { NgFor, NgIf, CurrencyPipe } from '@angular/common';

interface Employee {
  empNo: number;
  fullname: string;
  gender: string;
  email: string;
  status: string;
  salary: number;
}

@Component({
  selector: 'app-emplist',
  standalone: true,
  templateUrl: './emplist.html',
  styleUrl: './emplist.css',
  imports: [NgFor, NgIf, CurrencyPipe] // <-- IMPORT DIRECTIVES AND PIPE
})
export class EmplistComponent {
  employees: Employee[] = [
    { empNo: 101, fullname: 'Francis Santos', gender: 'Male', email: 'allensantos@gmail.com', status: 'Full-time', salary: 500000 },
    { empNo: 102, fullname: 'Joriz Pintero', gender: 'Male', email: 'jerjer@yahoo.com', status: 'Full-time', salary: 300000 },
    { empNo: 103, fullname: 'Byrone Garcia', gender: 'Male', email: 'byrone69@bing.com', status: 'Full-time', salary: 400000 },
    // Add more employees here
  ];

  showSalary = true; // toggle to hide/show salary column
}
