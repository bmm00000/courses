// When you install axios, authomatically you will get the TS declaration file as well in the modules folder.
// That's why you will be able to see the types if you right click on the methods and check the type.
// You will see the types declaration file in the package.json file of the axios folders inside of the modules of your project.
import axios from "axios";
// after you install lodash, you will get a warning message that a declaration file for lodash is not found.
// that's why you have to install the type declarations. check how to consume type declarations in the TS documentation (@types refers to a project called DefinitelyTyped, which is a repo of thousends of type declarations for the most popular js libraries).
import _ from "lodash";
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

axios
  // the way axios works, you can pass the type, for example 'User', and that's going to be the type that you will get in the response. Therefore, when you try to access properties in the response, TS will warn you if any of them do not belong to the type that you passed:
  .get<User>("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    console.log("WOO!!!");
    printUser(res.data);
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });

axios
  .get<User[]>("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log("WOO!!!");
    res.data.forEach(printUser);
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });

function printUser(user: User) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
}
