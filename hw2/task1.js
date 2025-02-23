// Создайте объект, представляющий информацию о планетах солнечной системы в следующем формате: {название, диаметр, расстояние}. Используя цикл, переберите свойства объекта и выведите информацию о каждой планете на экран.

const planets = {
    Mercury: {
        diameter: 4879,
        distance: 57.9
    },
    Venus: {
        diameter: 12104,
        distance: 108.2
    },
    Earth: {
        diameter: 12756,
        distance: 149.6
    },
    Mars: {
        diameter: 6779,
        distance: 227.9
    },
    Jupiter: {
        diameter: 139820,
        distance: 778.5
    }
}

for (let planet in planets) {
    console.log(`Planet: ${planet}, Diameter: ${planets[planet].diameter} km, Distance: ${planets[planet].distance} million km`);
}