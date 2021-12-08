class Car {
    engine: string;

    constructor(engine: string) {
        this.engine = engine;
    }

    disp(): void {
        console.log("the engine: " + this.engine)
    }
}

let obj1 = new Car("XUV");
console.log("read attribute of engine: " + obj1.engine);

obj1.disp();