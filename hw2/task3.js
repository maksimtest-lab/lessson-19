// Создайте объект, представляющий информацию о покупке в интернет-магазине в следующем формате: {название, цена, количество}. Проверьте, есть ли у объекта свойство "скидка" и выведи соответствующее сообщение на экран.

const purchase = {
    name: 'Iphone',
    price: 1000,
    quantity: 1
};

const hasDiscount = (purchase) => {
    if (purchase.discount) {
        console.log('У объекта есть свойство "скидка"');
    } else {
        console.log('У объекта нет свойства "скидка"');
    }
}

hasDiscount(purchase);
purchase.discount = 10;
hasDiscount(purchase);