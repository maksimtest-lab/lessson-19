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

// obj.copy = obj;

// obj.copy.price = 2000;

obj.data = '2022/10/10';
obj['isLastIphone'] = false;

console.log(obj);
console.log(typeof obj);

delete obj.price;
console.log(obj);
// obj.sayHi();

// obj.increasePrice();
console.log(obj);

// obj.increasePrice();
// console.log(obj);

// ----------------------

let a = 5;
let b = a;

a = 10;

console.log(a, b);

// ----------------------

for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
// console.log(obj.length());

for (let key in "ddddddd") {
    console.log(key);
}

// Клонирование
// Поверхностное клонирование
const obj2 = Object.assign({}, obj);
obj2.price = 2000;

obj2.address.city = 'Madrid';

// console.log(obj, 'Initial obj');
// console.log(obj2, 'Cloned obj');

// Полное клонирование новый подход
const obj3 =  JSON.parse(JSON.stringify(obj));
obj3.address.city = 'Paris';

const obj4 = structuredClone(obj);

obj4.address.city = 'London';

console.log(obj, 'Initial obj');
console.log(obj2, 'Cloned obj 2');
console.log(obj3, 'Cloned obj 3');
console.log(obj4, 'Cloned obj 4');

// Самописное копирование

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

obj5 = deepClone(obj);
console.log(obj4, 'Cloned obj 5');