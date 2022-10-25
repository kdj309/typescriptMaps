import { faker } from "@faker-js/faker";
import { mappable } from "./CustomMap";
export class User implements mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `<h2>User Name: ${this.name}</h2>`;
  }
}
