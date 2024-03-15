
function convFahrenheit() {
    var cels = document.getElementById("cels").value;
    var result = 0;

    try {
        if (cels == "") {
            throw "Ingrese lo Celsius";
        } else {
            result = cels * 9/5 + 32
            document.getElementById("Fahr").value = parseFloat(result.toFixed(2));
        }
    } catch (error) {
        alert("Error: " + error);    
    } 

}

function convKelvin() {
    var cels = document.getElementById("cels").value;
    var resul = 0;

    try {
        if (cels == "") {
            throw "Ingrese lo Celsius";
        } else {
            cels = Number(cels)
            resul = cels + 273.15;
            document.getElementById("Kelv").value = parseFloat(resul.toFixed(2)); 
        }
    } catch (error) {
        alert("Error: " + error);    
    } 
    
}


///////////////////////

function convMillas() {
    var kil = document.getElementById("kilm").value;
    var result = 0;
    try {
        if (kil == 0) {
            throw "Ingrese los Kilometros";
        } else {
            kil  = Number(kil)
            result =  kil * 0.62;
            document.getElementById("Mill").value = parseFloat(result.toFixed(2));
        }
    } catch (error) {
        alert("Error: " + error);    
    } 
    
}

function convMetros() {
    var kil = document.getElementById("kilm").value;
    var result = 0;

    try {
        if (kil == 0) {
            throw "Ingrese los Kilometros";
        } else {
            kil  = Number(kil)
            result = kil * 1000;
            document.getElementById("Metr").value = parseFloat(result.toFixed(2));
        }
    } catch (error) {
        alert("Error: " + error);    
    } 
}

/////////////////////////////////

function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    try {
    if ((peso > 0.9) && (altura > 0.9) ) {
        
        if (altura >= 100 ) {
            altura = altura/100
            var imc = peso / (altura * altura);
            document.getElementById("resul").value = parseFloat(imc.toFixed(2));
        } else {
            var imc = peso / (altura * altura);
            document.getElementById("resul").value = parseFloat(imc.toFixed(2));        
        }
             
    } else { 
            throw("El peso o la altura no pueden ser menor o igual a cero");
    }    
    } catch (error) {
        alert("Error: " + error);    
    }
}

