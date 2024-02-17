/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    const priority = new MaxHeap
    for(let i=1;i<heights.length;i++){
        h=heights[i]-heights[i-1]
        if(h<=0) continue

        bricks-=h
        priority.push(h)

        if(bricks<0){
            ladders--
            bricks+=priority.pop()
        }
        if(ladders<0){
            return i-1
        }
  
    }
    return heights.length-1
};

class MaxHeap{
    constructor(){
        this.heap=[]
    }

    left(i){
        return (i*2)+1
    }
    right(i){
        return (i*2)+2
    }

    parent(i){
        return Math.floor((i-1)/2)
    }

    push(val){
        this.heap.push(val)
        this.shiftUp(this.heap.length-1)
    }
    shiftUp(i){
        while(i>0){
            const p=this.parent(i)
            if(this.heap[p]<this.heap[i]){
                [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]]
                i=p
            }else{
                break;
            }
        }
    }

    pop(){
        const removed=this.heap[0]
        const last=this.heap.pop()
        if(this.heap.length){
            this.heap[0]=last
            this.shiftDown(0)
        }
        return removed
    }

    shiftDown(i){
        const l=this.left(i)
        const r=this.right(i)
        let largest=i
        if(this.heap[largest]<this.heap[l] && l<this.heap.length){
            largest=l
        }
        if(this.heap[largest]<this.heap[r] && r<this.heap.length){
            largest=r
        }

        if(largest!==i){
            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]]
            this.shiftDown(largest)
        }
    }

};