// Создайте массив, содержащий информацию о книге в следующем формате: [название, автор, год издания]. Используя деструктуризацию, извлеките значения из массива и присвойте их переменным с соответствующими именами. Выведите эти значения на экран.

const book = ['Алиса в Стране чудес', 'Льюис Кэрролл', 1865, 'https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B8%D1%81%D0%B0_%D0%B2_%D0%A1%D1%82%D1%80%D0%B0%D0%BD%D0%B5_%D1%87%D1%83%D0%B4%D0%B5%D1%81'];

const [title, author, year, link] = book;

console.log(title, author, year);