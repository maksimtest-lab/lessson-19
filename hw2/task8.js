// Напишите функцию, которая принимает строку и проверяет, является ли она палиндромом (читается одинаково слева направо и справа налево). Используйте объект для хранения символов строки и сравните символы поочередно, начиная с первого и последнего символов.

const isPalindrome = (str) => {
    const chars = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        chars[char] = chars[char] ? chars[char] + 1 : 1;
    }

    let first = 0;
    let last = str.length - 1;

    while (first < last) {
        if (str[first] !== str[last]) return false;
        if (chars[str[first]] === 1) delete chars[str[first]];
        else chars[str[first]]--;

        first++;
        last--;
    }

    return true;
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hellohello')); // false
console.log(isPalindrome('elelelel')); // false
console.log(isPalindrome('ollllllo')); // true
