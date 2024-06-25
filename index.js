const matrix = [
      [1,2,3],
      [4,5,6]
];  
function displayMatrix(matrix) {

  for (let i = 0; i < matrix.length; i++) {
    let row = "";
    for (let j = 0; j < matrix[i].length; j++) {
      
      row += matrix[i][j] + "\t"; 
    }   
    console.log(row);
  }
}
console.log("Matrix:");
displayMatrix(matrix);
