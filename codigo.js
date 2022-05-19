let inicio = prompt("¡Bienvenido al calculador de promedio de gol! Para comenzar ingresá SI ")
let goles;
let sumatoria=0;

if ((inicio == "SI") || (inicio == "Si") || (inicio == "Sí") || (inicio == "SÍ") ||(inicio == "si") || (inicio == "sí")) {

for (let i=1; i<=10; i++) {
    let goles=parseInt(prompt("Ingresar goles del partido de la Fecha "+ i));
    console.log("Fecha " + i + ": "+ goles + " goles")
    sumatoria=sumatoria+goles;
}
let promedio=sumatoria/10;
alert ("El promedio de gol en el torneo es "+promedio);
}
else {
    alert ("¡Ok! ¡Hasta la próxima!")
}