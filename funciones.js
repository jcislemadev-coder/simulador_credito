//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible (ingresos,egresos){
    let saldo = ingresos - egresos
    if (saldo < 0){
        saldo = 0;
    }
    return(saldo)
}

function calcularCapacidadPago (montoDisponible){
    let capacidad = montoDisponible * 0.50;
    return (capacidad)
}

function calcularInteresSimple (monto,tasa,plazoAnios){
    let interes = plazoAnios * monto * (tasa/100);
    return interes;
}

function calcularTotalaPagar (monto , tasa, plazoAnios) {
    let interes = calcularInteresSimple (monto,tasa,plazoAnios);
    let total = interes + monto + 100;

    return total;
}

function calcularCuotaMensual (monto,tasa,plazoAnios){
    let total = calcularTotalaPagar(monto,tasa,plazoAnios)
    let cuota = total / (plazoAnios*12)
    return cuota;

}

function analizarCredito (montoDisponible,monto,tasa,plazaAnios){
    let status ;
    let capacidad = calcularCapacidadPago(montoDisponible);
    let cuota = calcularCuotaMensual(monto,tasa,plazaAnios);

    if (capacidad > cuota){
         status = true;
    }
    else{
        status = false;
    }

    return status;
}