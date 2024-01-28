function singleNumber(nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
      if (map[nums[i]]) {
        map[nums[i]]++
      } else {
        map[nums[i]] = 1
      }
    }
    for (let key in map) {
      if (map[key] === 1) {
        return key
      }
    }
  }
let numsArray = [1,1,2,2,3,3,4]
  console.log(singleNumber(numsArray))