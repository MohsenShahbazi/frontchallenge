import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {SplitButtonModule} from "primeng/splitbutton";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StepsModule} from "primeng/steps";
import {ToastModule} from "primeng/toast";
import {AboutComponent} from './about/about.component';
import {UploadComponent} from './upload/upload.component';
import {FormComponent} from './form/form.component';
import {TableComponent} from './table/table.component';
import {SummaryComponent} from './summary/summary.component';
import {FileUploadModule} from "primeng/fileupload";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {StoreModule} from "@ngrx/store";
import {CalendarModule} from "primeng/calendar";
import {InputNumberModule} from "primeng/inputnumber";
import {DropdownModule} from "primeng/dropdown";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UploadComponent,
    FormComponent,
    TableComponent,
    SummaryComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    StepsModule,
    ToastModule,
    FileUploadModule,
    TableModule,
    StoreModule.forRoot({}, {}),
    CalendarModule,
    InputNumberModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
