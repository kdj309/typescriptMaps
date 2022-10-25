import { faker } from "@faker-js/faker";
import { mappable } from "./CustomMap";

export class Company implements mappable {
  name: string;
  catchpharse: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.company.name();
    this.catchpharse = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<div>
        <h2>Company Name : ${this.name}</h2>
        <p> Catchpharse  : ${this.catchpharse}</p>
        </div>`;
  }
}
