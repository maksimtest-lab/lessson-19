// Глубокое клонирование (рекурсивный метод)

// Напишите функцию deepClone(obj), которая создает полную (глубокую) копию объекта, включая вложенные объекты.

const deepClone = (obj) => {
    const newObj = {};
    for (let key in obj) {
        if (typeof obj[key] === 'object' && !obj[key]) {
            newObj[key] = deepClone(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

const obj = {
    name: 'Iphone',
    isLastIphone: true,
    price: 1000,
    address: {
        city: 'Minsk',
        street: 'Lenina'
    }
};

const obj2 = deepClone(obj);
obj2.name = 'Samsung';

console.log(obj);
console.log(obj2);