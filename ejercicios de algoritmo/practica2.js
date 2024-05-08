//2. Pedir al usuario el nombre de un estudiante y sus tres notas. Calcule el promedio de sus tres notas, Si el promedio es menor de 70, el profesor aplicó una ayuda de un 5% al total de las notas y lo sumó al promedio. Deberá mostrar el nombre del estudiante, las tres notas y el promedio con un mensaje de aprobado o reprobado. Un estudiante aprueba si su promedio es superior o igual a 70, de lo contrario es reprobado
//Analisis de requerimiento
//ENT  nombre del estudiante,  ingrese tres notas.
//PRO calcula el promedio de las tres notas ingresadas. evalúa si el promedio calculado es mayor o igual a 70
//SAL Mensaje indicando si el estudiante fue aprobado o no.
//ALGORITMO
//escribir "Ingrese el nombre del estudiante:"
//leer nombre
//escribir "Ingrese la nota 1:"
//leer nota1
//escribir "Ingrese la nota 2:"
//leer nota2
//escribir "Ingrese la nota 3:"
//leer nota3
//promedio = (nota1 + nota2 + nota3) / 3
//if (promedio >= 70) {
    //escribir(nombre + " fue aprobado")
//} else {
    //escribir(nombre + " no fue aprobado")
//FinAlgoritmo




let nombre=("luis")
let nota1=10,nota2=50,nota3=40
promedio=(nota1+nota2+nota3/3 >=70) 
if (promedio) {
    console.log(nombre + " fue aprobado")
} else {
    console.log(nombre + " no fue aprobado")
}