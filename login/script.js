const displayMessage = function(message){
  document.querySelector('#error-message').classList.remove('visually-hidden');
  document.querySelector('input').addEventListener('input', () => {
    document.querySelector('#error-message').classList.add('visually-hidden');
  }, {once: true})
}

const submitForm = function(e){
  e.preventDefault()
  fetch('../usersConnection.php', {
    method: 'POST',
    body: JSON.stringify({
      login_input: this.querySelector('input').value,
      password_input: this.querySelectorAll('input')[1].value
    })
  })
  .then(res => {
    if (res.status === 400) displayMessage('Usuário já cadastrado');
    else {
      document.querySelector('input').value = '';
      document.querySelectorAll('input')[1].value = '';
    }
  })
};

document.querySelector('form').addEventListener('submit', submitForm);