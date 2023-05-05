//buttons
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonAdd = document.querySelector('.add')
const buttonDecrease = document.querySelector('.decrease')
const buttonTime = document.querySelector('#time')
const buttonReset = document.querySelector('#reset')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let minutes = Number (minutesDisplay.textContent)
let timerTimerOut

//buttons controls
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffeeShop = document.querySelector('.coffeeShop')
const buttonFireHouse = document.querySelector('.fireHouse')

// sounds

function sounds() {

  const buttonPressAudio = new Audio('')

}



////////////////////////////////////////////////////

// function changeColor() {

//     buttonForest.classList.toggle('hide')
//     buttonRain.classList.toggle('hide')
//     buttonCoffeeShop.classList.toggle('hide')
//     buttonFireHouse.classList.toggle('hide')
// }

////////////////////////////////////////////////

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2,"0") 
  secondsDisplay.textContent = String(seconds).padStart(2,"0") 
}

function contador() {
  timerTimerOut = setTimeout(function () {    
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    
    updateTimerDisplay(minutes, 0) 

    if (minutes <= 0) {
      return
    }

    if( seconds <= 0) {
      seconds = 60
    --minutes    
    }
    
    updateTimerDisplay(minutes, String(seconds - 1) )       

    contador()
  }, 1000)  
}

buttonTime.addEventListener('click', function() {

  minutes = prompt('Coloque o tempo?') 

  if (!minutes) {

  }
  updateTimerDisplay(minutes, 0)
}) 

buttonPlay.addEventListener('click', function() {    
  contador() 
})  

buttonStop.addEventListener('click', function() {
  clearTimeout(timerTimerOut)   
})

buttonAdd.addEventListener('click', function() { 
  minutesDisplay.textContent = String(parseInt(minutesDisplay.textContent) + 5).padStart(2, '0')  
        
})

buttonDecrease.addEventListener('click', function() {  
  minutesDisplay.textContent = String(parseInt(minutesDisplay.textContent) - 5).padStart(2, '0') 
            
})

buttonReset.addEventListener('click', function() {   
  updateTimerDisplay(0, 0)          
})






