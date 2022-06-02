const students =  ['Gia Trân', 'Linh Đa', 'Anh Khoa', 'Khánh Hòa', 'Như Ý', 'Lâm Trường'];

console.log(`Chiều dài của array students là ${students.lenght}`);
// Tìm vị trí index của Anh Khoa 
{
    const viTriCuaKhoa  = students.indexOf('Anh Khoa')
    // for(let i = 0; i<students.length; i++)
    // {
    //     if(students[i] == 'Anh Khoa')
    //     {
    //         viTriCuaKhoa = i;
    //     }

    // }
    console.log(`Vị trí index của Anh Khoa là ${viTriCuaKhoa}`);
}

//Thêm Thành Phát vào array
{
    students.push('Thành Phát')
    console.log(students)
}
// Xoá phần tử đầu tiên ra khỏi array
{
    students.shift()
    console.log(students)
}
// Tạo một string mới có chứa tên của các bạn trong array và nối với nhau bằng dấu gạch - ( ví dụ Gia Trân - Linh Đa - Anh Khoa - ...)
{
    // const chuoiTen = ""; // TODO: CODE HERE
    // for(let i = 0; i<students.length; i++)
    // {
    //     if(i!= students.length- 1)
    //     {
    //         chuoiTen.push(students[i] + '');
    //     }
    //     else{
    //         chuoiTen.push(students[i]);
    //     }

    // }
    chuoiTen = students.join('-');
    console.log('chuoiTen', chuoiTen);
}
//Xoá bỏ Như Ý ra khỏi array;
// TODO: CODE HERE
{
    // for(let i = 0; i<students.length; i++)
    // {
    //     if(students[i] == "Như Ý")
    //     {
    //         students.splice(i, 1);
    //     }
    // }
    const i = students.indexOf("Như Ý")
    students.splice(i, 1);
    console.log(students)
}


// Cho 1 array mới
{
    const students2 = ['Duy Tín', 'Văn Thanh'];

// nối student2 với student
// TODO: CODE HERE

    students.push(...students2);
    console.log('Kết quả:');
    console.log(students);
}
console.log(Math.floor(Math.random()*900)+100) // random(100, 1000)

////////////////////////////////////////////////////////
// const viTriCuaKhoa = students.indexOf("Anh Khoa"); // TODO: CODE HERE
// console.log(`Vị trí index của Anh Khoa là ${viTriCuaKhoa}`);

// //Thêm Thành Phát vào array

// students[6] = 'Thành Phát'

// // Xoá phần tử đầu tiên ra khỏi array

// students.shift()

// // Tạo một string mới có chứa tên của các bạn trong array và nối với nhau bằng dấu gạch - ( ví dụ Gia Trân - Linh Đa - Anh Khoa - ...)

// const chuoiTen = students.join(' - '); // TODO: CODE HERE

// console.log('chuoiTen', chuoiTen);

// //Xoá bỏ Như Ý ra khỏi array;
// let ValuetoRemove = 'Như Ý'
// const NewArray = students.filter(item => item !== ValuetoRemove)

// // Cho 1 array mới
// console.log(NewArray)
// const students2 = ['Duy Tín', 'Văn Thanh'];

// // nối student2 với student

// console.log('Kết quả:');
// console.log(students.concat(students2));
