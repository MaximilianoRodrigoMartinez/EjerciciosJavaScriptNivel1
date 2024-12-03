// Ejercicio 1
// Mostrar por consola, tu nombre, apellido, comisión y hobbies


// let nombre = "Maxi"

// let apellido = "Martinez"

// let comision = "C24234"

// let hobbies = "Leer, programar, mirar anime, jugar al basket"

// console.log("Me llamo " + nombre + " " + apellido + " y mi curso es: " + comision + ". Ademas mis hobbies son: " + " " + hobbies)


// Ejercicio 2
// Escribe un programa que le pida al usuario ingresar una frase y la imprima en la consola.
// Recuerda que para pedirle al usuario que escriba una frase debes utilizar el método prompt() y para escribir
// en la consola debes utilizar el método console.log().

// let frase = prompt("Ingrese una frase: ")

// console.log(frase)

// Ejercicio 3
// Escribe un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre y un
// signo de exclamación.

// let nombre = prompt("Como es tu nombre? ")

// console.log("Hola " + nombre + "!")

// Ejercicio 4
// Escribe un programa que le pida al usuario su nombre y apellido y lo imprima por
// consola

// let nombre = prompt("Ingrese su nombre ")

// let apellido = prompt("Ingrese su apellido ")

// console.log(nombre + " " + apellido)

// Ejercicio 5
// Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola
// con la frase "Tienes X años".

// let nacimiento = prompt("Ingrese su año de nacimiento")

// console.log("Tienes " + (2024 - nacimiento) + " años")

// Ejercicio 6
// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de
// grasa de una persona.
// El BMI se calcula con la siguiente formula:
// peso / altura^2
// Escribe un programa que le pida al usuario su peso y su altura para calcular su BMI e imprima la frase "Tu
// BMI es X".

// let peso = parseFloat(prompt("Ingrese su peso en kilogramos (kg):"));

// let altura = parseFloat(prompt("Ingrese su altura en metros (m):"));

// console.log("Tu BMI es: " + peso / (altura ** 2))

// Ejercicio 7
// Declarar una variable de nombre cantidadDeVentanas y asignarle la cantidad de ventanas que hay en
// tu casa. Mostrar el valor de la variable por la consola.

// let cantidadDeVentanas

// cantidadDeVentanas = 8

// console.log(cantidadDeVentanas)

// Ejercicio 8
// Declarar una variable de nombre soyHumano y asignarle el valor true (verdadero). Mostrar el valor de
// la variable por la consola

// let soyHumano 

// soyHumano = true

// console.log("Soy humano? " + soyHumano)

// Ejercicio 9
// Declarar una variable de nombre miGustoDePizza y asignarle la variedad de pizza que más te guste
// usando un String (cadena de caracteres). Mostrar el valor de la variable por la consola.

// let miGustoDePizza

// miGustoDePizza = "Provolone"

// console.log(miGustoDePizza)

// Ejercicio 10
// Mostrar por la consola los siguientes valores false, 'Hola', 0 y 'Minions' usando la misma variable.

// let array

// array = [false, "Hola", 0, "Minions"]

// console.log(array)

// Ejercicios 11
// Crear un programa que dado la base y la altura de un triangulo calcule la superficie y el perímetro.

// let altura = parseFloat(prompt("Ingrese la altura en centimetros"))

// let base = parseFloat(prompt("Ingrese la medida de la base en centimetros"))

// let hipotenusa = (base ** 2 + altura ** 2) ** 0.5

// let perimetro = base + altura + hipotenusa

// console.log("La superficie del triangulo es: " + (base * altura) / 2)

// console.log("El perímetro del triángulo es: " + perimetro)

// Ejercicio 12
// Crear un programa que, al pasar los datos del peso de una persona en libras, haga la conversión a
// kilogramos

// let peso = parseFloat(prompt("Ingrese su peso en libras"))

// console.log( "Su peso en kilogramos es: " + peso * 0.453592 + "KG")

