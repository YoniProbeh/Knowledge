import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthComponent } from './Auth/Auth.component';
import { BreadcrumbComponent } from './Breadcrumb/Breadcrumb.component';
import { HomeComponent } from './Home/Home.component';
import { NavbarComponent } from './Navbar/Navbar.component';
import { MainRoutingModule } from './Main.routing';
import { SidenavComponent } from './Sidenav/Sidenav.component';
import { SolutionModule } from './Solution/Solution.module';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      SidenavComponent,
      BreadcrumbComponent,
      HomeComponent,
      AuthComponent,
   ],
   imports: [
      BrowserModule,
      MainRoutingModule,
      SolutionModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
