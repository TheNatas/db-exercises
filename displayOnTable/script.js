const fillTableAsync = async () => {
  const res = await fetch('../select.php');
  const data = await res.json(); 
  data.forEach(row => {
    const newRow = document.createElement('tr');

    const tdCodigo = document.createElement('td');
    const tdNome = document.createElement('td');
    const tdEstado = document.createElement('td');
    const tdImagem = document.createElement('td');

    const img = document.createElement('img');
    img.setAttribute('src', row.url);

    tdCodigo.textContent = row.codigo;
    tdNome.textContent = row.nome;
    tdEstado.textContent = row.estado;
    tdImagem.appendChild(img);

    newRow.appendChild(tdCodigo);
    newRow.appendChild(tdNome);
    newRow.appendChild(tdEstado);
    newRow.appendChild(tdImagem);

    document.querySelector('tbody').appendChild(newRow);
  })
  return document.querySelector('tbody').childNodes;
};

const overlay = document.querySelector('.overlay');
const teamPlayersModal = document.querySelector('.team-players-modal');

const hideTeamPlayers = () => {
  overlay.classList.add('visually-hidden');
  teamPlayersModal.classList.add('visually-hidden');
  teamPlayersModal.querySelector('span').textContent = '';
  teamPlayersModal.querySelector('ul').innerHTML = '';
};

const displayTeamPlayers = (players) => {
  overlay.classList.remove('visually-hidden');
  teamPlayersModal.classList.remove('visually-hidden');
  if (players.length === 0){
    teamPlayersModal.querySelector('span').textContent = 'Não há jogadores desse time';
  }else{
    players.forEach(player => {
      const li = document.createElement('li');
      li.textContent = `${player.id} | ${player.nome} | ${player.codigo_time}`;
      teamPlayersModal.querySelector('ul').appendChild(li);
    });
  }
  overlay.addEventListener('click', hideTeamPlayers);
};

const getTeamPlayersAsync = async function(){
  const res = await fetch('../selectPlayersFromTeam.php', {
    method: 'POST',
    body: JSON.stringify({
      team_code: +this.firstChild.textContent
    })
  });
  const teamPlayers = await res.json();
  displayTeamPlayers(teamPlayers);
};

fillTableAsync()
.then(rows => rows.forEach(row => row.addEventListener('click', getTeamPlayersAsync)));
