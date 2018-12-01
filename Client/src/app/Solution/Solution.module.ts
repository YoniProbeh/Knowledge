import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SolutionComponent } from './Solution.component';
import { SolutionResolver } from './Solution.resolver';
import { SolutionRoutingModule } from './Solution.routing';
import { SolutionEditComponent } from './SolutionEdit/SolutionEdit.component';
import { SolutionProfileComponent } from './SolutionProfile/SolutionProfile.component';
import { SolutionSearchComponent } from './SolutionSearch/SolutionSearch.component';

@NgModule({
  imports: [
    CommonModule,
    SolutionRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SolutionComponent,
    SolutionEditComponent,
    SolutionProfileComponent,
    SolutionSearchComponent
  ],
  providers: [SolutionResolver]
})
export class SolutionModule { }
