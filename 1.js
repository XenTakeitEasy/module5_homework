let value = prompt('Введите число');

if ((typeof(+value) == 'number')){
if (value % 2 === 0) {
console.log('Это чётное число');
} 
if (value % 2 !== 0) {
console.log('Это нечётное число');
}
} else {
 console.log('Упс, кажется, вы ошиблись');
} if (isNaN(value % 2)) {
  console.log('Упс, кажется, вы ошиблись');
}