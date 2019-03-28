import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { UserComponent } from './user/user.component';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    UserComponent,
    CourseComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
