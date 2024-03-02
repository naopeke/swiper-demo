import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Swiper1Component } from './pages/swiper1/swiper1.component';
import { Swiper2Component } from './pages/swiper2/swiper2.component';

const routes: Routes = [
  {path: "", component:Swiper2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
