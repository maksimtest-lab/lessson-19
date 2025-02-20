// Работа с Object.keys

// Напишите функцию getKeys(obj), которая принимает объект и возвращает массив его ключей, используя Object.keys().

const getKeys = (obj) => {
    if (typeof obj !== 'object') {
        return [];
    }

    return Object.keys(obj);
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

console.log(getKeys(obj));
console.log(getKeys(""));
console.log(getKeys(25234));
