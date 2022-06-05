
// API https://randomuser.me/api/?results=5 results = 5 là số lượng users trả về 
import fetch from "node-fetch";
let users = [];
async function getUsers() {
    const users = await fetch("https://randomuser.me/api/?results=5");
    return users.json();
}
await getUsers().then((data) => {
    users = data?.results
});

// Lọc ra những bạn là nữ
function filterFemale(users) {
    // Code here
    let female = [];
    // Cach 1
    // for (let i = 0; i < users.length; i++) {
    //     if (users[i]["gender"] == "female") {
    //         female.push(users[i]);
    //     }
    // }

    // Cach 2
    female = users.filter(obj => obj.gender == 'female');
    return female;
}

const femaleList = filterFemale(users);

// Tạo ra một array chứa tất cả email của user

function getEmail(users) {
    // Code here
    let email = [];
    // Cach 1
    // for (let i = 0; i < users.length; i++) {
    //     if (users[i]["email"] != null) {
    //         email.push(users[i]["email"]);
    //     }
    // }

    // Cach 2
    email = users.map(({ email }) => email);
    return email;
}

const email = getEmail(users);