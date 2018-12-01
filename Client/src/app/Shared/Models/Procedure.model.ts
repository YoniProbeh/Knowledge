import { Model } from "./Model.model";
import { Step } from "./Step.model";

export class Procedure extends Model {
  // Properties
  public steps: Step[];
  
  // Constructor
  constructor(id?: string, title?: string, details?: string, description?: string, created?: Date, isActive?: boolean, image?: any, procedures?: Procedure[]) {
    super(id, title, details, description, created, isActive, image);
    this.steps = procedures ? procedures : new Array<Procedure>();
  }
}