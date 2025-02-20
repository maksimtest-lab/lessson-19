// Клонирование с JSON (JSON.parse(JSON.stringify()))

// Напишите функцию cloneWithJSON(obj), которая клонирует объект с помощью JSON.stringify() и JSON.parse().

const cloneWithJSON = (obj) => {
    return JSON.parse(JSON.stringify(obj));
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

const obj2 = cloneWithJSON(obj);
obj2.name = 'Samsung';

console.log(obj);
console.log(obj2);