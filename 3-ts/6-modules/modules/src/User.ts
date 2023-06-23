// the following syntax is safer, since tools like Babel can make better assumptions... (although not using the keyword 'type' usually doesn't give you any problems)
import type { Person } from "./types.js";
// in modern versions of ts, you can also see the following:
// import {type Person, somethingElse} from './types.js'
export default class User implements Person {
  constructor(public username: string, public email: string) {}
  logout() {
    console.log(`${this.username} logs out!!`);
  }
}

export function userHelper() {
  console.log("USER HELPER!");
}
