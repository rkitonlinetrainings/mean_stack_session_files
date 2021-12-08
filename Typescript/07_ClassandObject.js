var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log("the engine: " + this.engine);
    };
    return Car;
}());
var obj1 = new Car("XUV");
console.log("read attribute of engine: " + obj1.engine);
obj1.disp();
