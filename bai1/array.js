const students = [
  "Gia Trân",
  "Linh Đa",
  "Anh Khoa",
  "Khánh Hòa",
  "Như Ý",
  "Lâm Trường",
];

<<<<<<< HEAD
console.log(`Chiều dài của array students là ${students.length}`);

// Tìm vị trí index của Anh Khoa
=======
console.log(`Chiều dài của array students là ${students.lenght}`);
// Tìm vị trí index của Anh Khoa 

>>>>>>> 9bb173ffc7ad4f8cd3510b1bdb6ca10c5803917a
const viTriCuaKhoa = students.indexOf("Anh Khoa"); // TODO: CODE HERE
console.log(`Vị trí index của Anh Khoa là ${viTriCuaKhoa}`);

//Thêm Thành Phát vào array

<<<<<<< HEAD
// TODO: CODE HERE
students.push("Thành Phát");
// Xoá phần tử đầu tiên ra khỏi array

// TODO: CODE HERE
students.shift();

// Tạo một string mới có chứa tên của các bạn trong array và nối với nhau bằng dấu gạch - ( ví dụ Gia Trân - Linh Đa - Anh Khoa - ...)

const chuoiTen = students.join(" - "); // TODO: CODE HERE
=======
students[6] = 'Thành Phát'

// Xoá phần tử đầu tiên ra khỏi array

students.shift()

// Tạo một string mới có chứa tên của các bạn trong array và nối với nhau bằng dấu gạch - ( ví dụ Gia Trân - Linh Đa - Anh Khoa - ...)

const chuoiTen = students.join(' - '); // TODO: CODE HERE
>>>>>>> 9bb173ffc7ad4f8cd3510b1bdb6ca10c5803917a

console.log("chuoiTen", chuoiTen);

//Xoá bỏ Như Ý ra khỏi array;
<<<<<<< HEAD
// TODO: CODE HERE
students.splice(students.indexOf("Như Ý"), 1);

// Cho 1 array mới

const students2 = ["Duy Tín", "Văn Thanh"];

// nối student2 với student

// TODO: CODE HERE
console.log("Kết quả:");
console.log(students.concat(students2));
=======
let ValuetoRemove = 'Như Ý'
const NewArray = students.filter(item => item !== ValuetoRemove)

// Cho 1 array mới
console.log(NewArray)
const students2 = ['Duy Tín', 'Văn Thanh'];

// nối student2 với student

console.log('Kết quả:');
console.log(students.concat(students2));
>>>>>>> 9bb173ffc7ad4f8cd3510b1bdb6ca10c5803917a
