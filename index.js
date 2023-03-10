let array = [55, 83, -13, 79, 46, 25, 9, 34];
function smallestNumber1and2(array, n) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    // console.log(array);
    let result = array[n - 1];
    return result;
}
console.log(smallestNumber1and2(array, 1));
console.log(smallestNumber1and2(array, 2));

document.write("The first Smallest Number:" + smallestNumber1and2(array, 1),"<br>", "The 2nd Smallest Number:" + smallestNumber1and2(array, 2));
// console.log(smallestNumber1and2(array));