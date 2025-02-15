//const floatCaroImg = document.querySelectorAll('.slide-anim-img');
const pauseBtn = document.getElementById("pause");
let floatCaroImg = [];
const floatCaroDiv = document.querySelectorAll('.float-caro-div');
const reel = document.querySelectorAll('.reel')[0];
let imageReel = [
  {
    src:"./img/mint-boba.png",
  },
  {
    src:"./img/multi-color.jpg",
  },
  {
    src:"./img/creme-bun.jpg",
  },
  {
    src:"./img/orange-tea.jpg",
  },
  {
    src:"./img/small-coffee.jpg",
  },
]
for (let i = 0; i<imageReel.length;i++) {
  let imgDiv = document.createElement('div');
  let caroImg = document.createElement('img');
  caroImg.classList.add('slide-anim-img');
  caroImg.src=imageReel[i].src;
  caroImg.style.transform=`translate(${i*360}px, 0)`
  imgDiv.appendChild(caroImg);
  imgDiv.classList.add('float-caro-div');
  reel.appendChild(imgDiv);
  floatCaroImg.push(caroImg)
}
const floatCaro = function(){
  let data = {
    isMoving: true,
  }
  //return translate x value
  function calcTransX(element) {
    const style = window.getComputedStyle(element)
    const matrix = style.transform;
    const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');
    return matrixValues[4];
  }
  function handleFloat () {
    if (data.isMoving) {
      for (let i = 0; i<floatCaroImg.length;i++) {
        if (calcTransX(floatCaroImg[i]) < (0-300)) {
          let prev;
          if (i==0) {
            prev = calcTransX(floatCaroImg[floatCaroImg.length-1])+360;
            console.log({
              floatCaro:floatCaroImg[floatCaroImg.length-1],
              calcTransX: prev
            })
          } else {
            prev = calcTransX(floatCaroImg[i-1])+360;
            console.log({
              floatCaro: floatCaroImg[i-1],
              calcTransX: prev
            })
          }
          floatCaroImg[i].style.transform=`translate(${prev}px, 0)`;
        } else {
          floatCaroImg[i].style.transform=`translate(${calcTransX(floatCaroImg[i])-5}px, 0`;
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
}, 1500)

