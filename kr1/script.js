function triangleArea(base = 5, height = 4) {
  const area = (base * height) / 2;
  console.log("Площа трикутника: " + area);
  return area;
}

console.log(triangleArea(3, 6));
console.log(triangleArea());

function Jet(color, avgSpeed, maxAltitude, brand, pointOfDestination) {
  this.color = color;
  this.avgSpeed = avgSpeed;
  this.maxAltitude = maxAltitude;
  this.brand = brand;
  this.pointOfDestination = pointOfDestination;

  this.AssignPilot = function(name, yearsOfExperience, hasChildren) {
    this.pilot = {
      name: name,
      yearsOfExperience: yearsOfExperience,
      hasChildren: hasChildren
    };
  };
}

const myJet = new Jet("Red", 800, 12000, "Boeing", "New York");
myJet.AssignPilot("John Doe", 15, true);
console.log(myJet);

function EquilateralTriangle(equalSide) {
  this._equalSide = equalSide;

  this.equalSide = function() {
    return this._equalSide;
  };
}

function IsoscelesTriangle(equalSide, base) {
  EquilateralTriangle.call(this, equalSide);
  this.base = base;

  IsoscelesTriangle.calculateArea = function(base, equalSide) {
    return (base / 4) * Math.sqrt(4 * (equalSide ** 2) - (base ** 2));
  };

  this.calculateArea = function() {
    const area = IsoscelesTriangle.calculateArea(this.base, this.equalSide());
    console.log("Площа рівнобедреного трикутника: " + area);
    return area;
  };
}

const myIsoscelesTriangle = new IsoscelesTriangle(5, 6);
console.log(myIsoscelesTriangle.calculateArea());

function AddGenerator(initialNumber) {
  return function(numberToAdd) {
    const result = initialNumber + numberToAdd;
    console.log("Результат додавання: " + result);
    return result;
  };
}

const addFive = AddGenerator(5);
console.log(addFive(10));

const addTen = AddGenerator(10);
console.log(addTen(7));
