import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProcedureModule } from './Procedure/Procedure.module';
import { SolutionComponent } from './Solution.component';
import { SolutionResolver } from './Solution.resolver';
import { SolutionRoutingModule } from './Solution.routing';
import { SolutionService } from './Solution.service';
import { SolutionProfileComponent } from './SolutionProfile/SolutionProfile.component';
import { SolutionSearchComponent } from './SolutionSearch/SolutionSearch.component';

@NgModule({
  imports: [
    CommonModule,
    SolutionRoutingModule,
    ReactiveFormsModule,
    ProcedureModule
  ],
  declarations: [
    SolutionComponent,
    SolutionProfileComponent,
    SolutionSearchComponent
  ],
  providers: [SolutionResolver, SolutionService]
})
export class SolutionModule { }
