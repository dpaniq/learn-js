let money, time;



function start() {
    money = +prompt('Ваш бюджет на месяц?', '0');
    time  =  prompt('Введите дату в формате YYYY-MM-DD', '2019-10-05');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '0');
        
    }
    alert(money);
}


function detectDayBudget() {
    appData.MoneyPerDay = (appData.budget / 30).toFixed(2);
    alert("Эжедневный бюджет: " + appData.MoneyPerDay);
}


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
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
}



function chooseOptExpenses(){
    for (let i = 0; i < 2; i++) {
        let optexp = prompt('Статья необязательных расходов?');
    
        if (optexp != ''  &&  typeof(optexp) != null) {
            if (optexp.length < 50) {
                appData.optExpenses[i] = optexp;
            } else {
                alert('Статья Необ. раходов, должна быть менее 50 символов!')
                --i;
            }
                
        } else {
            --i;
        }
                
    }
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накопления?'),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц вашего депозита:' + appData.monthIncome);
    }
}

function detectLevel() {
    if (appData.MoneyPerDay < 100) {
        appData.lvl = 'Минимальный уровень достатка';
    } else if (appData.MoneyPerDay > 100 && appData.MoneyPerDay < 2000){
        appData.lvl = 'Средний уровень достатка';
    } else if (appData.MoneyPerDay > 2000){
        appData.lvl = 'Высокий уровень достатка';
    } else {
        console.log('Произошла ошибка'); 
    }
}



start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optExpenses: {},
    income: [],
    savings: true
};

detectDayBudget();
chooseExpenses();


chooseOptExpenses();
detectLevel();
checkSavings();
