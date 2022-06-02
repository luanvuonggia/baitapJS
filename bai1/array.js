const students =  ['Gia Trân', 'Linh Đa', 'Anh Khoa', 'Khánh Hòa', 'Như Ý', 'Lâm Trường'];

console.log (`Chiều dài của array students là ${students.length}`);

// Tìm vị trí index của Anh Khoa
const viTriCuaKhoa = students.indexOf("Anh Khoa"); // TODO: CODE HERE
console.log(`Vị trí index của Anh Khoa là ${viTriCuaKhoa}`);

//Thêm Thành Phát vào array

students.push("Thành Phát");
console.log(students);

// Xoá phần tử đầu tiên ra khỏi array

students.shift();
console.log(students);

// Tạo một string mới có chứa tên của các bạn trong array và nối với nhau bằng dấu gạch - ( ví dụ Gia Trân - Linh Đa - Anh Khoa - ...)

const chuoiTen = students.join("-"); // TODO: CODE HERE
console.log('chuoiTen', chuoiTen);

//Xoá bỏ Như Ý ra khỏi array;
const viTriCuaNhuY = students.indexOf("Như Ý");
const lastStudents = students.splice(viTriCuaNhuY,1);
console.log(lastStudents);

// Cho 1 array mới lastStudents

const students2 = ['Duy Tín', 'Văn Thanh'];

// nối student2 với student

const students3 = students.concat(students2);
console.log(students3);

console.log("Kết quả: ");
console.log(students3);