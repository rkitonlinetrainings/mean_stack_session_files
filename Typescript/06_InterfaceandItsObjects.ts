interface IPerson {
    firstName: string;
    lastName: string;

    sayHi: () => string;
}

let customer: IPerson = {
    firstName: "tom", 
    lastName: "hank", 
    sayHi: (): string => {return "hi there?"}
}

console.log("customer object");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());