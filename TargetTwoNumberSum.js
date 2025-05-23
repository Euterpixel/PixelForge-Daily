let nums = [1, 2, 3,7, 2, 45, 68, 78, 98, 147, 246, 567, 678, 890, 986, 3864];
let target = 645;
// function TwoNumbers(nums, target) {
if ((nums[nums.length - 1] + nums[nums.length - 2]) < target) {
    console.log("Not possible to find target")
}
else {
    for (let i = 0; i < nums.length; i++) {
        // console.log("I iiiiii...",i,nums[i]);
        if (nums[i] === target) {
            // console.log("target is equal to one of the numbers")
        }
        else {
            for (let j = i + 1; j < nums.length; j++) {
                // console.log(j, nums[j]);
                let sum = nums[i] + nums[j];
                // console.log(sum);
                if (sum === target) {
                    console.log(i, j);
                    return (i, j);
                    break;
                }
                else if (i === nums.length - 1 && j === nums.length - 1 && j + i !== target) {
                    console.log("Target couldn't be found")
                }


            }
        }

    }
}




// };
