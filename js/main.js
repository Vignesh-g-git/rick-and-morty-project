const source =
  '../audio/Rick and Morty - Evil Morty Theme Song (Feewet Trap Remix) (mp3cut.net).mp3';
const audio = new Audio();
// no event listener needed here
audio.src = source;
audio.autoplay = true;
audio.play();
setTimeout(() => {
  document.getElementById('levitate').style.animation =
    'do-levitation 1.2s alternate ease-in-out infinite';
}, 5000);

// Preloader
$(window).on('load', function () {
  if ($('#preloader').length) {
    $('#preloader')
      .delay(100)
      .fadeOut('slow', function () {
        $(this).remove();
      });
  }
});

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
let selected = 0;

btn1.addEventListener('click', function click(evt) {
  btn1.style.color = 'white';
  btn1.style.backgroundColor = 'black';

  btn2.style.color = 'black';
  btn2.style.backgroundColor = 'white';

  btn3.style.color = 'black';
  btn3.style.backgroundColor = 'white';

  selected = 1;
});

btn2.addEventListener('click', function click(evt) {
  btn1.style.color = 'black';
  btn1.style.backgroundColor = 'white';

  btn2.style.color = 'white';
  btn2.style.backgroundColor = 'black';

  btn3.style.color = 'black';
  btn3.style.backgroundColor = 'white';

  selected = 2;
});

btn3.addEventListener('click', function click(evt) {
  btn1.style.color = 'black';
  btn1.style.backgroundColor = 'white';

  btn2.style.color = 'black';
  btn2.style.backgroundColor = 'white';

  btn3.style.color = 'white';
  btn3.style.backgroundColor = 'black';

  selected = 3;
});

const enter = document.getElementById('spaceship');
enter.addEventListener('click', function click(evt) {
  const name1 = document.getElementById('uname').value;
  if (name1 == '') {
    alert('Please provide a name');
  } else {
    sessionStorage.setItem('name', name1);
    if (selected == 1) {
      sessionStorage.setItem('level', selected);
      console.log(sessionStorage.getItem('name'));
      console.log(sessionStorage.getItem('level'));
    } else if (selected == 2) {
      sessionStorage.setItem('level', selected);
      console.log(sessionStorage.getItem('name'));
      console.log(sessionStorage.getItem('level'));
    } else if (selected == 3) {
      sessionStorage.setItem('level', selected);
      console.log(sessionStorage.getItem('name'));
      console.log(sessionStorage.getItem('level'));
    } else {
      sessionStorage.setItem('level', '1');
      console.log(sessionStorage.getItem('name'));
      console.log(sessionStorage.getItem('level'));
    }
  }
});

const name2 = document.getElementById('uname');
name2.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    const name1 = document.getElementById('uname').value;
    if (name1 == '') {
      alert('Please provide a name');
    } else {
      sessionStorage.setItem('name', name1);
      if (selected == 1) {
        sessionStorage.setItem('level', selected);
        console.log(sessionStorage.getItem('name'));
        console.log(sessionStorage.getItem('level'));
      } else if (selected == 2) {
        sessionStorage.setItem('level', selected);
        console.log(sessionStorage.getItem('name'));
        console.log(sessionStorage.getItem('level'));
      } else if (selected == 3) {
        sessionStorage.setItem('level', selected);
        console.log(sessionStorage.getItem('name'));
        console.log(sessionStorage.getItem('level'));
      } else {
        sessionStorage.setItem('level', '1');
        console.log(sessionStorage.getItem('name'));
        console.log(sessionStorage.getItem('level'));
      }
    }
  }
});
