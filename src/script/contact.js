const body = document.querySelector('body')

body.onload = function() {
  const flag = window.matchMedia('screen and (max-width:900px)');
  console.log(flag.matches);
  
  if (flag.matches) {
    document.getElementById('informationOne').innerHTML = '';
    document.getElementById('informationTwo').innerHTML = '';
    document.getElementById('informationThree').innerHTML = '';
    document.getElementById('informationFour').innerHTML = '';
    
  } else {
    document.getElementById('informationOne').innerHTML = 'Lorem, ipsum dolor sit amet, Lorem, ipsum dolor sit amet, Lorem, ipsum dolor sit amet';
    document.getElementById('informationTwo').innerHTML = 'Lorem, ipsum dolor sit amet, Lorem, ipsum dolor sit amet, Lorem, ipsum dolor sit amet';
    document.getElementById('informationThree').innerHTML = 'Lorem, ipsum dolor sit amet, Lorem, ipsum dolor sit amet, Lorem, ipsum dolor sit amet';
    document.getElementById('informationFour').innerHTML = 'Lorem, ipsum dolor sit amet, Lorem, ipsum dolor sit amet, Lorem, ipsum dolor sit amet';
  }
}

