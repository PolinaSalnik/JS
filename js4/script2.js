function createTriangle(symbols, spaces) {
    prompt()
    var symbols = 1;
    for (i = 1; i <= height; i++) {
    var spaces = height - i;
    }
  
    console.log(' '.repeat(spaces) + '*'.repeat(symbols) + ' '.repeat(spaces))
    symbols = symbols + 2;
}

function createTriangleViceVersa(symbols, spaces) {
    prompt()
    var symbols = 1;
    for (i = 1; i <= height; i++) {
    var spaces = height - i;
    }
  
    console.log(' '.repeat(spaces) + '*'.repeat(symbols) + ' '.repeat(spaces))
    symbols = symbols + 2;
}








/* Напишите ф-цию, которая рисует равнобедренный треугольник из звездочек:
*
***
*****
*******
*********
Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-цию, но
которая выведет перевернутый треугольник.
 */

 /* var height = window.prompt('Height: ');
var symbols = 1;
for (i = 1; i <= height; i++) {
    var spaces = height - i;
    console.log(' '.repeat(spaces) + '^'.repeat(symbols) + ' '.repeat(spaces)) 
    symbols = symbols + 2;
} */