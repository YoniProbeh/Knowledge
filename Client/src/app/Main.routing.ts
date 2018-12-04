import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { SolutionComponent } from './Solution/Solution.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Solutions', component: SolutionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule {

}
