---
layout: default
title: Connect (game)
---

**Challenge:** Compute the result for a game of Hex / Polygon.

The abstract boardgame known as Hex / Polygon / CON-TAC-TIX is quite simple in rules, though complex in practice. Two players place stones on a rhombus with hexagonal fields. The player to connect his/her stones to the opposite side first wins. The four sides of the rhombus are divided between the two players (i.e. one player gets assigned a side and the side directly opposite it and the other player gets assigned the two other sides).

Your goal is to build a program that given a simple representation of a board computes the winner (or lack thereof). Note that all games need not be "fair". (For example, players may have mismatched piece counts.)

The boards look like this (with spaces added for readability, which won't be in the representation passed to your code):

```plaintext
. O . X .
 . X X O .
  O O O X .
   . X O X O
    X O O O X
```

"Player O" plays from top to bottom, "Player X" plays from left to right. In the above example O has made a connection from left to right but nobody has won since O didn't connect top and bottom.

**To practice:** Modules


### Step by step instructions:

* Setup a new node project

* Make this test suite green:

```js
import { Board } from './board';

describe('Board', () => {
  describe('#winner', () => {
    it('X can win on a 1x1 board', () => {
      let board = [
        'X',
      ];
      expect((new Board(board)).winner()).toEqual('X');
    });

    xit('O can win on a 1x1 board', () => {
      let board = [
        'O',
      ];
      expect((new Board(board)).winner()).toEqual('O');
    });

    xit('has no winner for an empty board', () => {
      let board = [
        '. . . . .',
        ' . . . . .',
        '  . . . . .',
        '   . . . . .',
        '    . . . . .',
      ];
      expect((new Board(board)).winner()).toEqual('');
    });

    xit('does not make a winner for only edges', () => {
      let board = [
        'O O O X',
        ' X . . X',
        '  X . . X',
        '   X O O O',
      ];
      expect((new Board(board)).winner()).toEqual('');
    });

    xit('does not make a winner for illegal diagonal', () => {
      let board = [
        'X O . .',
        ' O X X X',
        '  O X O .',
        '   . O X .',
        '    X X O O',
      ];
      expect((new Board(board)).winner()).toEqual('');
    });

    xit('lets nobody win crossing adjacent angles', () => {
      let board = [
        'X . . .',
        ' . X O .',
        '  O . X O',
        '   . O . X',
        '    . . O .',
      ];
      expect((new Board(board)).winner()).toEqual('');
    });

    xit('lets X win crossing from left to right', () => {
      let board = [
        '. O . .',
        ' O X X X',
        '  O X O .',
        '   X X O X',
        '    . O X .',
      ];
      expect((new Board(board)).winner()).toEqual('X');
    });

    xit('lets O win crossing from top to bottom', () => {
      let board = [
        '. O . .',
        ' O X X X',
        '  O O O .',
        '   X X O X',
        '    . O X .',
      ];
      expect((new Board(board)).winner()).toEqual('O');
    });

    xit('lets X win using a convoluted path', () => {
      let board = [
        '. X X . .',
        ' X . X . X',
        '  . X . X .',
        '   . X X . .',
        '    O O O O O',
      ];
      expect((new Board(board)).winner()).toEqual('X');
    });

    xit('lets X win using a spiral path', () => {
      let board = [
        'O X X X X X X X X',
        ' O X O O O O O O O',
        '  O X O X X X X X O',
        '   O X O X O O O X O',
        '    O X O X X X O X O',
        '     O X O O O X O X O',
        '      O X X X X X O X O',
        '       O O O O O O O X O',
        '        X X X X X X X X O',
      ];
      expect((new Board(board)).winner()).toEqual('X');
    });
  });
});
```
