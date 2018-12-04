import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Procedure } from '../Shared/Models/Procedure.model';
import { Solution } from '../Shared/Models/Solution.model';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {
  // Properties

  // Default Constructor
  constructor(private http: HttpClient) { }

  public initControlArray(procedures: Procedure[] = new Array<Procedure>()): AbstractControl[] {
    let controls: AbstractControl[] = new Array<AbstractControl>();
    procedures.forEach((element: Procedure) => {
      controls.push(this.initForm(null, element));
    });
    return controls;
  }
  public initForm(collection?: AbstractControl[], model: Procedure = new Procedure()): FormGroup {
    let controls = new FormGroup({
      'id': new FormControl(model.id),
      'title': new FormControl(model.title, Validators.required),
      'details': new FormControl(model.details),
      'description': new FormControl(model.description),
      'created': new FormControl(model.created, Validators.required),
      'isActive': new FormControl(model.isActive),
      'image': new FormControl(model.image),
      'procedures': new FormArray(this.initControlArray(model.procedures))
    });

    if (collection) {
      collection.push(controls);
    }
    return controls;
  }
  public createSolution(item: Solution) {

  }
  public getSolutions() {

  }
  public getSolution(id: string) {

  }
  public updateSolution(item: Solution) {

  }
  public deleteSolution(item: Solution) {

  }

}
