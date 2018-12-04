import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolutionComponent } from './Solution.component';
import { SolutionProfileComponent } from './SolutionProfile/SolutionProfile.component';
import { SolutionSearchComponent } from './SolutionSearch/SolutionSearch.component';

const appRoutes: Routes = [
  { path: 'Solutions', component: SolutionComponent, children: [
    { path: 'Profile', component: SolutionProfileComponent, children: [
      { path: ':id', component: SolutionProfileComponent }
    ] },
    { path: ':params', component: SolutionSearchComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class SolutionRoutingModule {

}
