const users = [
    {
        id: 1,
        name: "Shivanand",
        mail: "shivanand@verizon.com"
    }, {
        id: 2,
        name: "Buddarthi",
        mail: "buddarthi@verizon.com"
    }
];

let checkUser = (user, id) => user.id === id;

module.exports.getUser = (userid, successCallback, failureCallback) => {
    let result = null;
    users.forEach(user => {
        checkUser(user, userid) ? result = user : null;
    });

    if (result !== null) {
        successCallback(result);
    } else {
        failureCallback('Sorry... No user found')
    }
}