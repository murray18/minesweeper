import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMine: true,
    }
  };

  render() {
    var mine = this.props.isMine ? '1' : 'O';

    return (
      <button className="square">{mine}</button>
    );
  };
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square isMine={this.props.squares[i]} />
    )
  }

  render() {
      {
        var rows = Array();
        var size = this.props.squares.length;

        for(var x = 0; x < size; x++) {
          var rowCutoff = Math.sqrt(size);
          rows.push(this.renderSquare(x));
        };
      }
    return (
      <div>{rows}</div>

    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    var squaresArray = this.calculateSquares();
    console.log('squaresArray', squaresArray);

    this.state = {
      squares: squaresArray
    }
  }

  calculateSquares() {
    var boardSize = 10;
    var difficulty = 'difficult';
    var minePercentage = 10;

    var boardArray = Array(boardSize);
    var numMines = boardSize / minePercentage;

    for(var i = 0; i < numMines; i++) {
      var placement = Math.floor(Math.random() * boardSize);
      console.log('placement', placement);
      boardArray[placement] = true;
    }

    return boardArray;
  }

  render() {
    return (
      <div>
        <div>Welcome to Minesweeper</div>
        <Board
          squares = {this.state.squares}
        />
      </div>
    );
  }
}

// =====================================

 ReactDOM.render(
   <Game />,
     document.getElementById('root')
     );
