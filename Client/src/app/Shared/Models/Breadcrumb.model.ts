export class Breadcrumb {
  // Properties
  public name: string;
  public path: string;

  // Constructor
  constructor(name?: string, path?: string) {
    this.name = name;
    this.path = path;
  }
}