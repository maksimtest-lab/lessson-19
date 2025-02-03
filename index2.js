const product = {
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

// Деструктуризация объекта

// Вариант 1
const productName = product.name;
const productPrice = product.price;
const productIsLastIphone = product.isLastIphone;

console.log(productName, productPrice, productIsLastIphone);

// Вариант 2
const {name, price, isLastIphone} = product;

console.log(name, price, isLastIphone);


// Спред операторы
const product2 = {...product}
product2.price = 11111;

console.log(product)
console.log(product2)

// Спред оператор
const {prodName, ...someObj} = product

product2.price = 11111;

console.log(prodName)
console.log(someObj)
