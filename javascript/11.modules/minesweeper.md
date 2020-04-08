---
layout: default
title: Minesweeper
---

**Challenge:** Add the mine counts to a completed Minesweeper board.

Minesweeper is a popular game where the user has to find the mines using numeric hints that indicate how many mines are directly adjacent (horizontally, vertically, diagonally) to a square.

In this exercise you have to create some code that counts the number of mines adjacent to a given empty square and replaces that square with the count.

The board is a rectangle composed of blank space (' ') characters. A mine is represented by an asterisk ('*') character.

If a given space has no adjacent mines at all, leave that square blank.

**Examples:**

For example you may receive a 5 x 4 board like this (empty spaces are represented here with the '·' character for display on screen):

```plaintext
· * · * ·
· · * · ·
· · * · ·
· · · · ·
```

And your code will transform it into this:

```plaintext
1 * 3 * 1
1 3 * 3 1
· 2 * 2 ·
· 1 1 1 ·
```

Feel free to draw the board in a piece of paper to make sense of the tests!

**To practice:** Modules


### Step by step instructions:

* Setup a new node project

* Make this test suite green:

```js
import { Minesweeper } from './minesweeper';

describe('Minesweeper', () => {
  it('handles no rows', () => {
    expect((new Minesweeper()).annotate([])).toEqual([]);
  });

  xit('handles no columns', () => {
    expect((new Minesweeper()).annotate([''])).toEqual(['']);
  });

  xit('handles no mines', () => {
    let input = ['   ', '   ', '   '];
    let expected = ['   ', '   ', '   '];
    expect((new Minesweeper()).annotate(input)).toEqual(expected);
  });

  xit('handles minefield with only mines', () => {
    let input = ['***', '***', '***'];
    let expected = ['***', '***', '***'];
    expect((new Minesweeper()).annotate(input)).toEqual(expected);
  });

  xit('handles mine surrounded by spaces', () => {
    let input = ['   ', ' * ', '   '];
    let expected = ['111', '1*1', '111'];
    expect((new Minesweeper()).annotate(input)).toEqual(expected);
  });

  xit('handles space surrounded by mines', () => {
    let input = ['***', '* *', '***'];
    let expected = ['***', '*8*', '***'];
    expect((new Minesweeper()).annotate(input)).toEqual(expected);
  });

  xit('handles horizontal line', () => {
    let input = [' * * '];
    let expected = ['1*2*1'];
    expect((new Minesweeper()).annotate(input)).toEqual(expected);
  });

  xit('handles horizontal line, mines at edges', () => {
    let input = ['*   *'];
    let expected = ['*1 1*'];
    expect((new Minesweeper()).annotate(input)).toEqual(expected);
  });

  xit('handles vertical line', () => {
    let input = [' ', '*', ' ', '*', ' '];
    let expected = ['1', '*', '2', '*', '1'];
    expect((new Minesweeper()).annotate(input)).toEqual(expected);
  });

  xit('handles vertical line, mines at edges', () => {
    let input = ['*', ' ', ' ', ' ', '*'];
    let expected = ['*', '1', ' ', '1', '*'];
    expect((new Minesweeper()).annotate(input)).toEqual(expected);
  });

  xit('handles cross', () => {
    let input = ['  *  ', '  *  ', '*****', '  *  ', '  *  '];
    let expected = [' 2*2 ', '25*52', '*****', '25*52', ' 2*2 '];
    expect((new Minesweeper()).annotate(input)).toEqual(expected);
  });

  xit('handles large minefield', () => {
    let input = [' *  * ', '  *   ', '    * ', '   * *', ' *  * ', '      '];
    let expected = [
      '1*22*1',
      '12*322',
      ' 123*2',
      '112*4*',
      '1*22*2',
      '111111',
    ];
    expect((new Minesweeper()).annotate(input)).toEqual(expected);
  });
});
```
