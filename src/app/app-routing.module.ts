import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridPageComponent } from './grid-page/grid-page.component';


const routes: Routes = [
  {
    path: 'menu1',
    component: GridPageComponent,
    data: { title: 'Menu 1' }
  },
  {
    path: 'menu2',
    component: GridPageComponent,
    data: { title: 'Menu 2' }
  },
  {
    path: 'menu3',
    component: GridPageComponent,
    data: { title: 'Menu 3' }
  },
  {
    path: 'menu4',
    component: GridPageComponent,
    data: { title: 'Menu 4' }
  },
  { path: '',
    redirectTo: '/menu1',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
