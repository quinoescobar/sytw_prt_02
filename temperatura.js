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
  Medida.call(valor,tipo);
}

Temperatura.prototype= new Medida();



function calcular()
{

}
