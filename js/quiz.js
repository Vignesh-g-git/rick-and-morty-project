const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [];
let ccount = 0;
function fun(min, max) {
  const c = Math.floor(Math.random() * (max - min)) + min;
  return c;
}

function shuffle(arr) {
  let len = arr.length;
  const d = len;
  const array = [];
  let k;
  let i;
  for (i = 0; i < d; i++) {
    k = Math.floor(Math.random() * len);
    array.push(arr[k]);
    arr.splice(k, 1);
    len = arr.length;
  }
  for (i = 0; i < d; i++) {
    arr[i] = array[i];
  }
  return arr;
}

for (let i = 1; i <= 10; i++) {
  if (a.length == 1) {
    b.push(a[0]);
    a.pop();
    break;
  }
  const d = fun(1, a.length);
  console.log(d);
  b.push(a[d]);
  a.splice(d, 1);
}

console.log(b);
const question2 = [];
const question = [];
async function getUser(a, i) {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/${a}`);
    question.push(response.data);
    console.log(question);
    question2.push(question[i]);
  } catch (error) {
    console.error(error);
  }
}
let ran = 0;
for (let i = 0; i < 10; i++) {
  switch (b[i]) {
    case 1:
      ran = fun(1, 671);
      getUser(`character/${ran}`, i);
      break;
    case 2:
      ran = fun(1, 20);
      getUser(`character/${ran}`, i);
      break;
    case 3:
      ran = fun(1, 20);
      getUser(`character/${ran}`, i);
      break;
    case 4:
      ran = fun(1, 20);
      getUser(`character/${ran}`, i);
      break;
    case 5:
      ran = fun(10, 100);
      getUser(`character/${ran}`, i);
      break;
    case 6:
      ran = fun(1, 50);
      getUser(`character/${ran}`, i);
      break;
    case 7:
      ran = fun(1, 20);
      getUser(`character/${ran}`, i);
      break;
    case 8:
      ran = fun(1, 20);
      getUser(`character/${ran}`, i);
      break;
    case 9:
      ran = fun(2, 41);
      getUser(`episode/${ran}`, i);
      break;
    case 10:
      ran = fun(1, 108);
      getUser(`character/${ran}`, i);
      console.log(question);
      break;
    default:
      console.log('not working');
  }
}

setTimeout(() => {
  console.log(question[0]);

  for (let i = 0; i < 10; i += 1) {
    if (b[i] === 1) {
      const ch = document.getElementById('question');
      ch.textContent = 'What is the gender of the below character?';
      document
        .getElementById('question-img')
        .setAttribute('src', question[i].image);
      document.getElementById('ans-btn1').innerText = 'male';
      document.getElementById('ans-btn2').innerText = 'female';
      document.getElementById('ans-btn3').innerText = 'genderless';
      document.getElementById('ans-btn4').innerText = 'unknown';
      var hint = document.getElementById('hints');
      hint.addEventListener('click', function (event) {
        hint.innerHTML = `NAME : ${question[i].name} and SPECIES : ${question[i].species}`;
      });
      const ans1 = document.getElementById('ans-btn1');
      const ans2 = document.getElementById('ans-btn2');
      const ans3 = document.getElementById('ans-btn3');
      const ans4 = document.getElementById('ans-btn4');
      ans1.addEventListener('click', function (event) {
        if (question[i].gender === 'Male') {
          console.log(question[i]);
          document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
          document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
          ccount += 1;
        } else if (question[i].gender === 'Female') {
          console.log(question[i]);
          document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
          document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
        } else if (question[i].gender === 'Genderless') {
          console.log(question[i]);
          document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
          document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
        } else if (question[i].gender === 'unknown') {
          console.log(question[i]);
          document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
        }
      });

      ans2.addEventListener('click', function (event) {
        if (question[i].gender === 'Male') {
          console.log(question[i]);
          document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
          document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
        } else if (question[i].gender === 'Female') {
          console.log(question[i]);
          document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
          document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
          ccount += 1;
        } else if (question[i].gender === 'Genderless') {
          console.log(question[i]);
          document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
          document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
        } else if (question[i].gender === 'unknown') {
          console.log(question[i]);
          document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
        }
      });

      ans3.addEventListener('click', function (event) {
        if (question[i].gender === 'Male') {
          console.log(question[i]);
          document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
          document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
        } else if (question[i].gender === 'Female') {
          console.log(question[i]);
          document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
          document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
        } else if (question[i].gender === 'Genderless') {
          console.log(question[i]);
          document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
          document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
          ccount += 1;
        } else if (question[i].gender === 'unknown') {
          console.log(question[i]);
          document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
        }
      });

      ans4.addEventListener('click', function (event) {
        if (question[i].gender === 'Male') {
          console.log(question[i]);
          document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
          document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
        } else if (question[i].gender === 'Female') {
          console.log(question[i]);
          document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
          document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
        } else if (question[i].gender === 'Genderless') {
          console.log(question[i]);
          document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
          document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
        } else if (question[i].gender === 'unknown') {
          console.log(question[i]);
          document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
          document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
          ccount += 1;
        }
      });
    }
    // else if (b[i] == 2) {
    //   const ch = document.getElementById('question');
    //   ch.textContent = 'What is the name of the below character?';
    //   document
    //     .getElementById('question-img')
    //     .setAttribute('src', question[i].image);
    //   var opt = [];
    //   opt.push(question[i]);

    //   let optrand = fun(1, 600);
    //   axios
    //     .get(`https://rickandmortyapi.com/api/character/${optrand}`)
    //     .then(function (response) {
    //       opt.push(response.data);
    //       console.log(opt[1]);
    //     });

    //   optrand = fun(1, 600);
    //   axios
    //     .get(`https://rickandmortyapi.com/api/character/${optrand}`)
    //     .then(function (response1) {
    //       opt.push(response1.data);
    //     })
    //     .catch(function (error) {
    //       // handle error
    //       console.log(error);
    //     })
    //     .then(function () {
    //       // always executed
    //     });

    //   optrand = fun(1, 600);
    //   axios
    //     .get(`https://rickandmortyapi.com/api/character/${optrand}`)
    //     .then(function (response2) {
    //       console.log(response2.data);
    //       opt.push(response2.data);
    //     })
    //     .catch(function (error) {
    //       // handle error
    //       console.log(error);
    //     })
    //     .then(function () {
    //       // always executed
    //     });

    //   // to get random user for options
    //   // async function getUser() {
    //   //   try {
    //   //     let optrand = fun(1, 600);
    //   //     const response1 = await axios.get(
    //   //       `https://rickandmortyapi.com/api/character/${optrand}`
    //   //     );
    //   //     console.log(response1.data);
    //   //     opt.push(response1.data);
    //   //     optrand = fun(1, 600);
    //   //     const response2 = await axios.get(
    //   //       `https://rickandmortyapi.com/api/character/${optrand}`
    //   //     );
    //   //     opt.push(response2.data);
    //   //     console.log(response2.data);
    //   //     optrand = fun(1, 600);
    //   //     const response3 = await axios.get(
    //   //       `https://rickandmortyapi.com/api/character/${optrand}`
    //   //     );
    //   //     opt.push(response3.data);
    //   //     console.log(response3.data);
    //   //   } catch (error) {
    //   //     console.error(error);
    //   //   }
    //   // }
    //   const arr = [1, 2, 3, 4];
    //   const opt2 = shuffle(arr);
    //   console.log(opt);

    //   document.getElementById('ans-btn1').innerText = opt[1].name;
    //   document.getElementById('ans-btn2').innerText = opt[opt2[1]].name;
    //   document.getElementById('ans-btn3').innerText = opt[opt2[2]].name;
    //   document.getElementById('ans-btn4').innerText = opt[opt2[3]].name;
    //   const hint = document.getElementById('hints');
    //   hint.addEventListener('click', function (event) {
    //     hint.innerHTML = `GENDER : ${question[i].gender} and SPECIES : ${question[i].species}`;
    //   });
    //   const ans1 = document.getElementById('ans-btn1');
    //   const ans2 = document.getElementById('ans-btn2');
    //   const ans3 = document.getElementById('ans-btn3');
    //   const ans4 = document.getElementById('ans-btn4');
    //   ans1.addEventListener('click', function (event) {
    //     if (question[i].name === opt[opt2[0]].name) {
    //       console.log(question[i]);
    //       document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
    //       document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    //       ccount += 1;
    //     } else if (question[i].name === opt[opt2[1]].name) {
    //       console.log(question[i]);
    //       document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
    //       document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    //     } else if (question[i].name === opt[opt2[2]].name) {
    //       console.log(question[i]);
    //       document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
    //       document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    //     } else if (question[i].name === opt[opt2[3]].name) {
    //       console.log(question[i]);
    //       document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    //     }
    //   });

    //   ans2.addEventListener('click', function (event) {
    //     if (question[i].name === opt[opt2[0]].name) {
    //       console.log(question[i]);
    //       document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
    //       document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    //     } else if (question[i].name === opt[opt2[1]].name) {
    //       console.log(question[i]);
    //       document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
    //       document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    //       ccount += 1;
    //     } else if (question[i].name === opt[opt2[2]].name) {
    //       console.log(question[i]);
    //       document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
    //       document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    //     } else if (question[i].name === opt[opt2[3]].name) {
    //       console.log(question[i]);
    //       document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    //     }
    //   });

    //   ans3.addEventListener('click', function (event) {
    //     if (question[i].name === opt[opt2[0]].name) {
    //       console.log(question[i]);
    //       document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
    //       document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    //     } else if (question[i].name === opt[opt2[1]].name) {
    //       console.log(question[i]);
    //       document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
    //       document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    //     } else if (question[i].name === opt[opt2[2]].name) {
    //       console.log(question[i]);
    //       document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
    //       document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    //       ccount += 1;
    //     } else if (question[i].name === opt[opt2[3]].name) {
    //       console.log(question[i]);
    //       document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    //     }
    //   });

    //   ans4.addEventListener('click', function (event) {
    //     if (question[i].name === opt[opt2[0]].name) {
    //       console.log(question[i]);
    //       document.getElementById('ans-btn1').style.backgroundColor = '#84ff84';
    //       document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    //     } else if (question[i].name === opt[opt2[1]].name) {
    //       console.log(question[i]);
    //       document.getElementById('ans-btn2').style.backgroundColor = '#84ff84';
    //       document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    //     } else if (question[i].name === opt[opt2[2]].name) {
    //       console.log(question[i]);
    //       document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn3').style.backgroundColor = '#84ff84';
    //       document.getElementById('ans-btn4').style.backgroundColor = '#fc4e4e';
    //     } else if (question[i].name === opt[opt2[3]].name) {
    //       console.log(question[i]);
    //       document.getElementById('ans-btn2').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn1').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn3').style.backgroundColor = '#fc4e4e';
    //       document.getElementById('ans-btn4').style.backgroundColor = '#84ff84';
    //       ccount += 1;
    //     }
    //   });
    // }
  }
}, 2000);

function questions2ask() {}
