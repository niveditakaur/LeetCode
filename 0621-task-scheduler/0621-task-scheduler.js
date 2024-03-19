/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const taskFreq = new Array(26).fill(0);
    for (const task of tasks) {
        taskFreq[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }
    
    taskFreq.sort((a, b) => b - a);
    
    const maxFreq = taskFreq[0];
    
    let maxFreqCount = 1;
    for (let i = 1; i < taskFreq.length; i++) {
        if (taskFreq[i] === maxFreq) {
            maxFreqCount++;
        } else {
            break;
        }
    }
    
    const intervals = (maxFreq - 1) * (n + 1) + maxFreqCount;
    
    return Math.max(intervals, tasks.length);
};