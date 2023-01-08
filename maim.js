function CoffeeMake(coffeeName){
   this.coffeeName = coffeeName;
   console.log('CoffeeMake');
}

CoffeeMake.prototype.on = function(){
   console.log('Coffee on')
}

CoffeeMake.prototype.off = function(){
   console.log('Coffee off')
}

function DripMachine(){
   console.log('DripMachine');
}
function CarobMachine(){
   console.log('DripMachine');
}
function CoffeeMachine(){
   console.log('DripMachine');
}

DripMachine.prototype = Object.create(CoffeeMake.prototype);
DripMachine.prototype.constructor = DripMachine;

CarobMachine.prototype = Object.create(CoffeeMake.prototype);
CarobMachine.prototype.constructor = CarobMachine;

CoffeeMachine.prototype = Object.create(CoffeeMake.prototype);
CoffeeMachine.prototype.constructor = CoffeeMachine;


DripMachine.prototype.doDrip = function(name){
   this.name = name;
   console.log('Drip coffee done');
}
CarobMachine.prototype.doCarob = function(name){
   this.name = name;
   console.log('Carob coffee done');
}
CoffeeMachine.prototype.doCoffee = function(name){
   this.name = name;
   console.log('Coffee  done');
}

let drip = new DripMachine('espresso');
let carob = new CarobMachine('american');
let coffee = new CoffeeMachine('late');

console.log(drip);
console.log(carob);
console.log(coffee);

drip.doDrip()
carob.doCarob()
coffee.doCoffee()