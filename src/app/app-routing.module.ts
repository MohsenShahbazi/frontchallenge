import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {path:'upload',component:AboutComponent},
  {path:'form',component:AboutComponent},
  {path:'table',component:AboutComponent},
  {path:'suumary',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
