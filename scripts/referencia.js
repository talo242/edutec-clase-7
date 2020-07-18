/**
 * Variables
    * undefined
    * null
    * boolean
    * number
    * string
    * array
    * object
    * function
    * condicionales
    * eventos
 */

let b = 'hola'; //Reasignar la variable
const c = 24; //No queremos cambiar nunca el valor
const camelCase = 'hola'; //Javascript
const name = null;

//Undefined !== null

//Booleanos
const verdadero = true;
const falso = false;
const trueVariable = 1;
const falseVariable = 0;

//Number
const floatNumber = 13.4445;
const integerNumber = 1;

//String
const string = 'El dijo: "Hola"';

//Array
const array = [1, 'hola', 3, ['hola 2', 4]];

//Como acceder a los valores: array[0];

//Object
const object = {
    name: 'Ricardo',
    age: 27,
    profession: 'Developer',
};

//Como acceder a los valores: objec.name;

//Function
function suma(valor, b) {
    return valor + b; // undefined + undefined == NaN = Not a Number
}

const resultado1 = suma(10, 10);


//Condicionales
if (resultado1 === 3) {
    alert('Suma es 3');
} else {
    alert('Suma NO es 3, suma es: ' + suma(3, 20));
}

//Eventos
function onUserScroll() {
    alert('el usuario hizo click')
}

document.addEventListener('scroll', onUserScroll);
