const students =  ['Gia Trân', 'Linh Đa', 'Anh Khoa', 'Khánh Hòa', 'Như Ý', 'Lâm Trường'];

console.log(`Chiều dài của array students là ${students.length}`);

// Tìm vị trí index của Anh Khoa 
<<<<<<< HEAD
const viTriCuaKhoa = students.indexOf('Anh Khoa');
=======

const viTriCuaKhoa = students.indexOf("Anh Khoa"); // TODO: CODE HERE
>>>>>>> 9bb173ffc7ad4f8cd3510b1bdb6ca10c5803917a
console.log(`Vị trí index của Anh Khoa là ${viTriCuaKhoa}`);

//Thêm Thành Phát vào array
students.push("Thành Phát");

// Xoá phần tử đầu tiên ra khỏi array
students.shift();

// Tạo một string mới có chứa tên của các bạn trong array và nối với nhau bằng dấu gạch - ( ví dụ Gia Trân - Linh Đa - Anh Khoa - ...)
const chuoiTen = students.join(" - ");; 
console.log('chuoiTen', chuoiTen);

//Xoá bỏ Như Ý ra khỏi array;
//delete students[students.indexOf('Như Ý')];
const newStudents = students.filter(function(s){
    return s != "Như Ý";
});
console.log(`Kết quả xóa: ${newStudents}`);

// Cho 1 array mới
console.log(NewArray)
const students2 = ['Duy Tín', 'Văn Thanh'];

// nối student2 với student

students.push(...students2);

console.log('Kết quả:');
console.log(students);