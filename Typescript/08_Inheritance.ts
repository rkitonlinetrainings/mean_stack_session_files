class Shape {
    area: number;

    constructor(a: number) {
        this.area = a;
    }
}

class Circle extends Shape {
    disp(): void {
        console.log("area of the circle: " + this.area)
    }
}

let obj2 = new Circle(245);
obj2.disp();