let originalString = 'Lop hoc web cua Devera';

//TODO: Tính độ dài của chuỗi
const length = originalString.length; 
console.log(`Đội dài của chuỗi là ${length}`);

// TODO: lấy ra chữ web bằng hàm slice

let arr = originalString.split(' ');
const webString = arr.slice(2,3); 
console.log('webString', webString);

//TODO: thay tất các các khoảng trống trong originalString bằng dấu phẩy
originalString = originalString.replace(/ /g,",") ;
console.log('originalString', originalString);

// Viết 1 hàm kiểm tra xem chuỗi truyền vào có chứa từ 'Dev' hay không

function checkIsDev(s) 
{
    originalString.split(" ");
    if(originalString.includes('dev'))
    
    {
            return true;
    }
    else
    {
        return false;
    }
}

console.log('Check is Dev', checkIsDev('123124njanad'));
console.log('Check is Dev', checkIsDev('123124devanad'));
console.log('Check is Dev', checkIsDev('123124njanad Dev'));
