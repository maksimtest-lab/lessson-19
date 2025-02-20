// Объекты и функции

// Напишите функцию createPerson(name, age), которая возвращает объект с переданными name и age, а также методом sayHello(), который выводит Привет, меня зовут {name}.

createPerson = (name, age) => {
    return {
        name,
        age,
        sayHello() {
            console.log(`Привет, меня зовут ${this.name}`);
        }
    }
}

const user = createPerson('John', 21);
user.sayHello();