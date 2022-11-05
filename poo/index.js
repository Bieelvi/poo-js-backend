import User from './models/User.js';
import Admin from './models/Admin.js';
import Docente from './models/Docente.js';

const user = new User('Gabs', 'gabs@gmail.com', '10/02/2000');

console.log(user.infos());

const admin = new Admin('Admin', 'a@a.com', '03/11/2022');

console.log(
    admin.infos(),
    admin.criarCurso('JS', 20),
);

const docente = new Docente('Docente', 'd@d.com.br', '12/12/2121');

console.log(
    docente.infos(),
    docente.aprovaEstudante('Gabs', 'JS')
);