let money = +prompt('Ваш бюджет на месяц?', '0'),
    time  =  prompt('Введите дату в формате YYYY-MM-DD', '2019-10-05');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    oExpenses: {},
    income: [],
    savings: false

};

appData.expenses[prompt('Обязательная статья расходов в этом месяце')] = prompt('Во сколько обойдется?');
// appData.expenses[prompt('Обязательная статья расходов в этом месяце')] = prompt('Во сколько обойдется?');

alert(appData.budget / 30);

console.log(appData);