// Ejercicio 13
// Crear un programa que al ingresar el sueldo de un trabajador, aplique el 15% de aumento y lo muestre
// en la consola.

// let sueldo = parseFloat(prompt("Ingrese su sueldo"))

// let aumento = sueldo * 0.15

// let sueldofinal = sueldo + aumento

// console.log(sueldofinal)

// Ejercicio 14
// Crear un programa que al ingresar una nota de un alumno, muestre con un alert() si el alumno esta
// “aprobado” (se aprueba con una nota mayor a 7) y “reprobado” en caso contrario

// let nota = parseFloat(prompt("Ingrese su nota"));

// if (nota >= 0 && nota <= 10) {
//     if (nota > 7) {
//         alert("Aprobado!");
//     } else {
//         alert("Reprobado!");
//     }
// } else {
//     alert("Por favor ingrese una nota válida entre 0 y 10.");
// }

// Ejercicio 15
// Crear un programa tal que dado como datos la categoría y el sueldo de un trabajador, calcule el
// aumento correspondiente teniendo en cuenta la siguiente tabla. Mostrar con un Alert() la categoría y
// el nuevo sueldo

// Categoría 1: Aumento del 10%

// Categoría 2: Aumento del 15%

// Categoría 3: Aumento del 20%

// let categoria = parseInt(prompt("Ingrese categoria 1, 2, 3"));

// let sueldo = parseFloat(prompt("Ingrese su sueldo"));

// if (categoria >= 1 && categoria <= 3) {
//     let sueldoaumento;
//     let sueldofinal;

//     if (categoria == 1) {
//         sueldoaumento = sueldo * 0.10;
//         sueldofinal = sueldoaumento + sueldo;
//         alert("Su sueldo con el aumento por categoría 1 es: " + sueldofinal);
//     } else if (categoria == 2) {
//         sueldoaumento = sueldo * 0.15;
//         sueldofinal = sueldoaumento + sueldo;
//         alert("Su sueldo con el aumento por categoría 2 es: " + sueldofinal);
//     } else if (categoria == 3) {
//         sueldoaumento = sueldo * 0.20;
//         sueldofinal = sueldoaumento + sueldo;
//         alert("Su sueldo con el aumento por categoría 3 es: " + sueldofinal);
//     }
// } else {
//     alert("Ingrese una categoría válida");
// }

// Ejercicio 16
// Crear un programa tal que dado como datos la matrícula y 5 calificaciones de un alumno; imprima la
// matricula, el promedio y la palabra “aprobado” si el alumno tiene un promedio mayor o igual que 7, y
// la palabra “no aprobado” en caso contrario

// let matricula = parseInt(prompt("Ingrese su numero de matricula"));

// let nota1 = parseFloat(prompt("Ingrese la primer nota"));

// let nota2 = parseFloat(prompt("Ingrese la segunda nota"));

// let nota3 = parseFloat(prompt("Ingrese la tercer nota"));

// let nota4 = parseFloat(prompt("Ingrese la cuarta nota"));

// let nota5 = parseFloat(prompt("Ingrese la quinta nota"));

// let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5

// if (promedio >= 7){
//     estado = "Aprobado"
// } else if (promedio < 7){
//     estado = "Desaprobado"
// }



// console.log( "Su numero de matricula es: " + matricula + ". Su promedio es: " + promedio +  " y usted esta: " + estado)


// Ejercicio 17
// Dado 3 números enteros, determinar cual de ellos es el mayor, tenga en cuenta que los números
// pueden ser iguales.


// let n1 = parseInt(prompt("Ingrese un numero entero"));

// let n2 = parseInt(prompt("Ingrese otro numero entero"));

// let n3 = parseInt(prompt("Ingrese otro numero entero"));

// if (n1 >= n2 && n1 >= n3){
//     alert("El mayor numero ingresado es: " + n1)
// } else if (n2 >= n1 && n2 >= n3){
//     alert("El mayor numero ingresado es: " + n2)
// } else if (n3 >= n1 && n3 >= n2){
//     alert("El mayor numero ingresado es: " + n3)
// }














