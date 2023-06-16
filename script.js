const cards = [...document.querySelectorAll(".card")];

cards.forEach(el => {
  el.addEventListener("mousemove", fCardRotate);
  el.addEventListener("mouseout", fCardDefault);
});

function fCardRotate(ev) {
  this.style.transform = `perspective(2000px) rotatey(${(ev.offsetX - this.offsetWidth / 5) / 11}deg) rotatex(${((ev.offsetY - this.offsetHeight / 5) / 11) * -1}deg)`;
}
function fCardDefault() {
  this.style.transform = ``;
}





function fc1() {
  let answer = document.getElementById('inpu1')
  if (answer.value == 0.25 ) {
    document.getElementById('result1').innerText = 'Ответ верный'
    document.getElementById('result1').style.color = 'green'
  }
  else{
    document.getElementById('result1').innerText = 'Ответ неверный'
    document.getElementById('result1').style.color = 'red'
  }
}


function fc2() {
  let answer = document.getElementById('inpu2')
  if (answer.value == 20  ) {
    document.getElementById('result2').innerText = 'Ответ верный'
    document.getElementById('result2').style.color = 'green'
  }
  else{
    document.getElementById('result2').innerText = 'Ответ неверный'
    document.getElementById('result2').style.color = 'red'
  }
}


function fc3() {
  let answer = document.getElementById('inpu3')
  if (answer.value == 300  ) {
    document.getElementById('result3').innerText = 'Ответ верный'
    document.getElementById('result3').style.color = 'green'
  }
  else{
    document.getElementById('result3').innerText = 'Ответ неверный'
    document.getElementById('result3').style.color = 'red'
  }
}

function fc4() {
  let answer = document.getElementById('inpu4')
  if (answer.value == 300  ) {
    document.getElementById('result4').innerText = 'Ответ верный'
    document.getElementById('result4').style.color = 'green'
  }
  else{
    document.getElementById('result4').innerText = 'Ответ неверный'
    document.getElementById('result4').style.color = 'red'
  }
}


function fc5() {
  let answer = document.getElementById('inpu5')
  if (answer.value == 60  ) {
    document.getElementById('result5').innerText = 'Ответ верный'
    document.getElementById('result5').style.color = 'green'
  }
  else{
    document.getElementById('result5').innerText = 'Ответ неверный'
    document.getElementById('result5').style.color = 'red'
  }
}


function fc6() {
  let answer = document.getElementById('inpu6')
  if (answer.value == 15  ) {
    document.getElementById('result6').innerText = 'Ответ верный'
    document.getElementById('result6').style.color = 'green'
  }
  else{
    document.getElementById('result6').innerText = 'Ответ неверный'
    document.getElementById('result6').style.color = 'red'
  }
}

function fc7() {
  let answer = document.getElementById('inpu7')
  if (answer.value == 3200  ) {
    document.getElementById('result7').innerText = 'Ответ верный'
    document.getElementById('result7').style.color = 'green'
  }
  else{
    document.getElementById('result7').innerText = 'Ответ неверный'
    document.getElementById('result7').style.color = 'red'
  }
}


function fc8() {
  let answer = document.getElementById('inpu8')
  if (answer.value == 20  ) {
    document.getElementById('result8').innerText = 'Ответ верный'
    document.getElementById('result8').style.color = 'green'
  }
  else{
    document.getElementById('result8').innerText = 'Ответ неверный'
    document.getElementById('result8').style.color = 'red'
  }
}

function fc9() {
  let answer = document.getElementById('inpu9')
  if (answer.value == 24  ) {
    document.getElementById('result9').innerText = 'Ответ верный'
    document.getElementById('result9').style.color = 'green'
  }
  else{
    document.getElementById('result9').innerText = 'Ответ неверный'
    document.getElementById('result9').style.color = 'red'
  }
}