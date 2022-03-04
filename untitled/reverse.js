const reverse = function( arr ) {
  let left = 0;
  let right = arr.length -1 ;
  while( left < right ){
    let tmp = arr[left]

    arr[left] = arr[right]
    
    arr[right] = tmp

    left++
    right--
  }

  return arr
}

module.exports = reverse;