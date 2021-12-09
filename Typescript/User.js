"use strict";
exports.__esModule = true;
exports.User = exports.age = void 0;
exports.age = 20;
var User = /** @class */ (function () {
    function User(name, code) {
        this.userName = name;
        this.userCode = code;
    }
    User.prototype.displayUser = function () {
        console.log("UserCode: " + this.userCode + ", UserName: " + this.userName);
    };
    return User;
}());
exports.User = User;
var userStatus = "active";
