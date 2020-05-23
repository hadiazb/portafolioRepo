//  Bloque de programación que permite desplegar el menu mobile

const prueba = document.getElementsByClassName('menu');
for (let i = 0; i < prueba.length; i++) {
  var contador = 1;
  prueba[i].onclick = function() {
    test()
  };
}

function test() {
  if (contador === 1) {
    console.log('true');
    document.getElementById('mobile').style.left = '0';
    document.getElementById('mobile').style.top = '0';
    document.getElementById('mobile').style.transition = '1.5s';
    contador = 0;
  } else {
    console.log('false');
    document.getElementById('mobile').style.transition = '1.5s';
    document.getElementById('mobile').style.left = '-100%';
    document.getElementById('mobile').style.top = '-100%';
    contador = 1;
  }
}

