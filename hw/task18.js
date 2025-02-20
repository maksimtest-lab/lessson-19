// Глубокое клонирование с structuredClone

// Используйте structuredClone() для глубокого копирования объекта.

const obj = {
    name: 'Iphone',
    isLastIphone: true,
    price: 1000,
    address: {
        city: 'Minsk',
        street: 'Lenina'
    }
};

const obj2 = structuredClone(obj);
obj2.name = 'Samsung';

console.log(obj);
console.log(obj2);