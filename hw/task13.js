// Работа с Object.values

// Напишите функцию sumValues(obj), которая принимает объект с числовыми значениями и возвращает их сумму, используя Object.values().

const obj = {
    name: 'Iphone',
    isLastIphone: true,
    price: 1000,
    address: {
        city: 'Minsk',
        street: 'Lenina'
    }
}

const obj2 = {
    name: 111,
    isLastIphone: true,
    price: 1000
}

const sumValues = (obj) => {

    if (typeof obj !== 'object') {
        return 0;
    }

    return Object.values(obj).reduce((acc=0, value) => acc + +value, 0);
}

console.log(sumValues(obj));
console.log(sumValues(obj2));