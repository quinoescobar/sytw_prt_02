" use strict";

function Medida(val,tip)
{
  this.valor=val;
  this.tipo=tip;

}


function Temperatura()
{
  Medida.call(valor,tipo);
}

Temperatura.prototype= new Medida();



function calcular()
{

}
