import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { ProductComponent } from './product/product';
import { EmplistComponent } from './emplist/emplist';
import { Pagenotfound } from './pagenotfound/pagenotfound';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'employees', component: EmplistComponent },
  { path: 'about', component: About },
  { path: 'products', component: ProductComponent },
  { path: '**', component: Pagenotfound }
];
