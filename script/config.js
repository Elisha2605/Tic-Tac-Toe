
function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;  // getting the data-playerid value = "1" or "2"
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  errorsOutputElement.textContent = '';
  formElement.firstElementChild.lastElementChild.value = ''; // just for pratice - better use getElementById
  
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get('playername').trim(); // '    ' => ''
  
  if(!enteredPlayername) { // enteredPlayername === ''
    event.target.firstElementChild.classList.add('error')
    errorsOutputElement.textContent = 'Please enter a valid name!'
    return;
  }

  const updatedPlayerElement = document.getElementById('player-' + editedPlayer + '-data'); //id="player-1/2-data" dynamic
  updatedPlayerElement.children[1].textContent = enteredPlayername;     //<h3>
  
  players[editedPlayer - 1].name = enteredPlayername;  //(1-1 = 0 or 2 - 1 = 1)

  closePlayerConfig();
}