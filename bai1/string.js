let originalString = 'Lop hoc web cua Devera';

//TODO: Tính độ dài của chuỗi
const length = originalString.length; //CODE HERE
console.log(`Đội dài của chuỗi là ${length}`);

// TODO: lấy ra chữ web bằng hàm slice

const webString = ''; //CODE HERE

console.log('webString', webString);

//TODO: thay tất các các khoảng trống trong originalString bằng dấu phẩy
//CODE HERE

console.log('originalString', originalString);

// Viết 1 hàm kiểm tra xem chuỗi truyền vào có chứa từ 'Dev' hay không

function checkIsDev(s) {
    //CODE HERE
    return true;
}

console.log('Check is Dev', checkIsDev('123124njanad'));
console.log('Check is Dev', checkIsDev('123124devanad'));
console.log('Check is Dev', checkIsDev('123124njanad Dev'));
