//Pide al usuario que ingrese su año de nacimiento mediante un prompt y luego muestra su edad aproximada en la página.
//analisis de requerimiento
//ENT El usuario introduce su año de nacimiento
//PRO Se resta el año de nacimiento introducido al año actual para calcular la edad aproximada del usuario
//SAL Se muestra la edad aproximada del usuario en años.
//Inicio
//Escribir "Ingresa tu año de nacimiento:"
//Leer añoNacimiento
//Definir añoActual como 2024
//Definir edad como 0
//edad <- añoActual - ConvertirANúmero(añoNacimiento)
//Escribir "Tu edad aproximada es: " + edad + " años."
//FinAlgoritmo


const read= require=("prompt-sync");
const write= console.log;
   
let añoNacimiento = ("1999");
let añoActual = 2024
let age = añoActual - parseInt(añoNacimiento)

console.log("Tu edad aproximada es: " + age + " años.");
