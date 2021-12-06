const displayTable = () => {
  document.querySelector('.my-card').classList.add('visually-hidden');
  document.querySelector('table').classList.remove('visually-hidden');
};

const displayLogin = () => {
  document.querySelector('.my-card').classList.remove('visually-hidden');
  document.querySelector('table').classList.add('visually-hidden');
};

const getUsersFromServer = async (): Promise<[{}]> => {
  const res = await fetch('../selectUsers.php', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  if (res.status === 401){
    throw new Error('Usuário deslogado');
  }else{
    const data = await res.json();
    return data;
  }
};

getUsersFromServer()
  .then((users: [{}]) => users.forEach((user: {login: string}) => {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = user.login;
    tr.appendChild(td);
    document.querySelector('tbody').appendChild(tr);
    displayTable();
  }))
  .catch(() => displayLogin());