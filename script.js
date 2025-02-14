const floatCaroImg = document.querySelectorAll('.float-caro-img');
const pauseBtn = document.getElementById("pause");


const floatCaro = function(){
  let data = {
    isMoving: true,
  }
  function handleFloat () {
    if (data.isMoving) {
      for (let i = 0; i<floatCaroImg.length;i++) {
        if (floatCaroImg[i].x < 0-300) {
          floatCaroImg[i].x = window.screen.width;
        } else {
          //window.screen.width
          console.log(floatCaroImg[i].x)
          floatCaroImg[i].style.transform=`translate(-${window.screen.width}px, 0px)`;
          //${floatCaroImg.x}
        }
      }
    }
  }
  function togglePause () {
    if (data.isMoving == true) {
      for (let i = 0; i<floatCaroImg.length;i++) {
        floatCaroImg[i].style.animationPlayState = 'paused';
      }
      data.isMoving = false;
    } else {
      for (let i = 0; i<floatCaroImg.length;i++) {
        floatCaroImg[i].style.animationPlayState = 'running';
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
  //floatCaro.handleFloat();
}, 1000)

