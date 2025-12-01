// src/app/app.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar">
      <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
      <a routerLink="/products" routerLinkActive="active">Products</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
      <a routerLink="/employees" routerLinkActive="active">Employees</a>
    </nav>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.css']  // keep CSS if exists
})
export class AppComponent {}
