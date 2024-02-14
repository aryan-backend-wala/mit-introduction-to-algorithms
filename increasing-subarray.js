function count_long_subarray(arr){
  const n = arr.length;
  // console.log(n);
  let current = 1;
  let length = 1;
  let count = 1;
  for(let i=1;i<n;i++){
    if(arr[i-1] < arr[i]){
      current += 1;
    } else {
      current = 1;
    }
    if(current === length){
      count += 1;
    } else if(current > length){
      length = current;
      count = 1;
    }
  }
  if(current === length){
    count += 1;
  }
  console.log(count); 
  return count;
}

const arr = [1, 3, 4, 2, 7, 5, 6, 9, 8];
count_long_subarray(arr);