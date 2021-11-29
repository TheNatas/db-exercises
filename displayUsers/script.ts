const getUsersFromServer = async (): Promise<[{}]> => {
  const res = await fetch('../selectUsers.php', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  if (res.status === 401){
    return [{}];
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
  }));