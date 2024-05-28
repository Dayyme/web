function triangleArea(base = 5, height = 4) {
  return (base * height) / 2;
}

console.log(triangleArea(3, 6));
console.log(triangleArea());

function Jet(color, avgSpeed, maxAltitude, brand, pointOfDestination) {
  this.color = color;
  this.avgSpeed = avgSpeed;
  this.maxAltitude = maxAltitude;
  this.brand = brand;
  this.pointOfDestination = pointOfDestination;
}

Jet.prototype.AssignPilot = function(name, yearsOfExperience, hasChildren) {
  this.pilot = {
    name: name,
    yearsOfExperience: yearsOfExperience,
    hasChildren: hasChildren
  };
};

const myJet = new Jet("Red", 800, 12000, "Boeing", "New York");
myJet.AssignPilot("John Doe", 15, true);
console.log(myJet);

class EquilateralTriangle {
  constructor(equalSide) {
    this._equalSide = equalSide;
  }

  get equalSide() {
    return this._equalSide;
  }
}

class IsoscelesTriangle extends EquilateralTriangle {
  constructor(equalSide, base) {
    super(equalSide);
    this.base = base;
  }

  static calculateArea(equalSide, base) {
    return (base / 4) * Math.sqrt(4 * (equalSide ** 2) - (base ** 2));
  }
}

const myIsoscelesTriangle = new IsoscelesTriangle(5, 6);
console.log(IsoscelesTriangle.calculateArea(myIsoscelesTriangle.equalSide, myIsoscelesTriangle.base));

