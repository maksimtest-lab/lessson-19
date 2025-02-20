// Поверхностное клонирование (spread оператор)

// Напишите функцию cloneWithSpread(obj), которая делает поверхностную копию объекта, используя оператор ... (spread).

const obj = {
    name: 'Iphone',
    isLastIphone: true,
    price: 1000,
    address: {
        city: 'Minsk',
        street: 'Lenina'
    }
};

const cloneWithSpread = (obj) => {
    return {...obj};
}

const obj2 = cloneWithSpread(obj);
obj2.age = 21;

console.log(obj);
console.log(obj2);