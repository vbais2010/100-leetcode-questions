var runningSum = function(nums) {
    let a = new Array(nums.length)
    a[0] = nums[0]
    for (let i = 1; i < nums.length; i++)
        a[i] = a[i-1] + nums[i]
    return a
};
