let decrease = document.getElementById('Decrease');
let Rest = document.getElementById('Rest');
let Increase = document.getElementById('Increase');
let counter = document.getElementById('counter');

Increase.addEventListener('click',()=>{
    counter.innerText= +counter.innerText+1;
    check(counter)
})

decrease.addEventListener('click',()=>{
    counter.innerText= +counter.innerText- 1;
    check(counter)
})

Rest.addEventListener('click',()=>{
    counter.innerText= 0;
    check(counter)
})

function check(x){
    if(+x.innerText > 0){
        x.style.color="yellow"
    }
    else if(+x.innerText < 0){
        x.style.color="red"
    }else{
        x.style.color="black"
    }
}

