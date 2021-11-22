fetch('../select.php')
  .catch(err => console.log(err))
  .then(res => res.json())
  .then(data => {
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
  });