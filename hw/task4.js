// Проверка существования свойства

// Напишите функцию hasProperty(obj, key), которая проверяет, есть ли в объекте obj свойство key.

const hasProperty = (obj, key) => {
    return key in obj;
}

console.log(hasProperty(user, 'name'));
console.log(hasProperty(user, 'age'));
console.log(hasProperty(user, 'isTeacher'));