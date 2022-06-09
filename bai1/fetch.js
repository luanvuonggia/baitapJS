// API https://randomuser.me/api/?results=5 results = 5 là số lượng users trả về

let users = [];
async function getUsers() {
  const users = await fetch("https://randomuser.me/api/?results=5");
  return users.json();
}

getUsers().then((data) => {
  users = data?.results;
  console.log(users);
  // Lọc ra những bạn là nữ
  function filterFemale(users) {
    // Code here
    try {
      const tmp = users.filter((user) => user.gender == "female");
      //console.log(tmp);
      return tmp;
    } catch (error) {
      console.log(error);
    }
  }

  const femaleList = filterFemale(users);
  console.log(femaleList);
  // Tạo ra một array chứa tất cả email của user

  function getEmail(users) {
    // Code here
    let tmp = [];
    users.forEach((user) => {
      tmp += user.email;
    });
    //console.log(tmp);
    return tmp;
  }

  const email = getEmail(users);
  console.log(email);
});
