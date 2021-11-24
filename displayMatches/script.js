const deleteMatch = async function(e){ // TODO
  const matchRow = this.parentNode.parentNode.childNodes;
  
  await fetch('../deleteMatch.php', {
    method: 'POST',
    body: JSON.stringify({data: matchRow[0].innerText}),
  });
  location.reload();
};

const displayOnTable = data => {
  document.querySelector('tbody').innerHTML = '';
  data.forEach(row => {
    const tr = document.createElement('tr');

    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'x';
    btnDelete.classList.add('btn');
    btnDelete.classList.add('btn-danger');
    btnDelete.addEventListener('click', deleteMatch);

    const tdDate = document.createElement('td');
    const tdHomeTeam = document.createElement('td');
    const tdHomeTeamGoals = document.createElement('td');
    const tdX = document.createElement('td');
    const tdAwayTeamGoals = document.createElement('td');
    const tdAwayTeam = document.createElement('td');
    const tdDelete = document.createElement('td');

    tdDate.textContent = row.data;
    tdHomeTeam.textContent = row.time_mandante;
    tdHomeTeamGoals.textContent = row.gols_time_mandante;
    tdX.textContent = 'x';
    tdAwayTeamGoals.textContent = row.gols_time_visitante;
    tdAwayTeam.textContent = row.time_visitante;
    tdDelete.appendChild(btnDelete);

    tr.appendChild(tdDate);
    tr.appendChild(tdHomeTeam);
    tr.appendChild(tdHomeTeamGoals);
    tr.appendChild(tdX);
    tr.appendChild(tdAwayTeamGoals);
    tr.appendChild(tdAwayTeam);
    tr.appendChild(tdDelete);

    document.querySelector('tbody').appendChild(tr);
})};


const filter = async function(e){
  e.preventDefault();
  const reqBody = {
    initial_datetime: this.querySelector('#initial-datetime').value,
    final_datetime: this.querySelector('#final-datetime').value
  }

  const res = await fetch('../selectFilteredMatches.php', {
    method: 'POST',
    body: JSON.stringify(reqBody),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  const data = await res.json();
  displayOnTable(data);
};

fetch('../selectMatches.php')
  .then(res => res.json())
  .then(displayOnTable);

document.querySelector('form').addEventListener('submit', filter);