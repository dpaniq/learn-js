
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



for (let i = 0; i < 3; i++) {
    let your_exp = prompt('Обязательная статья расходов в этом месяце'),
        your_exp_money = prompt('Во сколько обойдется?');

    if (your_exp != '' && typeof(your_exp) != null &&
        your_exp_money != '' && typeof(your_exp_money) != null &&
        your_exp != null) {
            appData.expenses[your_exp] = your_exp_money;
        }else{
            --i;
            }
            
}

    
    



appData.MoneyPerDay = appData.budget / 30;

console.log(appData);

alert("Эжедневный бюджет: " + appData.MoneyPerDay);

if (appData.MoneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.MoneyPerDay > 100 && appData.MoneyPerDay < 2000){
    console.log('Средний уровень достатка');
} else if (appData.MoneyPerDay > 2000){
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}