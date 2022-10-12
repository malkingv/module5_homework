const array = [5, 5 ,4];
let res;
for (let i = 0; i < array.length - 1; i++){
    if (array[i] == array[i+1]){
        res = 'Все ли элементы в массиве одинаковые'
    } else {
        res = 'Элементы массива не одинаковые'
    }
}
console.log(res);