const floatCaroImg = document.querySelectorAll('.slide-anim-img');
const pauseBtn = document.getElementById("pause");
const floatCaroDiv = document.querySelectorAll('.float-caro-div');

for (let i = 0; i<floatCaroImg.length;i++) {
  floatCaroImg[i].style.left=`${i*360}px`
}
const floatCaro = function(){
  let data = {
    isMoving: true,
  }
  function handleFloat () {
    if (data.isMoving) {
      for (let i = 0; i<floatCaroImg.length;i++) {
        if (parseInt(floatCaroImg[i].style.left,10) < (0-300)) {
          let prev;
          if (i==0) {
            prev = parseInt(floatCaroImg[floatCaroImg.length-1].style.left,10)+360;
          } else {
            prev = parseInt(floatCaroImg[i-1].style.left,10)+360;
          }
          floatCaroImg[i].style.left=`${prev}px`;
        } else {
          floatCaroImg[i].style.left=`${parseInt(floatCaroImg[i].style.left, 10)-1}px`;
        }
      }
    }
  }
  function togglePause () {
    if (data.isMoving == true) {
      for (let i = 0; i<floatCaroDiv.length;i++) {
        floatCaroDiv[i].style.animationPlayState = 'paused';
      }
      data.isMoving = false;
    } else {
      for (let i = 0; i<floatCaroDiv.length;i++) {
        floatCaroDiv[i].style.animationPlayState = 'running';
      }
      data.isMoving = true;
    }
  }
  return {handleFloat, togglePause}
}()

pauseBtn.addEventListener('click', function() {
  floatCaro.togglePause();
})
setInterval(function(){
  floatCaro.handleFloat();
}, 15)

