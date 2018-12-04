import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Procedure } from 'src/app/Shared/Models/Procedure.model';
import { SolutionService } from '../Solution.service';

@Component({
  selector: 'app-Procedure',
  templateUrl: './Procedure.component.html',
  styleUrls: ['./Procedure.component.css']
})
export class ProcedureComponent implements OnInit {
  // Properties
  @Input() public procedure: Procedure = new Procedure();
  public procedureForm: FormGroup;
  
  // Default Constructor
  constructor(private service: SolutionService) { this.procedureForm = this.service.initForm(null, this.procedure);}

  ngOnInit() { }

  public onSubmit() {
    
  }
  public addProcedure() {
    (<FormArray>this.procedureForm.get('procedures')).push(this.service.initForm());
  }
}
