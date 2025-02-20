// Поверхностное клонирование (Object.assign)

// Напишите функцию shallowClone(obj), которая принимает объект и возвращает его поверхностную копию, используя Object.assign().

const obj = {
    name: 'Iphone',
    isLastIphone: true,
    price: 1000,
    address: {
        city: 'Minsk',
        street: 'Lenina'
    }
}

const shallowClone = (obj) => {
    return Object.assign({}, obj);
}

const obj2 = shallowClone(obj);

obj.name = 'Samsung';
console.log(obj);
console.log(obj2);