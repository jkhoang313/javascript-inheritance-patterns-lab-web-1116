function Point(x, y) {
  this.x = x
  this.y = y
}
Point.prototype.toString = function () {
  return `(${this.x}, ${this.y})`
}

function Side(length) {
  this.length = length
}

function Shape() {

}
Shape.prototype.addToPlane = function (x, y) {
  this.position = new Point(x, y)
}
Shape.prototype.move = function (x, y) {
  this.position = new Point(x, y)
}

function Circle(radius) {
  this.radius = radius
  this.diameter = function() {
    return this.radius * 2
  }
}
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.area = function() {
  return Math.PI * this.radius * this.radius
}
Circle.prototype.circumference = function() {
  return 2 * Math.PI * this.radius
}

function Polygon(sides) {
  this.sides = sides
}
Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.perimeter = function() {
  var perimeter = 0
  for (let i = 0; i < this.sides.length; i++) {
    perimeter += this.sides[i].length
  }
  return perimeter
}
Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

function Quadrilateral(sideOne, sideTwo, sideThree, sideFour) {
  this.sideOne = new Side(sideOne)
  this.sideTwo = new Side(sideTwo)
  this.sideThree = new Side(sideThree)
  this.sideFour = new Side(sideFour)
  this.sides = [this.sideOne, this.sideTwo, this.sideThree, this.sideFour]
}
Quadrilateral.prototype = Object.create(Polygon.prototype)


function Rectangle(width, height) {
  this.width = width
  this.height = height
  this.sides = [new Side(width), new Side(width), new Side(height), new Side(height)]
}
Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.area = function() {
  return this.width * this.height
}

function Square(side) {
  this.width = side
  this.height = side
  this.sides =  [new Side(side), new Side(side), new Side(side), new Side(side)]
}
Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.listProperties = function() {
}

function Triangle(sideOne, sideTwo, sideThree) {
  this.sides = [new Side(sideOne), new Side(sideTwo), new Side(sideThree)]
}
Triangle.prototype = Object.create(Polygon.prototype)
