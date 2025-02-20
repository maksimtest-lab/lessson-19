// Работа с Object.entries

// Напишите функцию convertToArray(obj), которая принимает объект и возвращает массив пар [ключ, значение], используя Object.entries().

const obj = {
    name: 'Iphone',
    isLastIphone: true,
    price: 1000,
    address: {
        city: 'Minsk',
        street: 'Lenina'
    }
}

const convertToArray = (obj) => {
    return Object.entries(obj);
}

console.log(convertToArray(obj));