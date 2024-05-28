class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("Квадрат - це геометрична фігура з чотирма однаковими сторонами та кутами.");
    }

    length() {
        console.log("Довжина всіх сторін квадрата:", 4 * this.a);
    }

    square() {
        console.log("Площа квадрата:", this.a ** 2);
    }

    info() {
        console.log("Характеристика квадрата:");
        console.log("Довжина сторони:", this.a);
        console.log("Периметр:", 4 * this.a);
        console.log("Площа:", this.a ** 2);
    }
}


class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("Прямокутник - це геометрична фігура з двома паралельними протилежними сторонами, які мають однакові довжини.");
    }

    length() {
        console.log("Довжина всіх сторін прямокутника:", 2 * (this.a + this.b));
    }

    square() {
        console.log("Площа прямокутника:", this.a * this.b);
    }

    info() {
        console.log("Характеристика прямокутника:");
        console.log("Довжина:", this.a);
        console.log("Ширина:", this.b);
        console.log("Периметр:", 2 * (this.a + this.b));
        console.log("Площа:", this.a * this.b);
    }
}


class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Ромб - це геометрична фігура з чотирма однаковими сторонами, у якого всі кути рівні.");
    }

    length() {
        console.log("Довжина всіх сторін ромба:", 4 * this.a);
    }

    square() {
        console.log("Площа ромба:", this.a ** 2 * Math.sin(this.alpha * Math.PI / 180));
    }

    info() {
        console.log("Характеристика ромба:");
        console.log("Довжина сторони:", this.a);
        console.log("Тупий кут:", this.alpha);
        console.log("Гострий кут:", this.beta);
        console.log("Периметр:", 4 * this.a);
        console.log("Площа:", this.a ** 2 * Math.sin(this.alpha * Math.PI / 180));
    }
}


class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Паралелограм - це геометрична фігура з протилежними сторонами рівними та паралельними.");
    }

    length() {
        console.log("Довжина всіх сторін паралелограма:", 2 * (this.a + this.b));
    }

    square() {
        console.log("Площа паралелограма:", this.a * Math.sin(this.alpha * Math.PI / 180) * this.b);
    }

    info() {
        console.log("Характеристика паралелограма:");
        console.log("Довжина:", this.a);
        console.log("Ширина:", this.b);
        console.log("Тупий кут:", this.alpha);
        console.log("Гострий кут:", this.beta);
        console.log("Периметр:", 2 * (this.a + this.b));
        console.log("Площа:", this.a * Math.sin(this.alpha * Math.PI / 180) * this.b);
    }
}

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

const mySquare = new Square(5);
const myRectangle = new Rectangle(4, 6);
const myRhombus = new Rhombus(5, 60, 120);
const myParallelogram = new Parallelogram(4, 6, 60, 120);

mySquare.info();
myRectangle.info();
myRhombus.info();
myParallelogram.info();

