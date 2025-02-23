// Создайте объект, представляющий информацию о книге в следующем формате: {название, автор, год}. Добавьте новое свойство "жанр" и присвойте ему значение. Затем измените значение свойства "год".

const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1924,
};

console.log(book);
book.genre = 'Tragedy'
book.year = 1925;
console.log(book);