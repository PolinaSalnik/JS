var s = 2000000;
var p = 0.1;
var years = 5;

var mesSrok = years*12;
var mesStavka = p/12;

var mesPlatez = s* ((mesStavka * Math.pow(1  + mesStavka, mesSrok))/(Math.pow(1  + mesStavka, mesSrok) - 1));

var Pereplata = mesSrok*mesPlatez - s;
var PereplataMln = Pereplata;
console.log(Pereplata);

