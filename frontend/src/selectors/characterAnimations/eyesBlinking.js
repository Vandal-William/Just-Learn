export function eyesBlinking (){
    setInterval(function() {
        document.querySelector('.eye').style.animation = 'none';
        document.querySelector('.eye + .eye').style.animation = 'none';
      
        setTimeout(function() {
          document.querySelector('.eye').style.animation = 'clignement 1s 1';
          document.querySelector('.eye + .eye').style.animation = 'clignement 1s 1';
        }, 1000);
      }, 10000);
  }