// Напишите функцию calculateTotal, которая принимает объект, представляющий информацию о товаре в следующем формате: {название, цена, количество}. Функция должна вычислить общую стоимость товара (цена * количество) и вернуть её.

const calculateTotal = (obj) => {
    return obj.price * obj.quantity;
}

const purchase = {
    name: 'Iphone',
    price: 1000,
    quantity: 1,
};

const purchase2 = {
    name: 'Iphone',
    price: 1000,
    quantity: 4,
};

console.log(calculateTotal(purchase));
console.log(calculateTotal(purchase2));