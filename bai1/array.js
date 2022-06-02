const students =  ['Gia Trân', 'Linh Đa', 'Anh Khoa', 'Khánh Hòa', 'Như Ý', 'Lâm Trường'];

console.log(`Chiều dài của array students là ${students.lenght}`);

// Tìm vị trí index của Anh Khoa 
const viTriCuaKhoa = students.indexOf("Anh Khoa"); // TODO: CODE HERE
console.log(`Vị trí index của Anh Khoa là ${viTriCuaKhoa}`);

//Thêm Thành Phát vào array
students.push("Thành Phát");


// Xoá phần tử đầu tiên ra khỏi array
students.unshift();

// TODO: CODE HERE

// Tạo một string mới có chứa tên của các bạn trong array và nối với nhau bằng dấu gạch - ( ví dụ Gia Trân - Linh Đa - Anh Khoa - ...)

const chuoiTen = students.join(" - "); // TODO: CODE HERE

console.log('chuoiTen', chuoiTen);

//Xoá bỏ Như Ý ra khỏi array;
delete students[4];


// Cho 1 array mới

const students2 = ['Duy Tín', 'Văn Thanh'];

// nối student2 với student
//students.push(...students2);

// TODO: CODE HERE

console.log('Kết quả:');
console.log(students.concat(students2));