// Счетчик с объектом

// Создайте объект counter с методами increment(), decrement() и getCount(), который хранит и изменяет свое значение.

const counter = {
    count: 0,
    increment() {
        this.count++;
    },
    decrement() {
        this.count--;
    },
    getCount() {
        return this.count;
    }
};

counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());