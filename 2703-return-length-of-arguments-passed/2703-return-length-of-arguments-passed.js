//1
var argumentsLength = function(...args) {
	return args.length;
};

//2
var argumentsLength = function(...args) {
    let count=0;
    for(let i=0;i<args.length;i++){
        if(args!=0){
            count++;
        }
    }
	return count;
};