import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { UserService } from './services/auth/auth.service';
import { DashboardService } from './services/dashboard.service';
import { SearchService } from './services/search.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DasboardComponent } from './dashboard/dasboard/dasboard.component';
import { AddPropertyComponent } from './Dashboard/add-property/add-property.component';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'Signin',
    component: LoginComponent
  },

  {
    path: 'Signup',
    component:  RegisterComponent
  },

  {
    path: 'dasboard',
    component:  DasboardComponent
  },

  {
    path: 'add/property',
    component:  AddPropertyComponent
  },

  {
    path: 'search',
    component:  SearchComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DasboardComponent,
    AddPropertyComponent,
    SearchComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    FormsModule,

  ],
  providers: [UserService,DashboardService,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
