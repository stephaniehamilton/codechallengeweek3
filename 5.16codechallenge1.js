var array = [1,2,3,4,5];
var sum = 0;

for (var i=0; i<5; i++) {
  sum = sum + array[i];
}
console.log(sum);


array.splice(2,0,6);
console.log(array);

$('span').text('$6,500');
