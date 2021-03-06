var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const displayTable = () => {
    document.querySelector('.my-card').classList.add('visually-hidden');
    document.querySelector('table').classList.remove('visually-hidden');
};
const displayLogin = () => {
    document.querySelector('.my-card').classList.remove('visually-hidden');
    document.querySelector('table').classList.add('visually-hidden');
};
const getUsersFromServer = () => __awaiter(this, void 0, void 0, function* () {
    const res = yield fetch('../selectUsers.php', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    if (res.status === 401) {
        throw new Error('Usuário deslogado');
    }
    else {
        const data = yield res.json();
        return data;
    }
});
getUsersFromServer()
    .then((users) => users.forEach((user) => {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = user.login;
    tr.appendChild(td);
    document.querySelector('tbody').appendChild(tr);
    displayTable();
}))
    .catch(() => displayLogin());
//# sourceMappingURL=script.js.map