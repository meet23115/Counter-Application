const counter = document.getElementById("counter");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");

plus.addEventListener('click', () => {
    counter.innerHTML++;
    changeColor();
});

minus.addEventListener('click', () => {
    counter.innerHTML--;
    changeColor();
});

reset.addEventListener('click', () => {
    counter.innerHTML = 0;
    changeColor();
});

function changeColor(){
    if(counter.innerHTML > 0){
        counter.style.color = "#49a81c";
    }
    else if(counter.innerHTML < 0){
        counter.style.color = "#d16a26";
    }
    else{
        counter.style.color = "#000000"
    }
}