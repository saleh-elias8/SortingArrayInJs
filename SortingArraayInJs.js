//creating array of numbers
var myarray =[21,75,3,8,36,2];
>>undefined

//Display the array
myarray
>>Array(6) [ 75, 36, 21, 8, 3, 2 ]

//Sorting in ascending order
function num_asce_comparator(a,b){
  return (a-b);
}
myarray.sort(num_asce_comparator);
>>Array(6) [ 2, 3, 8, 21, 36, 75 ]

//Sorting in descending order
function num_desc_comparator(a,b){
  return (b-a);
}
undefined
myarray.sort(num_desc_comparator);
>>Array(6) [ 75, 36, 21, 8, 3, 2 ]
