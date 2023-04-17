let screen = document.querySelector('.input-box');
let buttons = document.querySelectorAll('.button');
let clear = document.querySelector('.clear-btn');
let ans = document.querySelector('.equal-btn');

buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    let value = e.target.dataset.num;
    screen.value += value;
  })
});

ans.addEventListener('click',function(e){
  if(screen.value === "")
  {
    screen.value = "" ;
  }
  else{
    let answer = eval(screen.value);
    screen.value = answer ;
  }
})

clear.addEventListener('click',function(e){
   screen.value = "";
})
