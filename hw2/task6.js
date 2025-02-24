// Создайте объект, представляющий данные о продажах в разных регионах, в следующем формате: {регион1, регион2, ...}. Каждый регион должен содержать информацию о названии и общей сумме продаж. Напишите функцию, которая преобразует данные о продажах в процентное соотношение от общей суммы и возвращает новый объект с обновлёнными данными.

const salesData = {
    region1: {
        name: 'Region 1',
        sales: 1000
    },
    region2: {
        name: 'Region 2',
        sales: 1500
    },
    region3: {
        name: 'Region 3',
        sales: 800
    }
};

const calculateSalesPercentage = (salesData) => {
    const totalSales = Object.values(salesData).reduce((accumulator, region) => accumulator + region.sales, 0); // 3300

    return Object.entries(salesData).reduce((accumulator, [region, data]) => {
        const percentage = (data.sales / totalSales) * 100;

        return { ...accumulator, [region]: { ...data, salesPercent: percentage } };
    }, {});
};

console.log(salesData);
console.log(calculateSalesPercentage(salesData));