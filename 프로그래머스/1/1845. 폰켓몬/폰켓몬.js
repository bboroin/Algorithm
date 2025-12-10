function solution(nums) {
    let pick = [...new Set(nums)];
    
    return nums.length/2 >= pick.length ? pick.length : nums.length/2;
}