import { Controls } from "./controls.js" 
import { Timer } from  "./timer.js"
import { elements } from "./elements.js"
import Sound from "./sounds.js"


const {
  buttonPause,
  buttonPlay, 
  buttonSet,
  buttonStop,
  buttonMinus,
  buttonPlus,
  minutesDisplay,
  secondsDisplay,
  buttonCloudy,
  buttonCoffee,
  buttonFlame,
  buttonForest,
 

}  = elements

const sound = Sound()

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})
const timer = Timer({
  secondsDisplay,
  minutesDisplay,
  resetControls: controls.reset,

})

buttonForest.addEventListener('click', function(){
  buttonForest.classList.toggle('on')
  buttonFlame.classList.remove('on')
  buttonCloudy.classList.remove('on')
  buttonCoffee.classList.remove('on')
  sound.forestMusicOn()
})

buttonCloudy.addEventListener('click', function(){
  buttonCloudy.classList.toggle('on')
  buttonFlame.classList.remove('on')
  buttonForest.classList.remove('on')
  buttonCoffee.classList.remove('on')
  sound.cloudyMusicOn()
})



buttonFlame.addEventListener('click', function(){
  buttonFlame.classList.toggle('on')
  buttonForest.classList.remove('on')
  buttonCloudy.classList.remove('on')
  buttonCoffee.classList.remove('on')
  sound.flameMusicOn()
})


buttonCoffee.addEventListener('click', function(){
  buttonCoffee.classList.toggle('on')
  buttonFlame.classList.remove('on')
  buttonCloudy.classList.remove('on')
  buttonForest.classList.remove('on')
  sound.coffeeMusicOn()
})

buttonPlay.addEventListener('click', function(){
  controls.play()
  timer.countdown()
  sound.pressButton()
})
buttonStop.addEventListener('click', function(){
  controls.reset()
  timer.reset()
  sound.pressButton()
})
buttonPause.addEventListener('click', function(){
  controls.pause()
  timer.hold()
  sound.pressButton()

})
buttonSet.addEventListener('click', function(){
  let newMinutes = controls.getMinutes()
  if(!newMinutes) {
    timer.reset()
    return 
  }
  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})

buttonMinus.addEventListener('click', function(){
  timer.minusMinutes()
})
buttonPlus.addEventListener('click', function(){
  timer.plusMinutes()
})