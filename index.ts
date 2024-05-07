/*
Notes: 
Each row starts and ends with a 1
*/

// Idea #1
// Create an empty nested array with pre defined lengths set to the value of 1 
// We know that the start and ends must be 1
// loop over the arrays and check the values located at the same index and the index minus 1 in the previous array this will give us the two values above our current
// if any of the checks are undefined we want to return 1



export const pascalsTriangle = (numOfRows: number) => {

    const matrix = new Array(numOfRows).fill([]).map((item, index) => new Array(index + 1).fill(1))

    // We know that the start will be 1 so we can start at the next index
    for (let i = 1; i < matrix.length; i++) {
        
        for (let j = 0; j < matrix[i].length; j++) {

            let upperLeft = matrix[i-1][j-1]
            let upperRight = matrix[i-1][j]

            // if either the left or right are undefined return 1 as we are at the edges of our triangle 
            if(!upperLeft || !upperRight){
                 matrix[i][j] = 1
            } else {
                // if the left or right value in the previous array are not undefined than change the current index to the sum of the two numbers.
                matrix[i][j] = upperLeft + upperRight
            }
            
        }
        
    }

    return matrix
}

console.log(pascalsTriangle(5));
