//Pre entrega 1 - curso Javascript - Rebeca Pansa

function calcular (){

    let numero = parseInt(prompt("Ingrese un numero"));
    console.log("Tabla de Multiplicar del " + numero + ":" );

    for (let i=0; i<= 10; i++){

    let resultado = numero * i;
    console.log(numero + "x" + i + "=" + resultado);

    if(resultado %2 === 0){
        console.log("El numero es par");
    }else {console.log("El numero es impar");}
}
}
calcular();