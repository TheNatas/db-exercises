const getStatesFromDatabase = async () => {
  const res = await fetch('../selectDifferentStates.php');
  const data = await res.json();
  const states = data.map(row => row.estado);
  states.forEach(state => {
    const option = document.createElement('option');
    option.setAttribute('value', state);
    option.textContent = state;
    document.querySelector('#estado-select').appendChild(option);
  });
};

// const getTeamsFromDatabase = async () => {
//   const res = await fetch('../select.php');
//   const data = await res.json();
//   const teams = data.map(row => row.nome);
//   teams.forEach(team => {
//     const option = document.createElement('option');
//     option.setAttribute('value', team);
//     option.textContent = team;
//     document.querySelector('#time-select').appendChild(option);
//   })
// };

const playerForm = document.querySelector('.add-player-container').innerHTML.slice();

const displayNewPlayerForm = (container) => {
  container.innerHTML += playerForm;
};

const displayPlayerForm = function(){
  const container = document.querySelector('.add-player-container');
  container.classList.remove('visually-hidden');
  this.addEventListener('click', () => displayNewPlayerForm(container));
};

const onSubmitHandler = async function(e){
  e.preventDefault();

  const res = await fetch('../connection.php', {
    method: 'POST',
    body: JSON.stringify({
      team_name: this.querySelector('#name').value,
      team_state: this.querySelector('#estado-select').value,
      team_img: this.querySelector('#img-url-input').value,
      players: [...this.querySelectorAll('.add-player-container input')]
        .map(input => input.value)
    })
  });
  const url = await res.json();
  location.replace(url);
};

getStatesFromDatabase();

document.querySelector('#btn-add').addEventListener('click', displayPlayerForm, {once: true});
document.querySelector('.add-player-container input').addEventListener('input', function(e){this.value += e.data});
document.querySelector('form').addEventListener('submit', onSubmitHandler);