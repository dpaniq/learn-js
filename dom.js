btn = document.getElementsByTagName('button')[0];

console.log(btn);

btn.addEventListener('click', function(){
    console.log(event.type, event.AT_TARGET, event.currentTarget);
    x = event.currentTarget;
    

})

btn.addEventListener('mouseleave', function(){
    console.log(event.type, 'MOUSELEAVEEEEE');})
    
