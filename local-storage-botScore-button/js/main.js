//Create a button that adds 1 to a botScore stored in localStorage
if(!localStorage.getItem('botScore')){//Checks to see If its not in local storage
  localStorage.setItem('botScore', 0)//Then we create it 
}


document.querySelector('button').addEventListener('click', changeScore)

function changeScore(){
  let botScore = Number(localStorage.getItem('botScore'))
  botScore = botScore + 1
  localStorage.setItem('botScore', botScore)
}
