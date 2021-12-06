const inputs = document.querySelectorAll('input');

const displayError = (error: number) => {
  if (error === 404){
    document.querySelector('#error-login').classList.remove('visually-hidden');
    inputs[0].classList.remove('mb-3');
  }else if (error === 400){
    document.querySelector('#error-password').classList.remove('visually-hidden');
    inputs[1].classList.remove('mb-3');
  }

  inputs.forEach(input => {
    input.value = '';
    input.addEventListener('input', hideError, {once: true});
  });
};

const hideError = () => {
  document.querySelector('#error-login').classList.add('visually-hidden');
  document.querySelector('#error-password').classList.add('visually-hidden');
  inputs.forEach(input => input.classList.add('mb-3'));
};

const submitForm = async function(e: Event) : Promise<any>{
  e.preventDefault();
  const res = await fetch('../userLogin.php', {
    method: 'POST',
    body: JSON.stringify({
      login_input: this.querySelector('input').value,
      password_input: this.querySelectorAll('input')[1].value
    })
  })
  if (res.status === 200){
    const data = await res.text();
    localStorage.setItem('token', data);
    document.querySelector('button').textContent = 'Entrou';
    document.querySelector('button').classList.replace('btn-primary', 'btn-success');
    window.location.replace('../displayUsers/index.html');
  }
  else 
    displayError(res.status);
  
};

document.querySelector('form').addEventListener('submit', submitForm);