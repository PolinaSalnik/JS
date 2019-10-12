var height = window.prompt('Height: ');
var symbols = 1;
for (i = 1; i <= height; i++) {
    var spaces = height - i;
    console.log(' '.repeat(spaces) + '^'.repeat(symbols) + ' '.repeat(spaces)) 
    symbols = symbols + 2;
}