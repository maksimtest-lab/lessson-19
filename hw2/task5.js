// Создайте объект, представляющий статистику посещений веб-сайта, в следующем формате: {посетители, просмотры}.

// Пример объекта (советуем не повторять точь-в-точь для понимания):

// let obj = {
//   movies: {
//     guests: 500,
//     views: 200,
//   },
//   pictures: {
//     guests: 200,
//     views: 50,
//   },
// }

const statistics = {
    animation: {
        visitors: 345,
        views: 112,
    },
    series: {
        visitors: 423,
        views: 78,
    },
}

// Каждая категория должна содержать информацию о количестве за определенный период времени. Напишите функцию, которая вычисляет общее количество посетителей и просмотров веб-сайта за указанный период.

// Если передаётся количество дней, например, 3, то забирается количество просмотров в день и умножается на 3.

const getVisitorsAndViews = (obj, period) => {
    let visitors = 0;
    let views = 0;
    for (let key in obj) {
        visitors += obj[key].visitors;
        views += obj[key].views;
    }
    if (typeof period === 'number') {
        visitors *= period;
        views *= period;
    }
    return { visitors, views };
}

console.log(getVisitorsAndViews(statistics));
console.log(getVisitorsAndViews(statistics, 1));
console.log(getVisitorsAndViews(statistics, 3));