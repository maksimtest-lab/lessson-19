// Напишите функцию, которая возвращает массив имен пользователей, возраст которых больше 21.

const users = [
    createPerson('John', 21),
    createPerson('John2', 19),
    createPerson('John3', 20),
    createPerson('John4', 30),
    createPerson('John5', 40),
    createPerson('John6', 46)
]

findUsersWhereAgeMoreThen = (users, age) => {
    return users.filter(user => user.age > age);
}

console.log(findUsersWhereAgeMoreThen(users, 21));
