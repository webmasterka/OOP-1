'use strict';

function Phone(brand, price, color, model) {
    this.brand = brand;
	  this.price = price;
    this.color = color;
    this.model = model;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", model is " + this.model + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "6S");
var Galaxys6 = new Phone("Samsung", 1500, "gold", "s6");
var OnePlus = new Phone("Google", 3000, "black", "Plus");

iPhone6S.printInfo();
Galaxys6.printInfo();
OnePlus.printInfo();