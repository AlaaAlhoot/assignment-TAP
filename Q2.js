function majorityElement(nums) {
    const counts = {};
    const majorityCount = Math.floor(nums.length / 2);

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > majorityCount) {
            return num;
        }
    }
}
