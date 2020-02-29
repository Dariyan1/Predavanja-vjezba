var array=[];

for(var i=1; i<48;i++) {
  array.push(i);
}
console.log(array)
var num=array[Math.floor(Math.random()* array.length+1)];
console.log(num);