// Объединение объектов

// Напишите функцию mergeObjects(obj1, obj2), которая объединяет два объекта и возвращает новый.


const mergeObjects = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

const obj1 = {
    name: 'John'
};

const obj2 = {
    age: 21
};

console.log(mergeObjects(obj1, obj2));