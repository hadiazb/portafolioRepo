const flag = window.matchMedia('screen and (min-width:500px)');

flag.addListener(event);

function event(event) {
  if (event.matches) {
    console.log(flag.matches);
    document.getElementById('contact').style.display = 'none';
    document.getElementById('sobremy').style.padding = '50px 20px 0 20px' ;
    document.getElementById('contenedor').style.display = 'flex';

  } else {
    console.log(flag.matches);
    document.getElementById('contact').style.display = 'block'
    document.getElementById('sobremy').style.padding = '250px 20px 0 20px' ;
    document.getElementById('contenedor').style.display = 'none';


  }
}
