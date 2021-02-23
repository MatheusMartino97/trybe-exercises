let piece = 'PawN'
const lowPiece = piece.toLowerCase()

switch (lowPiece) {
    case 'king':
    case 'rei':    
        console.log('One square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, know as castling.')
        break;
    
    case 'queen':
    case 'rainha':    
        console.log('Diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.')
        break;

    case 'bishop':
    case 'bispo':
        console.log('Diagonally any number of squares. They are unable to jump over pieces.')
        break

    case 'knight':
    case 'cavalo':
        console.log('In an "L" shape: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.')
        break
    
    case 'rook':
    case 'torre':
        console.log('Horizontally or vertically any number of squares. They are unable to jump over pieces. Rooks move when the king castles.')
        break
    
    case 'pawn':
    case 'peão':
        console.log('Vertically forward one square, with the option to move two squares if they have not yet moved. Pawns are the only piece to capture different to how they move. Pawns capture one square diagonally in a forward direction. Pawns are unable to move backwards on captures or moves. Upon reaching the other side of the board a pawn promotes into any other piece, except for a king. Additionally, pawns can make a special move named En Passant.')
        break

    default:
        console.log('Invalid piece')
        break;
}