var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const displayError = (error) => {
    if (error === 404)
        document.querySelector('#error-login').classList.remove('visually-hidden');
    else if (error === 400)
        document.querySelector('#error-password').classList.remove('visually-hidden');
    document.querySelectorAll('input').forEach(input => {
        input.value = '';
        input.addEventListener('input', hideError, { once: true });
    });
};
const hideError = () => {
    document.querySelector('#error-login').classList.add('visually-hidden');
    document.querySelector('#error-password').classList.add('visually-hidden');
};
const submitForm = function (e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const res = yield fetch('../userLogin.php', {
            method: 'POST',
            body: JSON.stringify({
                login_input: this.querySelector('input').value,
                password_input: this.querySelectorAll('input')[1].value
            })
        });
        if (res.status === 200) {
            const data = yield res.text();
            localStorage.setItem('token', data);
            document.querySelector('button').textContent = 'Entrou';
            document.querySelector('button').classList.replace('btn-primary', 'btn-success');
        }
        else
            displayError(res.status);
    });
};
document.querySelector('form').addEventListener('submit', submitForm);
//# sourceMappingURL=script.js.map