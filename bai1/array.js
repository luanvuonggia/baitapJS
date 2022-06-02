const students =  ['Gia Trân', 'Linh Đa', 'Anh Khoa', 'Khánh Hòa', 'Như Ý', 'Lâm Trường'];

<<<<<<< HEAD
console.log(`Chiều dài của array students là ${students.length}`);

// Tìm vị trí index của Anh Khoa 
const viTriCuaKhoa = students.indexOf ("Khánh Hòa"); 
=======
console.log(`Chiều dài của array students là ${students.lenght}`);
// Tìm vị trí index của Anh Khoa 
const viTriCuaKhoa = students.indexOf("Anh Khoa"); // TODO: CODE HERE
>>>>>>> 856a2e5fb6bae9bd6a759f94647ea0011bc166a7
console.log(`Vị trí index của Anh Khoa là ${viTriCuaKhoa}`);

//Thêm Thành Phát vào array

<<<<<<< HEAD
students.push('Thanh Phat')
console.log(students)

// Xoá phần tử đầu tiên ra khỏi array

students.shift();
console.log(students);

// Tạo một string mới có chứa tên của các bạn trong array và nối với nhau bằng dấu gạch - ( ví dụ Gia Trân - Linh Đa - Anh Khoa - ...)

const chuoiTen = students.join('-');
=======
students[6] = 'Thành Phát'

// Xoá phần tử đầu tiên ra khỏi array

students.shift()

// Tạo một string mới có chứa tên của các bạn trong array và nối với nhau bằng dấu gạch - ( ví dụ Gia Trân - Linh Đa - Anh Khoa - ...)

const chuoiTen = students.join(' - '); // TODO: CODE HERE
>>>>>>> 856a2e5fb6bae9bd6a759f94647ea0011bc166a7

console.log('chuoiTen', chuoiTen);

//Xoá bỏ Như Ý ra khỏi array;
<<<<<<< HEAD

const viTricuaNhuY =students.indexOf("Như Ý");
students.splice(viTricuaNhuY,1);
console.log(students);
=======
let ValuetoRemove = 'Như Ý'
const NewArray = students.filter(item => item !== ValuetoRemove)
>>>>>>> 856a2e5fb6bae9bd6a759f94647ea0011bc166a7

// Cho 1 array mới
console.log(NewArray)
const students2 = ['Duy Tín', 'Văn Thanh'];

// nối student2 với student

<<<<<<< HEAD
var a = students.concat(students2);
console.log(a);

=======
>>>>>>> 856a2e5fb6bae9bd6a759f94647ea0011bc166a7
console.log('Kết quả:');
console.log(students.concat(students2));