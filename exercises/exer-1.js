/*
INSTRUCCIONES:

Crear una función tomando la variable "companies" como parámetro y reemplazar:

1. Todos los valores "undefined" en "usuarios" por un string vacío.

2. El nombre de cada "company" debe tener la primer letra en mayúscula.

3. El nombre y el apellido de cada "user" debe tener la primer letra en mayúscula.

4. Las "companies" deben ordenarse por su total de "user" (orden decreciente).

5. Los "users" de cada "company" deben aparecer en orden alfabético.
*/

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll, capitalizeFirstLetter } = require('../helpers/data.helper');
const companies = createAll();

mapUsersAndCompanies = (arr) => {
    let auxCompanies = arr.map(item => {

        item.name = capitalizeFirstLetter(item.name);

        item.users.map(itemUser => {
    
            Object.keys(itemUser).map(key => {
                itemUser[key] = itemUser[key] !== undefined ? itemUser[key] : ''  
            })
            
            itemUser.firstName = capitalizeFirstLetter(itemUser.firstName);
            
            itemUser.lastName = capitalizeFirstLetter(itemUser.lastName);
            
    
            return itemUser;
        });
    
        item.users.sort((a, b) => a.firstName > b.firstName && 1 || -1);
    
        return item;
    })
    
    auxCompanies.sort((a, b) =>  parseFloat(b.users.length) - parseFloat(a.users.length));

    return auxCompanies;
}

cleanConsole(1,companies);
console.log('%c ---- RES 1 --- ', 'background: #bada55; color: #222', 'Put here your method: ');

const auxComp = mapUsersAndCompanies(companies);

console.log({auxComp})

module.exports = mapUsersAndCompanies;
