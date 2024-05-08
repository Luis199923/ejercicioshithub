//Pedir al usuario dos números y mostrar si son iguales o diferentes.
//bosquejo
//analisis de requerimiento
//ENT: numero1 & numero2
//PRO: comparar si numero1 es = numero2
//SAL:mostrar mensaje 
//pseudocodigo
//Algoritmo de comparacion 
// Definir las variables
 //Escribir numero = 15
 //Escribir numero2 = 10
//Leer si numero es igual a numero2 entonces
    //imprimir "El número", numero, "es igual a", numero2
//sino
    // Imprimir que los números son diferentes
    //imprimir "El número", numero, "es diferente de", numero2
//fin si
//FinAlgoritmo



let numero=15  //10 es igual 
let numero2=10
resultado= numero === numero2
if (resultado) {
    console.log( numero,"es igual", numero2)
    
} else {
    console.log( numero,"es diferente", numero2)
}
