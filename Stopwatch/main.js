
document.querySelector('.js-start-button')
  .addEventListener('click', ()=>{
    startCoundown();
});
document.querySelector('.js-stop-button')
  .addEventListener('click', ()=>{
    stopCountDown();
});
document.querySelector('.js-reset-button')
  .addEventListener('click', ()=>{
    resetButton();
});
let count ={
  seconds: 1,
  minute: 1,
  hour: 1
}
let timer = false
let intervalId;

function startCoundown(){
  if(!timer){
    intervalId = setInterval(() => {
      document.querySelector('.js-sec')
        .innerHTML = `${count.seconds ++}`;
      if(count.seconds > 60){
        count.seconds = 0
        document.querySelector('.js-min')
          .innerHTML = `${count.minute ++}`;
        
      }
      if (count.minute > 60){
        document.querySelector('.js-hr')
          .innerHTML = `${count.hour ++}`
        count.seconds = 0;
        count.minute = 0;
      }
    }, 1000);
    timer = true;
  }
}
function stopCountDown(){
  timer = false;
  clearInterval(intervalId);
}
function resetButton(){
  timer = false
  clearInterval(intervalId);
  document.querySelector('.js-hr')
    .innerHTML = '00'
  document.querySelector('.js-min')
    .innerHTML = '00'
  document.querySelector('.js-sec')
    .innerHTML = '00'
}
