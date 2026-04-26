//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){
    let cmpingresos = document.getElementById("txtIngresos");
    let ingresossrc = cmpingresos.value;
    let ingresosFloat = parseFloat (ingresossrc);

    let cmpegresos = document.getElementById("txtEgresos");
    let egresossrc = cmpegresos.value;
    let egresosFloat = parseFloat (egresossrc);

    let saldof = calcularDisponible(ingresosFloat , egresosFloat);

    let disponiblespn = document.getElementById("spnDisponible")
    disponiblespn.textContent = saldof;

    let capacidadpago = calcularCapacidadPago(saldof);

    let spncapacidad = document.getElementById("spnCapacidadPago")
    spncapacidad.textContent = capacidadpago;

    let cmpmonto = document.getElementById("txtMonto");
    let cmpplazo = document.getElementById("txtPlazo");
    let cmptasa = document.getElementById("txtTasaInteres");

    let montosrc = cmpmonto.value;
    let montoE = parseInt(montosrc);

    let plazosrc = cmpplazo.value;
    let plazoE = parseInt(plazosrc);

    let tasasrc = cmptasa.value;
    let tasaE = parseInt(tasasrc);

    let interesc = calcularInteresSimple(montoE , tasaE , plazoE);

    let spninteres = document.getElementById("spnInteresPagar");
    spninteres.textContent = interesc;

    let total = calcularTotalaPagar(montoE,tasaE,plazoE);

    let totalprestamosrc= document.getElementById("spnTotalPrestamo")
    totalprestamosrc.textContent = total;

    let cuota =  calcularCuotaMensual(montoE, tasaE, plazoE);

    let cuotasrc = document.getElementById("spnCuotaMensual");
    cuotasrc.textContent = cuota;

    let analizar = analizarCredito(saldof , montoE, tasaE, plazoE)
    let status= document.getElementById("spnEstadoCredito");

    
}