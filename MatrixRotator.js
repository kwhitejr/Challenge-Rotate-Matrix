/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
exports.MatrixRotator = MatrixRotator;
var Direction = require("./Direction").Direction;

function MatrixRotator(matrix){
  this.matrix = matrix;

};

//                                         |-- Must be Direction.CW
//                                         v        or Direction.CCW
MatrixRotator.prototype.rotate = function(direction) {
  var newMatrix = [];
  for(var i = 0; i<this.matrix.length; i++) {
      newMatrix.push([]);
    }

  if (!Array.isArray(this.matrix)) {
    console.log('this is not an array');
    throw new Error;
  }

  if (this.matrix.length !== this.matrix[0].length) {
    console.log('this is not a valid matrix');
    throw new Error;
  }

  if (direction === Direction.CW) {

    for (var m = 0; m < this.matrix.length; m ++) {
      for(var k = 0; k<this.matrix.length; k++) {
       newMatrix[k].unshift(this.matrix[m][k]);
      }
    }
    console.log(newMatrix);
    this.matrix = newMatrix;
    return this.matrix;
  }

  if (direction === Direction.CCW) {

    for (var r = 0; r < this.matrix.length; r++) {
      for(var t = this.matrix.length - 1; t>=0; t--) {
        newMatrix[t].push(this.matrix[r][(this.matrix.length - 1) - t]);
      }
    }
    console.log(newMatrix);
    this.matrix = newMatrix;
    return this.matrix;
  }
};