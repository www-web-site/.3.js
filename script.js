alert('Hozir random sonlar chiqadi');
const randomNum = Math.round((Math.random() * 51) * 2);
alert (`Random son ${randomNum}`);
alert (`Random son ikkiga kopaytirildi: ${randomNum *  2} Random son ikkiga bolindi ${randomNum / 2}`)

const first = +prompt('введите первое число:');
const second = +prompt('введите второе число:');
alert(`Сумма чисел ${first} и ${second} равна ${first + second}`)
alert(`Разность чисел ${first} и ${second} равна ${first - second}`)
alert(`Произведение чисел ${first} и ${second} равно ${first * second}`)
alert(`Частное чисел ${first} и ${second} равно ${first / second}`)