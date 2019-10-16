'use strict'

/*
======================================= If Else Switch Условный оператор | Ternary

1. Какая конструкция устанавливает условие?
    1.1. If:
        if (x > 5) {...
        } else if (x > 50) {...
        } else {...}

    1.2. Switch:
        1.2.1. 
            switch (expression) {
            case value1:
                //Здесь выполняются инструкции, если результат выражения равен value1
                [break;]
            case value2:
                //Инструкции, соответствующие value2
                [break;]
            ...
            case valueN:
                //Инструкции, соответствующие значению valueN
                //statementsN
                [break;]
            default:
                //Здесь находятся инструкции, которые выполняются при отсутствии соответствующего значения
                //statements_def
                [break;]
            }
        1.2.2. Группировка case-ов:
            switch (browser) {
                case 'Edge':
                    alert( "You've got the Edge!" );
                    break;

                case 'Chrome':
                case 'Firefox':
                case 'Safari':
                case 'Opera':
                    alert( 'Okay we support these browsers too' );
                    break;

                default:
                    alert( 'We hope that this page looks ok!' );
}
        1.2.3. Case-условие
            var foo = 1;
            switch (true) { // Постоянное значение true вместо foo
                case foo >= 0 && foo <= 3:
                    alert('yes');
                    break;
                default:
                    alert('not');
            }

    1.3. Условный оператор Ternary operator
        let age = 18
        let accessAllowed = (age > 18) ? true : false;                                             ---> false

        ------------------------------------

        let message = (age < 3) ? 'Здравствуй, малыш!' :
        (age < 18) ? 'Привет!' :
        (age < 100) ? 'Здравствуйте!' :
        'Какой необычный возраст!';

        alert( message );                                                                          ---> 'Здравствуйте!'
            
        ------------------------------------

        let company = 'Google'

        (company == 'Netscape') ? alert('Верно!') : alert('Неправильно.');                         ---> 'Неправильно'
*/
