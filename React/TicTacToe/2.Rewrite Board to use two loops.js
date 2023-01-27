            {/*
                <div className='board-row'>
                <Square value={squares[0]} onSquareClick={()=> handleClick(0)} />
                <Square value={squares[1]} onSquareClick={()=> handleClick(1)} />
                <Square value={squares[2]} onSquareClick={()=> handleClick(2)} />
                </div>
                */}
            {/* <div className='board-row'>
                <Square value={squares[3]} onSquareClick={()=> handleClick(3)} />
                <Square value={squares[4]} onSquareClick={()=> handleClick(4)} />
                <Square value={squares[5]} onSquareClick={()=> handleClick(5)} />
            </div>
            <div className='board-row'>
                <Square value={squares[6]} onSquareClick={()=> handleClick(6)} />
                <Square value={squares[7]} onSquareClick={()=> handleClick(7)} />
                <Square value={squares[8]} onSquareClick={()=> handleClick(8)} />
            </div> */}

            const board = squares.map((square, index) => {
                return <Square key={index} value={square} onSquareClick={() => handleClick(index)} />;
            });
            let ROW = []
            board.forEach((item,index) => {
                if(index % 3=== 0) ROW.push([item,board[index+1],board[index+2]])
            });
        
            
           const BoardRow = ROW.map((row,index)=>{
            let SquareRows = []
              SquareRows.push(<div className='board-row' key={index}>{row}</div>)
             
            return SquareRows;
           })


           {BoardRow}