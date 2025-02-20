// Клонирование объекта

// Реализуйте функцию deepClone(obj), которая делает глубокую копию объекта (без structuredClone).

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
    // sayHi: () => {
    //     console.log('Hello Iphone');
    // },
    // increasePrice: () => {
    //     obj.price = obj.price + 10;
    // },
    // length: () => {
    //     return Object.keys(obj).length;
    // },
    address: {
        city: 'Minsk',
        street: 'Lenina'
    }
};

const obj2 = deepClone(obj);
obj2.name = 'Samsung';

console.log(obj, 'Initial obj');
console.log(obj2, 'Cloned obj 2');