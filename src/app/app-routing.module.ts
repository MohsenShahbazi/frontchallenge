import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {FormComponent} from "./form/form.component";
import {TableComponent} from "./table/table.component";
import {SummaryComponent} from "./summary/summary.component";
import {UploadComponent} from "./upload/upload.component";

const routes: Routes = [
  {path:'upload',component:UploadComponent},
  {path:'form',component:FormComponent},
  {path:'table',component:TableComponent},
  {path:'summary',component:SummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
