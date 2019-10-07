function first(cb) {
    setTimeout( function(){console.log(1)}, 500);
    cb();
}

function second() {
    console.log(2);
}

first(second);


function learnJS (lang, callback){
    setTimeout(function(){console.log(`Я учу ${lang}`)}, 500);
    callback();
}

x = function () {
    console.log(35+34);
}


learnJS("JavaScript", x);
