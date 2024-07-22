function greet(name) {
    console.log(`Hello ${name}`);
}
greet('alice')
function checkScope() {
    if (true){
    var Varyiabu = 'inside if'
    let leetVb = 'Inside If'
    const leet = 'Inside If'
    } 
    console.log(Varyiabu);
    // console.log(leetVb);    
    // console.log(leet);    
}
checkScope();

let person = {
    name: 'Alice',
    age: 23, 
    hobby:['reading', 'painting', 'hockey']
}
console.log(`${person.name} likes to play ${person.hobby[2]}`);

let numSTring = '43';
let convertedNum = Number(numSTring) + 54
console.log(convertedNum);

let isEqual = 5 == "5"
let isnotEqual = 5 == "10"
console.log(isEqual);
console.log(isnotEqual);

let age = 45;
let chekinValue = (age > 45) ? "You old": "Young"
console.log(chekinValue);

let temp = 25;
if (temp > 25){
    console.log("hot outside");
}else{
    console.log('Cold temp');
}

let hour = 14
if (hour < 12){
    console.log("Good morning");
}else if(hour >= 12 && hour < 18){
    console.log("Good afternoon");
}else{
    console.log("Good Night");
}

let day = "Monday"
switch (day) {
    case "Monday":
        console.log("First day of Week");
        break;
    case "Wedsday":
        console.log("mid-week");
        break;
    default:
        console.log("Another day of week");
        break;
}

function sume(a, b) {
    let added = a + b;
    console.log(added);
}
sume(5, 7);

// console.log("Hello " + name + " back");
function greetAgain(name = "Bob"){
console.log("Welcom back " + name + " !");
}
greetAgain("paul")
greetAgain()

// The Closure Function below didn't run
// function outerFunc() {
//     let outaVar = "I am outer"
//     function innerVar() {
//         console.log(outaVar);
//     }
//     return innerVar()
// }
// const closurFunc = outerFunc();
// closurFunc()

function facctorial(n) {
    if ( n == 0 || n == 1){
        return 1
    }else{
        return n * facctorial(n - 1)
    }
}

console.log(facctorial(5));

function fibbonacci(n) {
    if (n <= 1){
        return n
    }else{
        return fibbonacci(n -1) + fibbonacci(n - 2)
    }
}
console.log(fibbonacci(6));