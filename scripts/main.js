const myHeading = document.querySelector('h1');
myHeading.textContent = '全国高校サッカー選手権　2002-2022';


const championBtn = document.querySelector('.championBtn');
championBtn.addEventListener('click',goChampion);

const goalBtn = document.querySelector('.goalBtn');
goalBtn.addEventListener('click',goGoal);

const mvpBtn = document.querySelector('.mvpBtn');
mvpBtn.addEventListener('click',goMvp);

function goChampion(){
    window.location.href = 'champion.html';
}

function goGoal(){
    window.location.href = 'goal.html';
}

function goMvp(){
    window.location.href = 'mvp.html';
}

var select = document.getElementById('year');

select.onchange = function(){
  alert(this.value);
}