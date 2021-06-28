/*
INSTRUCCIONES:

Cree una función tomando la variable "companies" como parámetro y devolviendo
un booleano que:

1. Valide que todos los nombres de las empresas y los atributos "firstName" y "lastName" de "users" están en mayúsculas.

2. Probar la operación de esta función importando la función creada en el "exer-1.js". */

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll, startsWithCapital } = require('../helpers/data.helper');
const mapUsersAndCompanies  = require('../exercises/exer-1');

const companies = createAll();

checkUsersValues = (arr) => {

    let aux = arr.find(item => {
        return item.users.find(itemUser => {
            if (!itemUser.firstName || !itemUser.lastName) {
                return false;
            }
            return !( startsWithCapital(itemUser.firstName) && startsWithCapital(itemUser.lastName));
        })
    });

    return !aux;
}

cleanConsole(3, companies);
console.log('%c ---- RES 3 --- ', 'background: #bada55; color: #222', 'Put here your method: ');
const checkUsers = checkUsersValues((companies));
console.log(' --- RES 3', checkUsers);
