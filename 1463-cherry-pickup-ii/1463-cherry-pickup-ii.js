/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    
    const dp = Array.from({ length: rows }, () => 
        Array.from({ length: cols }, () => 
            Array.from({ length: cols }, () => -1)
        )
    );
    
    const maxCherries = (r1, c1, c2) => {
        if (r1 === rows) return 0;
        
        if (dp[r1][c1][c2] !== -1) return dp[r1][c1][c2];
        
        let cherries = grid[r1][c1];
        if (c1 !== c2) cherries += grid[r1][c2];
        
        let max = 0;
        for (let dc1 = -1; dc1 <= 1; dc1++) {
            for (let dc2 = -1; dc2 <= 1; dc2++) {
                const nc1 = c1 + dc1;
                const nc2 = c2 + dc2;
                // Check if new positions are valid
                if (nc1 >= 0 && nc1 < cols && nc2 >= 0 && nc2 < cols) {
                    max = Math.max(max, maxCherries(r1 + 1, nc1, nc2));
                }
            }
        }
        
        dp[r1][c1][c2] = cherries + max;
        return dp[r1][c1][c2];
    };
    
    return maxCherries(0, 0, cols - 1);
};