// API https://randomuser.me/api/?results=5 results = 5 là số lượng users trả về

let users = [];
async function getUsers() {
  const users = await fetch("https://randomuser.me/api/?results=5");
  return users.json();
}
getUsers().then((data) => {
  users = data?.results;
  start(users);
});

// Lọc ra những bạn là nữ
function filterFemale(users) {
  // Code here
  return [users.filter((item) => item.gender == "female")];
}

// Tạo ra một array chứa tất cả email của user

function getEmail(users) {
  // Code here
  return [users.map((item) => item.email)];
}

async function start(users) {
  const femaleList = filterFemale(users);
  console.log("Lọc ra những bạn là nữ: ", femaleList);

  const email = getEmail(users);
  console.log("Tạo ra một array chứa tất cả email của user: ", email);
}
