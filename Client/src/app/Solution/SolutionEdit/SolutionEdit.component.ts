import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Solution } from 'src/app/Shared/Models/Solution.model';
import { Procedure } from 'src/app/Shared/Models/Procedure.model';
import { Step } from 'src/app/Shared/Models/Step.model';

@Component({
  selector: 'app-SolutionEdit',
  templateUrl: './SolutionEdit.component.html',
  styleUrls: ['./SolutionEdit.component.css']
})
export class SolutionEditComponent implements OnInit {
  // Properties
  @Input() public solution: Solution;
  public solutionForm: FormGroup;

  // Default Constructor
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.initSolution();
    this.initSolutionForm();
  }

  private initSolution() {
    if (!this.solution) {
      if (this.route.data['solution']) {
        this.solution = this.route.data['solution'];
      }
      else {
        this.solution = new Solution();
      }
    }
  }
  private initSolutionForm() {
    this.solutionForm = new FormGroup({
      'title': new FormControl(this.solution.title, Validators.required),
      'details': new FormControl(this.solution.details),
      'description': new FormControl(this.solution.description),
      'created': new FormControl(this.solution.created, Validators.required),
      'isActive': new FormControl(this.solution.isActive),
      'image': new FormControl(this.solution.image),
      'procedures': new FormArray(this.initProceduresFormArray(this.solution.procedures))
    });
  }
  private initProceduresFormArray(collection?: Procedure[]): AbstractControl[] {
    let controls: AbstractControl[] = new Array<AbstractControl>();
    collection.forEach((element: Procedure) => {
      controls.push(new FormGroup({
        'title': new FormControl(element.title, Validators.required),
        'details': new FormControl(element.details),
        'description': new FormControl(element.description),
        'created': new FormControl(element.created, Validators.required),
        'isActive': new FormControl(element.isActive),
        'image': new FormControl(element.image),
        'steps': new FormArray(this.initStepsFormArray(element.steps))
      }));
    });
    return controls;
  }
  private initStepsFormArray(collection: Step[]): AbstractControl[] {
    let controls: AbstractControl[] = new Array<AbstractControl>();
    collection.forEach((element: Procedure) => {
      controls.push(new FormGroup({
        'title': new FormControl(element.title, Validators.required),
        'details': new FormControl(element.details),
        'description': new FormControl(element.description),
        'created': new FormControl(element.created, Validators.required),
        'isActive': new FormControl(element.isActive),
        'image': new FormControl(element.image)
      }));
    });
    return controls;
  }
  public addProcedure() {
    let control = new FormGroup({
      'title': new FormControl('', Validators.required),
      'details': new FormControl(''),
      'description': new FormControl(''),
      'created': new FormControl(new Date(), Validators.required),
      'isActive': new FormControl(true),
      'image': new FormControl(null)
    });
    (<FormArray>this.solutionForm.get('procedures')).push(control);
  }
  public onSubmit() {
    console.log(this.solutionForm);
  }
}
