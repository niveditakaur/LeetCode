var RandomizedSet = function() {
    this.values = [];
    this.valToIndex = new Map();
};

RandomizedSet.prototype.insert = function(val) {
    if (this.valToIndex.has(val)) {
        return false;
    }
    
    this.valToIndex.set(val, this.values.length);
    this.values.push(val);
    return true;
};

RandomizedSet.prototype.remove = function(val) {
    if (!this.valToIndex.has(val)) {
        return false;
    }
    
    const index = this.valToIndex.get(val);
    const lastVal = this.values.pop();
    
    if (index !== this.values.length) {
        this.values[index] = lastVal;
        this.valToIndex.set(lastVal, index);
    }
    
    this.valToIndex.delete(val);
    return true;
};

RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.values.length);
    return this.values[randomIndex];
};
