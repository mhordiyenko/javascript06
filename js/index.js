/*for(let i=100; i>=0; i--){
    console.log(i);
}
for(let i=100; i>=0; i-=2){
    console.log(i);
}

let i=0;
while(i<=100){
    console.log(i);
    i++;
}
let val = parseFloat(prompt('enter a'));
while (isNaN(val)){
    alert('please enter value');
    val = parseFloat(prompt('enter a'));
}
let vall;
do{
    vall=parseFloat(prompt('enter value'))
}while(isNaN(vall));*/

/*let products=['volkswagen', 'mercedes-benz'];
products.push('tesla x');
products.push('tesla s');
products.push('tesla 3');

alert(products[0]);
products[0]='ferrari';
alert(products[0]);
products[3]='audi';
console.log(products);*/

/*products.forEach(function(element, index){
    console.log(index+1 + ' '+element);
    
});*/

/*let mas = [];

for(let i=0; i<5; i++){
    mas[i]=parseFloat(prompt('enter value'));
}
mas.forEach(function(element){
    document.writeln( element );
});
document.writeln('<br>');
mas.forEach( el => document.writeln( el+ '<br>' ));

*/
// Пустий об'єкт, доповнюємо його полями
let teslaX = {};
teslaX.name = 'TeslaX';
teslaX.color = 'red';
teslaX.price = 100000;
/*teslaX['isAvailable']=true;*/
teslaX.isAvailable=true;
teslaX.beep = function() {
    console.log(teslaX.name + ' beep-beep');
}
teslaX.beep();

// Об'єктний літерал
let tesla3 = {
    name: 'Tesla 3',
    color: 'white',
    beep: function() {
    console.log(this.name + ' beep-beep!');
 }
}
tesla3.beep();

//функція конструктор
function Car(name, color, price){
    this.name = name;
    this.color = color;
    this.price = price;
    this.beep = function() {
        console.log(this.name + ' beep-beep!');
    }
}

let chevy = new Car('Chevrolet Corvette', 'silver', 50000);
chevy.beep();

//class
class SuperCar{
    constructor(name, color, price){
    this.name = name;
    this.color = color;
    this.price = price;
    }
     beep() {
        console.log(this.name + ' beep-beep!');
    }
}

let lambo = new SuperCar('Lambo Diablo', 'yellow', 500000);
lambo.beep();

//obect.create()
let lamboAve = Object.create(lambo);
lamboAve.name = 'Lambo Ave';
lambo.beep();