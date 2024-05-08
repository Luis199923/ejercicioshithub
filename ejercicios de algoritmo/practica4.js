//Pide al usuario que ingrese un número mediante un prompt y luego muestra si el número es par o impar
//Analisis de requerimiento
//ENT El usuario introduce un número entero.
//PRO converti numero a entero, Se verifica si el número es par o impar mediante el cálculo del módulo 2 si es par o no
//SAL Un mensaje que indica si el número ingresado es par o impar.
//Algoritmo
//Inicio
//escribir("Ingrese un número: ")
//leer(numero)
//número = convertir_a_entero(numero)
//si (número módulo 2 == 0) entonces
    //escribir(numero, " es par")
//sino
    //escribir(numero, " es impar")
//fin si
//FinAlgoritmo



const read = require("prompt-sync")();
const write = console.log
let numero=("7")
numero= parseInt (numero)
if (numero % 2==0 ) {
    write(numero, "es par")
} else {
    write(numero, "es impar")
}