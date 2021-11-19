fetch('../countTeamsByState.php')
  .catch(err => console.log(err))
  .then(res => res.json())
  .then(data => {
    data.forEach(row => {
      const tr = document.createElement('tr');

      const tdEstado = document.createElement('td');
      tdEstado.textContent = row.estado;

      const tdQuantidade = document.createElement('td');
      tdQuantidade.textContent = row.quantidade;

      tr.appendChild(tdEstado);
      tr.appendChild(tdQuantidade);
      
      document.querySelector('tbody').appendChild(tr);
    })
  });