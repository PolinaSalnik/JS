var surname;
var name;
var fathername;
var group;

function getSurname (surname) {
  return prompt('Введите фамилию');
}

function getName (name) {
  return prompt('Введите имя');
}

function getFathername (fathername) {
  return prompt('Введите отчество');
}

function getGroup (group) {
  return prompt('Введите номер группы');
}

var hw = '*' + 'Домашняя работа: «Функции»' + '*';
var author = '*' + 'Выполнил: студент гр.' + ' ' + getGroup (group) + '*';
var info = '*' + getSurname(surname) + ' ' + getName (name) + ' ' + getFathername (fathername) + '*';

function getSpace (){
  if (hw.length > author.length){
    console.log ('*'.repeat(hw.length));
  }
  else if (author.length > info.length){
    console.log ('*'.repeat(author.length));
  }
  else if (info.length > author.length){
    console.log ('*'.repeat(info.length));
  }
}

getSpace();
console.log(hw);
console.log(author);
console.log(info);
getSpace();