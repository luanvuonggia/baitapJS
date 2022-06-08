import fetch from "node-fetch";
// API https://randomuser.me/api/?results=5 results = 5 là số lượng users trả về 

let users = [];
async function getUsers() {
    const users = await fetch("https://randomuser.me/api/?results=5");
    return users.json();
  }
await getUsers().then((data) => {
    users = data?.results;
});

// Lọc ra những bạn là nữ
function filterFemale(users) {
    // Code here
    return [];
}

const femaleList = filterFemale(users);

// Tạo ra một array chứa tất cả email của user

function getEmail(users) {
    // Code here
    return [];
}

const email = getEmail(users);