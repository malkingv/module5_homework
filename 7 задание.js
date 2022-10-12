const array = [8, 9 ,3 , 3, 4, 'a' , undefined];
let a = 0, b = 0, c = 0;
array.forEach(function (value, index, array){
    if (typeof value == 'number'){
        if (value == 0 ) {
            a += 1;
        } else if (value % 2 == 0){
            b += 1;
        } else {
            c += 1;
        }
    }
})
console.log(`Нулевых симоволов: ${a}, четных: ${b}, а нечетных: ${c}`)