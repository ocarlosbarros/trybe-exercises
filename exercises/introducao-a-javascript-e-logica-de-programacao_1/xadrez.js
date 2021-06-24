/***
 * @author Carlos Barros
 * @version 1.0.0
 * @since 06/23/2021
 */

let piece = 'KING'

switch (piece.toLowerCase()){
  case 'king':
  console.log('square in any direction');
  break;
  case 'rook':
  console.log('move any numbers of squares along a rank or file');
  break;
  case 'bishop':
  console.log('move any numbers of squares diagonally');
  break;
  case 'queen':
  console.log('any number of squares along a rank, file, or diagonal');
  break;
  case 'knight':
  console.log('move forms an "L"-shape');
  break;
  case 'pawn':
  console.log('move forward to the unoccupied square immediately in front of it on the same file, or on its first move it can advance two squares along the same file,');
  break;
  default:
  console.log('This piece is not valid!');
}