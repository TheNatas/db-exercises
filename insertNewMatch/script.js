fetch('../select.php')
  .then(res => res.json())
  .then(data => data.forEach(row => {
    const homeOption = document.createElement('option');
    const awayOption = document.createElement('option');

    homeOption.setAttribute('value', row.nome);
    homeOption.textContent = `${row.nome} - ${row.estado}`;

    awayOption.setAttribute('value', row.nome);
    awayOption.textContent = `${row.nome} - ${row.estado}`;

    document.querySelector('#home-team').appendChild(homeOption);
    document.querySelector('#away-team').appendChild(awayOption);
  }));