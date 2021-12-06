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
const playersTable = document.querySelector('.team-players-modal table');

const hideTeamPlayers = () => {
  overlay.classList.add('visually-hidden');
  teamPlayersModal.classList.add('visually-hidden');
  teamPlayersModal.querySelector('span').textContent = '';
  teamPlayersModal.querySelector('tbody').innerHTML = '';
};

const displayTeamPlayers = (players) => {
  overlay.classList.remove('visually-hidden');
  teamPlayersModal.classList.remove('visually-hidden');
  playersTable.classList.remove('visually-hidden');

  if (players.length === 0){
    playersTable.classList.add('visually-hidden');
    teamPlayersModal.querySelector('span').textContent = 'Não há jogadores desse time';
  }else{
    players.forEach(player => {
      const tr = document.createElement('tr');
      const tdId = document.createElement('td');
      const tdName = document.createElement('td');
      const tdTeamCode = document.createElement('td');

      tdId.textContent = player.id;
      tdName.textContent = player.nome;
      tdTeamCode.textContent = player.codigo_time;

      tr.appendChild(tdId);
      tr.appendChild(tdName);
      tr.appendChild(tdTeamCode);

      teamPlayersModal.querySelector('tbody').appendChild(tr);
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
