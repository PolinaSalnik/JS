var name = prompt('Ваше имя', '');

var login = prompt('Введите логин', 'admin');

var pass = prompt('Ваш пароль', 'nimda');

if (login == 'admin' && pass == 'nimda') {
    alert('Добро пожаловать, ' + name + ' Вы успешно вошли на сайт!');
} else {
    alert(name + ' , Вы неверно ввели логин или пароль!');
}
