import { Model } from "./Model.model";

export class Step extends Model {
  // Constructor
  constructor(id?: string, title?: string, details?: string, description?: string, created?: Date, isActive?: boolean, image?: any) {
    super(id, title, details, description, created, isActive, image);
  }
}