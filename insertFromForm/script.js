const getStatesFromDatabase = async () => {
  const res = await fetch('../selectDifferentStates.php');
  const data = await res.json();
  const states = data.map(row => row.estado);
  states.forEach(state => {
    const option = document.createElement('option');
    option.setAttribute('value', state);
    option.textContent = state;
    document.querySelector('select').appendChild(option);
  });
};

getStatesFromDatabase();