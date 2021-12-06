fetch('../select.php')
  .then(res => res.json())
  .catch(err => console.log(err))
  .then(data => {
    const ul = document.createElement('ul');
    data.forEach(row => {
      const li = document.createElement('li');
      li.textContent = `${row.codigo}|${row.nome}|${row.estado}`;
      const img = document.createElement('img');
      img.setAttribute('src', row.url);
      ul.appendChild(li);
      ul.appendChild(img);
    })
    document.querySelector('body').appendChild(ul);
  })
  .catch(err => console.log(err));

// const getRowsFromDatabaseAsList = async () => {
//   try{
//     const res = await fetch('../select.php');
//     const data = await res.json();

//     const ul = document.createElement('ul');
//     data.forEach(row => {
//       const li = document.createElement('li');
//       li.textContent = `|${row.codigo}|${row.nome}|${row.estado}`;
//       ul.appendChild(li);
//     })
//     document.querySelector('body').appendChild(ul);
//   }catch{
//     console.log('an error occurred')
//   }
// }

// getRowsFromDatabaseAsList();