//En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.
//El area la calculas como lado multiplicado por lado. El perímetro es la suma de los cuatro lados.
//analisis de requerimiento
//ENT: El usuario ingresa la longitud del lado del cuadrado.
//PRO:Se calcula el área del cuadrado multiplicando la longitud del lado por sí misma.
//Se calcula el perímetro del cuadrado multiplicando la longitud del lado por 4.
//SAL:El programa muestra al usuario el área y el perímetro del cuadrado
//Inicio
//Algoritmo
//Definir lado como entero
//Definir area como entero
//Definir perimetro como entero
//Escribir "Ingrese la longitud del lado del cuadrado:"
//Leer lado
//area <- lado * lado
//perimetro <- lado * 4
//Escribir "El area es " concatenar area
//Escribir "El perímetro es " concatenar perimetro
//FinAlgoritmo


function resultado(){
let lado = 40;
let area = 40*40;
let perimetro = 40*4;
console.log("El area es "+ area);
console.log("El perímetro es "+perimetro);
}
resultado()