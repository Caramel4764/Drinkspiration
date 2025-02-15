const pauseBtn = document.getElementById("pause");
const dummyReel = document.querySelector('.dummyReel');
let floatCaroDivList = [];
const floatCaroDiv = document.querySelectorAll('.float-caro-div');
const reel = document.querySelectorAll('.reel')[0];
let counter = 0;
let imageReel = [
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
  let animDur = (i+1)*5;
  reel.style.animation = `${animDur}s slide-left linear infinite`
  dummyReel.style.animation = `${animDur}s slide-left linear infinite`
  let imgDiv = document.createElement('div');
  let caroImg = document.createElement('img');
  caroImg.classList.add('slide-anim-img');
  caroImg.src=imageReel[i].src;
  if (counter % 2 == 0) {
    imgDiv.classList.add('float-caro-div-even')
  } else {
    imgDiv.classList.add('float-caro-div-odd')
  }
  let dummyImgDiv = imgDiv.cloneNode(true);
  let dummyCaroImg = caroImg.cloneNode(true);
  counter++;
  dummyImgDiv.appendChild(dummyCaroImg)
  imgDiv.appendChild(caroImg);
  reel.appendChild(imgDiv);
  dummyReel.appendChild(dummyImgDiv)
  floatCaroDivList.push(imgDiv)
  floatCaroDivList.push(dummyImgDiv)
}
const floatCaro = function(){
  let data = {
    isMoving: true,
  }
  function togglePause () {
    if (data.isMoving == true) {
      reel.style.animationPlayState = 'paused';
      dummyReel.style.animationPlayState = 'paused';
      for (let i = 0; i<floatCaroDivList.length; i++) {
        floatCaroDivList[i].style.animationPlayState = 'paused';
      }
      data.isMoving = false;
    } else {
      reel.style.animationPlayState = 'running';
      dummyReel.style.animationPlayState = 'running';
      for (let i = 0; i<floatCaroDivList.length; i++) {
        floatCaroDivList[i].style.animationPlayState = 'running';
      }
      data.isMoving = true;
    }
  }
  return {togglePause}
}()

pauseBtn.addEventListener('click', function() {
  floatCaro.togglePause();
})

