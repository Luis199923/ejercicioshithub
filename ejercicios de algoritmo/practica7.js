//Pedir al usuario su fecha de nacimiento y mostrar su edad actual
//analisis de requerimiento
//ENT:fecha de nacimiento, edad actual 
//PRO: diferenciaTiempo = fechaActual - fechaNacimiento
//SAL: mostrar la edad actual del usuario
//Proceso calcularEdad
    //Definir fechaNacimiento, fechaActual, añoNacimiento, edad Como Entero
    // Escribir fechaActual <- 2024
    // Escribir fechaNacimiento <- "2000-04-23"
    //Escribir añoNacimiento <- extraerAño(fechaNacimiento)
   //leer edad <- fechaActual - añoNacimiento
    //Escribir "La persona tiene ", edad, " años."
//FinProceso



function calcularEdad(fechaNacimiento) {
  let fechaActual = 2024
  let fechaNacimientoObj = 2000
  let diferenciaTiempo = fechaActual - fechaNacimiento;
  let edad=24
  return edad;
}
let fechaNacimiento = "2000-04-23";
let edad = calcularEdad(fechaNacimiento);
console.log("La persona tiene", edad, "años.");
