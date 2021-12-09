/*
import { User } from "./User";

let userObj = new User("dev", 1);
userObj.displayUser();
*/


import * as Usr from "./User";
console.log("User Age: " + Usr.age)

let userObj = new Usr.User("dev", 1);
userObj.displayUser();


/*
import { User as Usr } from "./User";

let userObj = new Usr("jebs", 3);
userObj.displayUser();
*/