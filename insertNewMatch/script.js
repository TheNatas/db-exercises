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

const displayError = () => {
  document.querySelector('.overlay').classList.remove('hidden');
  document.querySelector('.error-message').classList.remove('hidden');
  document.querySelector('button').disabled = true;
};

const hideError = function(e){
  this.classList.add('hidden');
  document.querySelector('.error-message').classList.add('hidden');
}

const validateForm = function(){
  if (document.querySelector('#home-team').value === document.querySelector('#away-team').value)
    displayError();
  else
    document.querySelector('button').disabled = false;
}

document.querySelectorAll('select').forEach(select => select.addEventListener('change', validateForm));
document.querySelector('.overlay').addEventListener('click', hideError);