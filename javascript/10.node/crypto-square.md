---
layout: default
title: Crypto square
---

**Challenge:** Implement the classic method for composing secret messages called a square code.

Given an English text, output the encoded version of that text.

First, the input is normalized: the spaces and punctuation are removed from the English text and the message is downcased.

Then, the normalized characters are broken into rows. These rows can be regarded as forming a rectangle when printed with intervening newlines.

For example, the sentence:

```plaintext
'If man was meant to stay on the ground, god would have given us roots.'
```

is normalized to:

```plaintext
'ifmanwasmeanttostayonthegroundgodwouldhavegivenusroots'
```

The plaintext should be organized in to a rectangle. The size of the rectangle `r` x `c`, where `c` is the number of columns and `r` is the number of rows, should be decided by the length of the message, such that `c >= r` and `c - r <= 1`.

Our normalized text is 54 characters long, dictating a rectangle with `c = 8` and `r = 7`:

```plaintext
'ifmanwas'
'meanttos'
'tayonthe'
'groundgo'
'dwouldha'
'vegivenu'
'sroots  '
```

The coded message is obtained by reading down the columns going left to right.

The message above is coded as:

```plaintext
'imtgdvsfearwermayoogoanouuiontnnlvtwttddesaohghnsseoau'
```

Output the encoded text in chunks that fill perfect rectangles (`r` x `c`), with `c` chunks of `r` length, separated by spaces. For phrases that are `n` characters short of the perfect rectangle, pad each of the last `n` chunks with a single trailing space.

```plaintext
'imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn  sseoau '
```

Notice that were we to stack these, we could visually decode the ciphertext back in to the original message:

```plaintext
'imtgdvs'
'fearwer'
'mayoogo'
'anouuio'
'ntnnlvt'
'wttddes'
'aohghn '
'sseoau '
```

**To practice:** Node


### Step by step instructions:

* Setup a new node project

* Make this test suite green:

```js
describe('Crypto', () => {
  describe('#normalizePlaintext', () => {
    it('normalizes strange characters', () => {
      let crypto = new Crypto('s#$%^&plunk');
      expect(crypto.normalizePlaintext()).toEqual('splunk');
    });

    xit('normalizes numbers', () => {
      let crypto = new Crypto('1, 2, 3 GO!');
      expect(crypto.normalizePlaintext()).toEqual('123go');
    });
  });

  describe('#size', () => {
    xit('gets the size of small square', () => {
      let crypto = new Crypto('1234');
      expect(crypto.size()).toEqual(2);
    });

    xit('gets the size of small square with additional non-number chars', () => {
      let crypto = new Crypto('1 2 3 4');
      expect(crypto.size()).toEqual(2);
    });

    xit('gets the size of slightly larger square', () => {
      let crypto = new Crypto('123456789');
      expect(crypto.size()).toEqual(3);
    });

    xit('gets the size of non-perfect square', () => {
      let crypto = new Crypto('123456789abc');
      expect(crypto.size()).toEqual(4);
    });
  });

  describe('#plaintextSegments', () => {
    xit('calculates plain text segments', () => {
      let crypto = new Crypto('Never vex thine heart with idle woes');
      expect(crypto.plaintextSegments()).toEqual(['neverv', 'exthin', 'eheart', 'withid', 'lewoes']);
    });

    xit('calculates plain text segments in capslocks', () => {
      let crypto = new Crypto('ZOMG! ZOMBIES!!!');
      expect(crypto.plaintextSegments()).toEqual(['zomg', 'zomb', 'ies']);
    });
  });

  describe('#ciphertext', () => {
    xit('ciphers text', () => {
      let crypto = new Crypto('We all know interspecies romance is weird.');
      expect(crypto.ciphertext()).toEqual('wneiaweoreneawssciliprerlneoidktcms');
    });

    xit('ciphers sentences', () => {
      let crypto = new Crypto('Time is an illusion. Lunchtime doubly so.');
      expect(crypto.ciphertext()).toEqual('tasneyinicdsmiohooelntuillibsuuml');
    });
  });
});
```
