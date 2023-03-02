// Knight's node
class Knight {
    constructor(x,y,prev = null){
        this.x = x;
        this.y = y
        this.prev = prev;
    }

}

class Board{
    constructor(){
       this.head
    }

    // recursive function that returns an array with previous moves
    getPrevMove(current = this.head){
        if(current===null) return [];
        else{
            return[[current.x,current.y], ... this.getPrevMove(current.prev)]
        }
    }

    // a function that checks whether a move does not go beyond the boundaries of the board
    checkPossibleMove(arr){
       
        if(arr[0] < 0 || arr[0]>7 || arr[1] < 0 || arr[1]>7 )  return false
        return true
    }


    moveKnight(knightPose,endPose){
        
        // We check whether the initial and final positions are within the board
        if( !(this.checkPossibleMove(knightPose) && this.checkPossibleMove(endPose))){
            return false;
        }
   
        let knight = new Knight(knightPose[0],knightPose[1])

        // Distances a knight can walk
        let dx = [-2,-1,1,2, 2, 1,-1,-2]
        let dy = [ 1, 2,2,1,-1,-2,-2,-1]
        
        // We add the starting position to the queue
        let queue = [knight];

        // An array to check whether a move has been made to a certain cell
        let visited = [];


        for(let i = 0; i< 8; i++){
            visited[i] = [];
            for(let j = 0; j<8;j++){
                visited[i][j] = true;
            }
        }

        while(queue.length){

            // We take the first element from the queue
            let a = queue.shift()

            // We iterate through 8 possible moves
            for(let i=0; i < 8; i++){

                // Coordinates of the next move
                let nextX = a.x + dx[i]
                let nextY = a.y + dy[i]

                // Checking whether such a move can exist
                if(this.checkPossibleMove([nextX,nextY]) && visited[nextY][nextX] ){
                    visited[nextY][nextX] = false;

                    if(endPose[0]=== nextX && endPose[1]=== nextY){

                        this.head = a;
                        return [[endPose[0],endPose[1]],...this.getPrevMove()].reverse(); 
                    }
                        
                    let nextMove = new Knight(nextX,nextY,a)
                    // We add child elements to the queue
                    queue.push(nextMove);
                }
            }
        }
    }
}


let board = new Board();
console.log(board.moveKnight([0,0],[1,2]))//[[0,0],[1,2]]
console.log(board.moveKnight([-2,3],[4,3]))//false
console.log(board.moveKnight([1,3],[7,7]))//[[1,3],[2,5],[3,7],[5,6],[7,7]]



