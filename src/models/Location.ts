export class Location {
  code?: number;
  name: string;
  image: string;
  creationDate: string;

  constructor(name: string, image: string, creationDate: string, code?: number) {
    this.code = code;
    this.name = name;
    this.image = image;
    this.creationDate = creationDate;
  }

  // Método estático para crear una nueva instancia de Location
  static create(name: string, image: string, creationDate: string): Location {
    return new Location(image, name, creationDate);
  }

  // Ejemplo de un método adicional
  updateImage(newImage: string): void {
    this.image = newImage;
  }
}
