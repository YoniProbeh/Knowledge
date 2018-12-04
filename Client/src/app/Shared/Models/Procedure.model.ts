import { Model } from "./Model.model";

export class Procedure extends Model {
  // Properties
  public procedures: Procedure[];
  
  // Constructor
  constructor(id?: string, title?: string, details?: string, description?: string, created?: Date, isActive?: boolean, image?: any, procedures?: Procedure[]) {
    super(id, title, details, description, created, isActive, image);
    this.procedures = procedures ? procedures : new Array<Procedure>();
  }
}