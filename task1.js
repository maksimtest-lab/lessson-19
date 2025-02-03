const users = {
    user1: {
        name: "John",
        age: 21,
        city: "Москва"
    },
    user2: {
        name: "Игорь",
        age: 18,
        city: "Минск"
    },
    user3: {
        name: "Денис",
        age: 23,
        city: "Москва"
    },
    user4: {
        name: "Ярослав",
        age: 30,
        city: "Бостон"
    },
    user5: {
        name: "Дима",
        age: 25,
        city: "Ростов"
    },
}

const getUsersByAge = (usersObj) => {
    let newUsers = {
        lessThen20: 0,
        moreThen20: 0,
    };

    for (let key in usersObj) {
        let user = usersObj[key];
        if (user.age <= 20) {
            newUsers.lessThen20++;
        } else {
            newUsers.moreThen20++;
        }
    }

    return newUsers;
}

const getUserCities = (usersObj) => {
    let userCities = {};

    for (let key in usersObj) {
        let user = usersObj[key];
        if (user.city in userCities) {
            userCities[user.city]++;
        } else if(user.city) {
            userCities[user.city] = 1;
        }
    }

    return userCities;
}

console.log(users);
console.log(getUsersByAge(users));
console.log(getUserCities(users));
