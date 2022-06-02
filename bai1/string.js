let originalString = 'Lop hoc web cua Devera';

//TODO: Tính độ dài của chuỗi
const length = originalString.length; //CODE HERE
console.log(`Đội dài của chuỗi là ${length}`);

// TODO: lấy ra chữ web bằng hàm slice
let web="web";
let leg= web.length
let a= originalString.indexOf(web);
const webString =originalString.slice(a,a+leg); //CODE HERE

console.log('webString', webString);

//TODO: thay tất các các khoảng trống trong originalString bằng dấu phẩy
//CODE HERE
originalString = originalString.split(" ").join(",");
console.log('originalString:', originalString);

// Viết 1 hàm kiểm tra xem chuỗi truyền vào có chứa từ 'Dev' hay không

function checkIsDev(s) {
    //CODE HERE
    if(s.includes("Dev")){
    return true;
    }else{
        return false;
    }
}

console.log('Check is Dev', checkIsDev('123124njanad'));
console.log('Check is Dev', checkIsDev('123124devanad'));
console.log('Check is Dev', checkIsDev('123124njanad Dev'));
