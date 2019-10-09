// ls - left side
let startCalc = document.getElementById('start');

let expItems = document.body.getElementsByClassName('expenses-item'),
    ei_1 = expItems[0],
    ei_2 = expItems[1],
    ei_3 = expItems[2],
    ei_4 = expItems[3];

let optExpenses = document.body.querySelectorAll('.optionalexpenses-item'),
    oe_1 = optExpenses[0],
    oe_2 = optExpenses[1],
    oe_3 = optExpenses[2];

let savings_output = document.body.querySelector('.checksavings'),
    summary_output = document.body.querySelector('.choose-sum'),
    percent_output = document.body.querySelector('.choose-percent'),
    // right side
    year_output    = document.body.querySelector('.year-value'),
    month_output   = document.body.querySelector('.month-value'),
    day_output     = document.body.querySelector('.day-value');


let btn = document.body.getElementsByTagName('button'),
    btnExpenses = btn[0], // Утвердить обязательные расходы
    btnOptional = btn[1], // Утвердить необязательные расходы
    btnBudget   = btn[2]; // Расчет бюджета

// rs - right side 
let rstop = document.body.getElementsByClassName('result-table')[0].children,
    budguet_value = rstop[1],
    daybudget_vale = rstop[3],
    level_value = rstop[5],
    expenses_value = rstop[7],
    optionalexpenses_value = rstop[9], 
    income_value = rstop[11],
    monthsaving_vlaue = rstop[13],
    yearsavings_value = rstop[15];

let asd = rstop[12];

let rsbot = document.body.getElementsByClassName('time-data')[0].children,
    year_value = rsbot[0],
    month_value = rsbot[1],
    day_value = rsbot[2];

