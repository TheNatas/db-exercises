fetch('select.php')
  .catch(err => console.log(err))
  .then(res => res.json())
  .then(data => {
    data.forEach(row => {
      const newRow = document.createElement('tr');

      const tdCodigo = document.createElement('td');
      const tdNome = document.createElement('td');
      const tdEstado = document.createElement('td');

      tdCodigo.textContent = row.codigo;
      tdNome.textContent = row.nome;
      tdEstado.textContent = row.estado;

      newRow.appendChild(tdCodigo);
      newRow.appendChild(tdNome);
      newRow.appendChild(tdEstado);

      document.querySelector('tbody').appendChild(newRow);
    })
  });