/*
INSTRUCCIONES:

Crear una función tomando como parámetro la variable "companies":

1. Agrupar todos los "users" de todas las "companies" en una sola tabla.

2. Cada "user" debe tener un nuevo atributo "company" que tenga como valor el nombre de la "company".

3. Los "users" deben ordenarse de acuerdo con su edad (de mayor a menor).
*/
const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

const companies = createAll();

mapUsers = arr => {
    let auxUsers = []
    arr.forEach(item => {

        item.users.map(itemUser => {
            itemUser.company = item.name;
            auxUsers.push(itemUser);
            return itemUser;
        });

        
    });
    
    auxUsers.sort((a, b) =>  parseFloat(b.age) - parseFloat(a.age));

    return auxUsers;
}

cleanConsole(4, companies);
console.log('%c ---- RES 4 --- ', 'background: #bada55; color: #222', 'Put here your method: ');

const usersMapped = mapUsers(companies);

console.log({usersMapped})