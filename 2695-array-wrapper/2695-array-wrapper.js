class ArrayWrapper {
    constructor(nums = []) {
        this.nums = nums;
    }

    valueOf = () => this.nums.reduce((acc, val) => acc + val, 0);
    toString = () => `[${this.nums.join(',')}]`;
}