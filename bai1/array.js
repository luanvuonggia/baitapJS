const students =  ['Gia Trân', 'Linh Đa', 'Anh Khoa', 'Khánh Hòa', 'Như Ý', 'Lâm Trường'];

console.log(`Chiều dài của array students là ${students.lenght}`);

// Tìm vị trí index của Anh Khoa 
const viTriCuaKhoa = students.indexOf('Anh Khoa'); 
console.log(`Vị trí index của Anh Khoa là ${viTriCuaKhoa}`);

//Thêm Thành Phát vào array

students.push('Thành Phát');
console.log('Thêm Thành Phát vào array');
console.log(students);

// Xoá phần tử đầu tiên ra khỏi array

students.shift();
console.log('Xoá phần tử đầu tiên ra khỏi array');
console.log(students);

// Tạo một string mới có chứa tên của các bạn trong array và nối với nhau bằng dấu gạch - ( ví dụ Gia Trân - Linh Đa - Anh Khoa - ...)

const chuoiTen = students.join(' - '); // TODO: CODE HERE

console.log('chuoiTen', chuoiTen);

//Xoá bỏ Như Ý ra khỏi array;
const index = students.indexOf('Như Ý');
console.log('Xoá bỏ Như Ý ra khỏi array');
students.splice(index, 1);
console.log(students);

// Cho 1 array mới

const students2 = ['Duy Tín', 'Văn Thanh'];

// nối student2 với student
const connect = students2.concat(students);
console.log('Nối student2 với student')
console.log(connect);

console.log('Kết quả:');
console.log(students);