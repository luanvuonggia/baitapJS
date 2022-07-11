let originalString = 'Lop hoc web cua Devera';

//TODO: Tính độ dài của chuỗi
<<<<<<< HEAD

const length = originalString.length; //CODE HERE
=======
const length = originalString.length;
>>>>>>> 9bb173ffc7ad4f8cd3510b1bdb6ca10c5803917a
console.log(`Đội dài của chuỗi là ${length}`);

// TODO: lấy ra chữ web bằng hàm slice

<<<<<<< HEAD
const webString = originalString.slice(originalString.indexOf('web'),originalString.indexOf('web')+3); //CODE HERE
=======
const webString = originalString.slice(8,11);
>>>>>>> 9bb173ffc7ad4f8cd3510b1bdb6ca10c5803917a

console.log('webString', webString);

//TODO: thay tất các các khoảng trống trong originalString bằng dấu phẩy
<<<<<<< HEAD
originalString = originalString.replace(/ /g, ',');
=======
>>>>>>> 9bb173ffc7ad4f8cd3510b1bdb6ca10c5803917a

// console.log('originalString', originalString.split(' ').join(','));
console.log('originalString', originalString.replaceAll(' ', ','));

// Viết 1 hàm kiểm tra xem chuỗi truyền vào có chứa từ 'Dev' hay không

function checkIsDev(s) {
    if (s.includes('Dev'))
<<<<<<< HEAD
        return true;
    else
        return false;
=======
    return true;
>>>>>>> 9bb173ffc7ad4f8cd3510b1bdb6ca10c5803917a
}

console.log('Check is Dev', checkIsDev('123124njanad'));
console.log('Check is Dev', checkIsDev('123124devanad'));
console.log('Check is Dev', checkIsDev('123124njanad Dev'));
