import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcedureComponent } from './Procedure.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ProcedureComponent],
  exports: [ProcedureComponent]
})
export class ProcedureModule { }
