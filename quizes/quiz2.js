function rotate(nums, k) {
    for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop())
    }
    return nums
  }
 
console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8 , 10], 4)) // [6, 7, 8, 10, 1,
2, 3, 4,5
console.log(rotate([-100, -300, 10, 909], 2)) // 10, 909, -100, -300 