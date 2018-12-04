import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Procedure } from 'src/app/Shared/Models/Procedure.model';
import { Solution } from 'src/app/Shared/Models/Solution.model';
import { SolutionService } from '../Solution.service';

@Component({
  selector: 'app-SolutionProfile',
  templateUrl: './SolutionProfile.component.html',
  styleUrls: ['./SolutionProfile.component.css']
})
export class SolutionProfileComponent implements OnInit {
  // Properties
  @Input() public solution: Solution;
  public solutionForm: FormGroup;

  // Default Constructor
  constructor(private route: ActivatedRoute, private service: SolutionService) { }

  ngOnInit() {
    if (!this.solution) {
      if (this.route.data['solution']) {
        this.solution = this.route.data['solution'];
      }
      else { this.solution = new Solution(); }
    }
    this.solutionForm = this.service.initForm(null, this.solution);
  }
  public addProcedure() {
    (<FormArray>this.solutionForm.get('procedures')).push(this.service.initForm());
  }
  public onSubmit() {
    console.log(this.solutionForm);
  }
}
