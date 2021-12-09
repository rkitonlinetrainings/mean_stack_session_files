export let age: number = 20;

export class User {
    userCode: number;
    userName: string;

    constructor(name: string, code: number) {
        this.userName = name;
        this.userCode = code;
    }

    displayUser() {
        console.log("UserCode: " + this.userCode + ", UserName: " + this.userName);
    }
}

let userStatus = "active";