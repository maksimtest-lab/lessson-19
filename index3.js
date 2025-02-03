const obj = {
    name: 'Iphone',
    isLastIphone: true,
    price: 1000,
    // sayHi: () => {
    //     console.log('Hello Iphone');
    // },
    increasePrice: () => {
        obj.price = obj.price + 10;
    },
    // length: () => {
    //     return Object.keys(obj).length;
    // },
    address: {
        city: 'Minsk',
        street: 'Lenina'
    }
};

console.log(obj);

obj.increasePrice();

console.log(obj);
