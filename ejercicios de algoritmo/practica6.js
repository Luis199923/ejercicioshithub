//Escribe una función en JavaScript que tome dos números como entrada y devuelva su suma.
//Analisis de requerimiento
//ENT: num1, num2 Como Entero
//PRO: "Ingrese el primer número(leer), "Ingrese el segundo número(leer)
//SAL: mosatrar La suma de num1 y num2
//Algoritmo sumarNumeros
    //Definir num1, num2 Como Entero  
    //Escribir "Ingrese el primer número (num1): "
    //Leer num1
    //Escribir "Ingrese el primer número (num1) (num2): "
    //Leer num2  
    //Escribir "La suma de num1 y num2 es: ", num1 + num2  // Suma de num1 y num2
    //Escribir "La suma de num1 y num1 es: ", num1 + num1  
//FinProceso



const read=require ("prompt-sync")
const write= console.log
function sumarNumero(){
    let num1=(25)
    let num2=(8)
write(num1+num1)
write(num1+num2)
}
sumarNumero()