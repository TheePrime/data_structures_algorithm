function removeDuplicates(nums) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) {
        nums.splice(i, 1)
        i--
      }
    }
    return nums
  }
let numsArray = [0,0,2,3,3]
  removeDuplicates(numsArray)
  console.log(removeDuplicates(numsArray)) //[ 0, 2, 3 ]
  