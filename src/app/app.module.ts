import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainFormComponent } from './main-form/main-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptorService } from './loader-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
