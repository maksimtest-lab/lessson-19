// Поиск самого длинного ключа

// Напишите функцию, которая принимает объект и возвращает ключ с самым длинным названием.

findLongestKey = (obj) => {
    let longestKey = '';
    for (let key in obj) {
        if (key.length > longestKey.length) {
            longestKey = key;
        }
    }
    return longestKey;
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

console.log(findLongestKey(obj));