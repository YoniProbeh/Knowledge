export class Model {
  public id: string;
  public title: string;
  public details: string;
  public description: string;
  public created: Date;
  public isActive: boolean;
  public image: string;

  // Default Constructor
  constructor(id?: string, title?: string, details?: string, description?: string, created?: Date, isActive?: boolean, image?: any) {
    this.id = id;
    this.title = title;
    this.details = details;
    this.description = description;
    this.created = created ? created : new Date();
    this.isActive = isActive ? isActive : true;
    this.image = image;
  }
}
