// ls - left side
let startBtn = document.getElementById('start'),
    btns = document.body.getElementsByTagName('button'),

    expItems = document.body.getElementsByClassName('expenses-item'),
    ei_1 = expItems[0],
    ei_2 = expItems[1],
    ei_3 = expItems[2],
    ei_4 = expItems[3],
    btnExpenses = btns[0], // Утвердить обязательные расходы

    optExpensesItem = document.body.querySelectorAll('.optionalexpenses-item'),
    btnOptional = btns[1], // Утвердить необязательные расходы

    btnDayBudget   = btns[2]; // Расчет дневного бюджета
    chsIncome      = document.body.querySelector('.choose-income'), // Возможные

    savings_input = document.body.querySelector('.checksavings'),
    summary_input = document.body.querySelector('.choose-sum'),
    percent_input = document.body.querySelector('.choose-percent'),

    // right side
    rstop = document.body.getElementsByClassName('result-table')[0].children,
    budget_value             = rstop[1],
    daybudget_value          = rstop[3],
    level_value              = rstop[5],
    expenses_value           = rstop[7],
    optionalexpenses_value   = rstop[9], 
    income_value             = rstop[11],
    monthsaving_value        = rstop[13],
    yearsavings_value        = rstop[15],

    year_output    = document.body.querySelector('.year-value'),
    month_output   = document.body.querySelector('.month-value'),
    day_output     = document.body.querySelector('.day-value');

// --------------------------------- Start App --------------------------------

let money, time;
let appData = {
    budget: 0,
    timeData: '',
    expenses: {},
    optExpenses: {},
    income: '',
    savings: false}

startBtn.addEventListener('click', function() {
    money = +prompt('Ваш бюджет на месяц?', '50000');
    time  =  prompt('Введите дату в формате YYYY-MM-DD', '2019-10-05');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '0');}

    appData.budget = money;
    budget_value.textContent = appData.budget + ' €';

    appData.timeData = new Date(Date.parse(time));
    year_output.value = appData.timeData.getFullYear();
    month_output.value = appData.timeData.getMonth() + 1;
    day_output.value = appData.timeData.getDay();
})

btnExpenses.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expItems.length; i++) {
        let your_exp = expItems[i].value,
            your_exp_money = expItems[++i].value;

        if (your_exp != '' && typeof(your_exp) != null &&
            your_exp_money != '' && typeof(your_exp_money) != null &&
            your_exp != null) {
                appData.expenses[your_exp] = your_exp_money;
                sum += +your_exp_money;
        } else {
            --i;
        }           
    }
    expenses_value.textContent = sum;
})

btnOptional.addEventListener('click', function() {
    for (let i = 0; i < optExpensesItem.length; i++) {
        if (optExpensesItem[i].value != ''  &&  optExpensesItem[i].value != null) {
                appData.optExpenses[i] = optExpensesItem[i].value;
                optionalexpenses_value.textContent += optExpensesItem[i].value.toUpperCase() + ' ';
        }
    }
})

btnDayBudget.addEventListener('click', function() {
    appData.MoneyPerDay = (appData.budget / 30).toFixed(2);

    if (appData.budget < 100) {
        appData.lvl = 'Минимальный уровень достатка';
    } else if (appData.budget > 100 && appData.budget < 2000){
        appData.lvl = 'Средний уровень достатка';
    } else if (appData.budget > 2000){
        appData.lvl = 'Высокий уровень достатка';
    }
    daybudget_value.textContent = appData.MoneyPerDay + ' €';
    level_value.textContent = appData.lvl;
})

chsIncome.addEventListener('input', function(){
    appData.income = chsIncome.value.split(',');
    income_value.textContent = appData.income.join(' * ');
})

savings_input.addEventListener('click', function() {
    if (appData.savings == false) {
        appData.savings = true;
    } else {
        appData.savings = false;
    }
})

summary_input.addEventListener('input', function() {
    if (appData.savings == true) {
        let save = +summary_input.value,
            percent = +percent_input.value;

        appData.monthIncome = save / 100 / 12 * percent;
        appData.yearIncome = save / 100 * percent;
            
        monthsaving_value.textContent = appData.monthIncome.toFixed(1);
        yearsavings_value.textContent = appData.yearIncome.toFixed(1);
    }
});

percent_input.addEventListener('input', function() {
    if (appData.savings == true) {
        
        let save = +summary_input.value,
            percent = +percent_input.value;

        appData.monthIncome = save / 100 / 12 * percent;
        appData.yearIncome = save / 100 * percent;
            
        monthsaving_value.textContent = appData.monthIncome.toFixed(1);
        yearsavings_value.textContent = appData.yearIncome.toFixed(1);
    }
});

// for (const key in appData) {
//     if (appData.hasOwnProperty(key)) {
//         console.log(appData[key]);
//     }
// }