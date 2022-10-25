// console.log("hello world");
import { User } from "./src/User";
import { Company } from "./src/Company";
import { CustomMap } from "./src/CustomMap";
let user = new User();
let company = new Company();
let map = new CustomMap("77.580643", "12.972442", "map");

map.addMarker(user);
map.addMarker(company);
// console.log(user, company);
