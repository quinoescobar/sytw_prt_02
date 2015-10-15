" use strict";

function Medida(val,tip)
{
  this.valor=val;
  this.tipo=tip;
}

Medida.prototype.getTipo = function () {
  return this.tipo;
};
Medida.prototype.getValor = function () {
  return this.valor;
};
Medida.prototype.setTipo = function (arg) {
   this.tipo=arg;
};
Medida.prototype.setValor = function (arg) {
   this.valor=arg;
};

function Temperatura()
{
  Medida.call(this,valor,tipo);
}

Temperatura.prototype= new Medida();

Temperatura.prototype.Celsius = function () {
  //AQUI SE PASA DE Celsius A Farenheit
  //result = (num * 9/5)+32;
  calculado = (this.getValor() * 9/5)+32;
  return calculado;
};

Temperatura.prototype.Farenheit = function () {
  //AQUI SE PASA DE Farenheit A Celsius
};

//ACOMODAR CÓDIGO PARA USAR LOS GETS Y LOS SETS
function calcular() {
  var result;
  var original = document.getElementById("original");
  var temp = original.value;
  // alert(temp);
  // Empiece por - +, pude o no puede
  //Siguiente digito si o si
  //
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;
  var mejorRegex = /(^[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)\s*([fFcC])/;
//poner parentesis sin memoria en xsub2
  var x = temp.match(mejorRegex);

  if (x) {
    var num = x[1];
    var type = x[2];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      //-------toFixed()------------
      // Convert a number into a string, keeping only two decimals:
      // var num = 5.56789;
      // var n = num.toFixed(2);
      //
      // The result of n will be:
      // 5.57
      result = result.toFixed(1)+" Farenheit";
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(1)+" Celsius";
    }
      converted.innerHTML = result;
  }
  else {
      converted.innerHTML = "¡ERROR! Intente con valores correctos [-,+] [Número] [Medida] e.g: '-4.2C' ";
  }
}
