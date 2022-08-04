const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 500) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
    setTimeout(() => {
        const user = {
            firstName: "Ivan",
            lastName: "Ivanovich",
            nationality: "Russian",
        };
        // Retorne a `callback` passada como parâmetro na função `getUser`
        // return callback(user);
        // Dica: você pode manter o `console.log()`
        console.log(callback(user));
    }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo