// Объект с вычисляемыми свойствами

// Напишите функцию createCalculator(), которая возвращает объект с методами add(a), subtract(a), multiply(a), divide(a), хранящий текущее значение и умеющий выполнять с ним операции.

const createCalculator = () => {
    let value = 0;

    return {
        add: (a) => value += a,
        subtract: (a) => value -= a,
        multiply: (a) => value *= a,
        divide: (a) => value /= a,
        get: () => value
    }
}

const calculator = createCalculator();

console.log(calculator.add(10));
console.log(calculator.subtract(5));
console.log(calculator.multiply(3));
console.log(calculator.divide(2));
console.log(calculator.get());