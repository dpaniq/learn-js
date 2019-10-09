// let money, time;

// function start() {
//     money = +prompt('Ваш бюджет на месяц?', '50000');
//     time  =  prompt('Введите дату в формате YYYY-MM-DD', '2019-10-05');

//     while(isNaN(money) || money == '' || money == null) {
//         money = +prompt('Ваш бюджет на месяц?', '0');
        
//     }
// }


// start();

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optExpenses: {},
//     income: [],
//     savings: true,
//     // ---------------------------------------------------------------------------------------------------------
//     chooseExpenses: function() {
//         for (let i = 0; i < 2; i++) {
//             let your_exp = prompt('Обязательная статья расходов в этом месяце', 'car'),
//                 your_exp_money = prompt('Во сколько обойдется?', '12332');
        
//             if (your_exp != '' && typeof(your_exp) != null &&
//                 your_exp_money != '' && typeof(your_exp_money) != null &&
//                 your_exp != null) {
//                     appData.expenses[your_exp] = your_exp_money;
//             } else {
//                 --i;
//             }           
//         }
//     },

//     detectDayBudget: function() {
//         appData.MoneyPerDay = (appData.budget / 30).toFixed(2);
//         alert("Эжедневный бюджет: " + appData.MoneyPerDay);
//     },

//     chooseOptExpenses: function() {
//         for (let i = 0; i < 2; i++) {
//             let optexp = prompt('Статья необязательных расходов?', 'rent');
        
//             if (optexp != ''  &&  optexp != null) {
//                 if (optexp.length < 50) {
//                     appData.optExpenses[i] = optexp;
//                 } else {
//                     alert('Статья Необ. раходов, должна быть менее 50 символов!', 'rent')
//                     --i;
//                 }
                    
//             } else {
//                 --i;
//             }
                    
//         }
//     },

//     detectLevel: function () {
//         if (appData.MoneyPerDay < 100) {
//             appData.lvl = 'Минимальный уровень достатка';
//         } else if (appData.MoneyPerDay > 100 && appData.MoneyPerDay < 2000){
//             appData.lvl = 'Средний уровень достатка';
//         } else if (appData.MoneyPerDay > 2000){
//             appData.lvl = 'Высокий уровень достатка';
//         } else {
//             console.log('Произошла ошибка'); 
//         }
//     },

//     checkSavings: function() {
//         if (appData.savings == true) {
//             let save = +prompt('Какова сумма накопления?', '2000'),
//                 percent = +prompt('Под какой процент?', '2.5');
    
//             appData.monthIncome = save / 100 / 12 * percent;
//             alert('Доход в месяц вашего депозита: ' + appData.monthIncome);
//         }
//     },

//     chooseIncome: function() {
//         let items = prompt('Что принесет дополнительный доход? (Перечистлите через запятую)', '');
//         while (!items || items == '') {
//             items = prompt('Доп. доход? (Перечистлите через запятую)', 'fishing, football, swimming');
//         } 
//         appData.income = items.split(', ');
//         appData.income.forEach(function(el, idx){
//             alert(`${idx+1} cпособ дополнительного заработка: ${el}`)            
//         });
//     }
// };

// appData.detectDayBudget();
// appData.chooseExpenses();
// appData.chooseOptExpenses();
// appData.detectLevel();
// appData.checkSavings();
// appData.chooseIncome();


// for (const key in appData) {
//     if (appData.hasOwnProperty(key)) {
//         console.log(appData[key]);
//     }
// }

