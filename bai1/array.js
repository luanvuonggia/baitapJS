const students =  ['Gia Trân', 'Linh Đa', 'Anh Khoa', 'Khánh Hòa', 'Như Ý', 'Lâm Trường'];

console.log(`Chiều dài của array students là ${students.length}`);

// Tìm vị trí index của Anh Khoa 
const viTriCuaKhoa = students.indexOf("Anh Khoa");
// TODO: CODE HERE
console.log(`Vị trí index của Anh Khoa là ${viTriCuaKhoa}`);

//Thêm Thành Phát vào array
// TODO: CODE HERE
students.push("Thành Phát");
console.log("Mảng mới là: ", students);

// Xoá phần tử đầu tiên ra khỏi array
// TODO: CODE HERE
students.shift();
console.log("Mảng sau khi xóa phần tử đầu tiên là: ", students);1

// Tạo một string mới có chứa tên của các bạn trong array và nối với nhau bằng dấu gạch - ( ví dụ Gia Trân - Linh Đa - Anh Khoa - ...)
const chuoiTen = students.join(" - ");
console.log('chuoiTen', chuoiTen);

//Xoá bỏ Như Ý ra khỏi array;
// TODO: CODE HERE
for( var i = 0; i < students.length; i++) {  
    
    if (students[i] === "Như Ý") { 
        students.splice(i, 1); 
    }
}
console.log("Mảng sau khi xóa Như Ý là: ", students);

// Cho 1 array mới

const students2 = ['Duy Tín', 'Văn Thanh'];

// nối student2 với student

// TODO: CODE HERE

console.log('Kết quả:');
console.log(students);