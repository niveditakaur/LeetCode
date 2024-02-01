/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];

    const isInteger = (s) => /^\d+$/.test(s);

    for (const token of tokens) {
        switch (token) {
            case '+':
                stack.push(stack.pop() + stack.pop());
                break;
            case '-':
                stack.push(-stack.pop() + stack.pop());
                break;
            case '*':
                stack.push(stack.pop() * stack.pop());
                break;
            case '/':
                const divisor = stack.pop();
                const dividend = stack.pop();
                stack.push((dividend / divisor) | 0); 
                break;
            default:
                stack.push(+token);
                break;
        }
    }

    return stack[0];
};