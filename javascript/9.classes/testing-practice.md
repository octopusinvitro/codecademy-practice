---
layout: default
title: Testing practice
---

Below find some practice for the **process** of testing. The tests are already done for you. For each exercise, focus on one test at a time, and don't go to the next test until the current test is green. Go back and re-read the original post on [testing](9.classes/testing) as many times as you need.

For each exercise:
* Try to write the smallest possible amount of code to make the test pass.
* Run the tests constantly
* Check after you are green if you can refactor. Don't refactor if you are not green.

Create one repository for all the exercises. You can do each in a different file. Submit a separate PR for each exercise.

### RNA transcription

Given a DNA strand, return its RNA complement (per RNA transcription).

Both DNA and RNA strands are a sequence of nucleotides.
* The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).
* The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).

Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:

```plaintext
    G -> C
    C -> G
    T -> A
    A -> U
```

Tests:

```js

describe('Transcription', () => {
  let transcription;

  beforeEach(() => {
    transcription = new Transcription();
  });

  it('does nothing for an empty RNA sequence', () => {
    expect(transcription.toRNA('')).toEqual('');
  });

  xit('transcribes cytosine to guanine', () => {
    expect(transcription.toRNA('C')).toEqual('G');
  });

  xit('transcribes guanine to cytosine', () => {
    expect(transcription.toRNA('G')).toEqual('C');
  });

  xit('transcribes thymine to adenine', () => {
    expect(transcription.toRNA('T')).toEqual('A');
  });

  xit('transcribes adenine to uracil', () => {
    expect(transcription.toRNA('A')).toEqual('U');
  });

  xit('transcribes all DNA nucleotides to their RNA complements', () => {
    expect(transcription.toRNA('ACGTGGTCTTAA')).toEqual('UGCACCAGAAUU');
  });
})
```


### How old?

Given an age in seconds, calculate how old someone would be on:

* **Mercury:** orbital period **0.2408467** Earth years
* **Venus:** orbital period **0.61519726** Earth years
* **Earth:** orbital period **1.0** Earth years, 365.25 Earth days, or **31,557,600** seconds
* **Mars:** orbital period **1.8808158** Earth years
* **Jupiter:** orbital period **11.862615** Earth years
* **Saturn:** orbital period **29.447498** Earth years
* **Uranus:** orbital period **84.016846** Earth years
* **Neptune:** orbital period **164.79132** Earth years

So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31.69 Earth-years old.

Tests:

```js
describe('Space Age', () => {
  let spaceage;

  beforeEach(() => {
    spaceage = new SpaceAge();
  });

  it('calculates age on Earth', () => {
    expect(spaceage.age('earth', 1000000000)).toEqual(31.69);
  });

  xit('calculates age on Mercury', () => {
    expect(spaceage.age('mercury', 2134835688)).toEqual(280.88);
  });

  xit('calculates age on Venus', () => {
    expect(spaceage.age('venus', 189839836)).toEqual(9.78);
  });

  xit('calculates age on Mars', () => {
    expect(spaceage.age('mars', 2129871239)).toEqual(35.88);
  });

  xit('calculates age on Jupiter', () => {
    expect(spaceage.age('jupiter', 901876382)).toEqual(2.41);
  });

  xit('calculates age on Saturn', () => {
    expect(spaceage.age('saturn', 2000000000)).toEqual(2.15);
  });

  xit('calculates age on Uranus', () => {
    expect(spaceage.age('uranus', 1210123456)).toEqual(0.46);
  });

  xit('calculates age on Neptune', () => {
    expect(spaceage.age('neptune', 1821023456)).toEqual(0.35);
  });
});
```

### Atbash Cipher

Create an implementation of the Atbash cipher, an ancient encryption system created in the Middle East.

The Atbash cipher is a simple substitution cipher that relies on transposing all the letters in the alphabet such that the resulting alphabet is backwards. The first letter is replaced with the last letter, the second with the second-last, and so on.

An Atbash cipher for the Latin alphabet would be as follows:

```plaintest
Plain:  abcdefghijklmnopqrstuvwxyz
Cipher: zyxwvutsrqponmlkjihgfedcba
```

It is a very weak cipher because it only has one possible key, and it is a simple monoalphabetic substitution cipher. However, this may not have been an issue in the cipher's time.

Ciphertext is written out in groups of fixed length, the traditional group size being 5 letters, and punctuation is excluded. This is to make it harder to guess things based on word boundaries.

Examples:

* Encoding **test** gives **gvhg**
* Decoding **gvhg** gives **test**
* Decoding **gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt** gives **thequickbrownfoxjumpsoverthelazydog**

Tests:

You will implement two methods, `encode` and `decode`. These tests have two describes, one for each method. When describing instance methods in tests, the convention is to use `#` + the name of the method, for example, `describe('#encode', () => {})`. For class methods, we use a `.` + the name of the method.

```js
describe('Atbash Cipher', () => {
  let cipher;

  beforeEach(() => {
    cipher = new AtbashCipher();
  });

  describe('#encode', () => {
    it('encodes yes', () => {
      expect(cipher.encode('yes')).toEqual('bvh');
    });

    xit('encodes no', () => {
      expect(cipher.encode('no')).toEqual('ml');
    });

    xit('encodes OMG', () => {
      expect(cipher.encode('OMG')).toEqual('lnt');
    });

    xit('encodes spaces', () => {
      expect(cipher.encode('O M G')).toEqual('lnt');
    });

    xit('encodes mindblowingly', () => {
      expect(cipher.encode('mindblowingly')).toEqual('nrmwy oldrm tob');
    });

    xit('encodes numbers', () => {
      expect(cipher.encode('Testing,1 2 3, testing.')).toEqual('gvhgr mt123 gvhgr mt');
    });

    xit('encodes deep thought', () => {
      expect(cipher.encode('Truth is fiction.')).toEqual('gifgs rhurx grlm');
    });

    xit('encodes all the letters', () => {
      const messageToEncode = 'The quick brown fox jumps over the lazy dog.';
      const encodedMessage = 'gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt';
      expect(cipher.encode(messageToEncode)).toEqual(encodedMessage);
    });
  });

  describe('#decode', () => {
    xit('decodes exercism', () => {
      expect(cipher.decode('vcvix rhn')).toEqual('exercism');
    });

    xit('decodes a sentence', () => {
      const messageToDecode = 'zmlyh gzxov rhlug vmzhg vkkrm thglm v';
      const decodedMessage = 'anobstacleisoftenasteppingstone';
      expect(cipher.decode(messageToDecode)).toEqual(decodedMessage);
    });

    xit('decodes numbers', () => {
      expect(cipher.decode('gvhgr mt123 gvhgr mt')).toEqual('testing123testing');
    });

    xit('decodes all the letters', () => {
      const messageToDecode = 'gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt';
      const decodedMessage = 'thequickbrownfoxjumpsoverthelazydog';
      expect(cipher.decode(messageToDecode)).toEqual(decodedMessage);
    });

    xit('decodes with too many spaces', () => {
      expect(cipher.decode('vc vix    r hn')).toEqual('exercism');
    });

    xit('decodes with no spaces', () => {
      const messageToDecode = 'zmlyhgzxovrhlugvmzhgvkkrmthglmv';
      const decodedMessage = 'anobstacleisoftenasteppingstone';
      expect(cipher.decode(messageToDecode)).toEqual(decodedMessage);
    });
  });
});
```

### Hamming distance:

Calculate the Hamming Distance between two DNA strands.

Your body is made up of cells that contain DNA. Those cells regularly wear out and need replacing, which they achieve by dividing into daughter cells. In fact, the average human body experiences about 10 quadrillion cell divisions in a lifetime!

When cells divide, their DNA replicates too. Sometimes during this process mistakes happen and single pieces of DNA get encoded with the incorrect information. If we compare two strands of DNA and count the differences between them we can see how many mistakes occurred. This is known as the "**Hamming Distance**".

We read DNA using the letters `C`, `A`, `G` and `T`. Two strands might look like this:

```plaintext
GAGCCTACTAACGGGAT
CATCGTAATGACGGCCT
^ ^ ^  ^ ^    ^^
```

They have 7 differences, and therefore the Hamming Distance is 7.

The Hamming Distance is useful for lots of things in science, not just biology, so it's a nice phrase to be familiar with :)

#### Implementation notes

The Hamming distance is only defined for sequences of equal length, so an attempt to calculate it between sequences of different lengths should not work. Raise an error if this happens. Read the documentation on how to throw an error [in the MDN dedicated page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw).

```js
describe('Hamming', () => {
  let hamming;

  beforeEach(() => {
    hamming = new Hamming();
  });

  it('computes empty strands', () => {
    expect(hamming.compute('', '')).toEqual(0);
  });

  xit('computes single letter identical strands', () => {
    expect(hamming.compute('A', 'A')).toEqual(0);
  });

  xit('computes single letter different strands', () => {
    expect(hamming.compute('G', 'T')).toEqual(1);
  });

  xit('computes long identical strands', () => {
    expect(hamming.compute('GGACTGAAATCTG', 'GGACTGAAATCTG')).toEqual(0);
  });

  xit('computes long different strands', () => {
    expect(hamming.compute('GGACGGATTCTG', 'AGGACGGATTCT')).toEqual(9);
  });

  xit('disallows when first strand is longer', () => {
    expect(() => hamming.compute('AATG', 'AAA')).toThrow(
      new Error('left and right strands must be of equal length'),
    );
  });

  xit('disallows when second strand is longer', () => {
    expect(() => hamming.compute('ATA', 'AGTG')).toThrow(
      new Error('left and right strands must be of equal length'),
    );
  });

  xit('disallows when left strand is empty', () => {
    expect(() => hamming.compute('', 'G')).toThrow(
      new Error('left strand must not be empty'),
    );
  });

  xit('disallows when right strand is empty', () => {
    expect(() => hamming.compute('G', '')).toThrow(
      new Error('right strand must not be empty'),
    );
  });
});
```

### Teenage AI

Bob is a lackadaisical teenager. In conversation, his responses are very limited.

Bob answers '_Sure._' if you ask him a question.  
He answers '_Whoa, chill out!_' if you yell at him.  
He retorts '_Calm down, I know what I'm doing!_' if you yell a question at him.  
He says '_Fine. Be that way!_' if you address him without actually saying anything.  
He answers '_Whatever._' to anything else.

```js
describe('Bob', () => {
  let bob;

  beforeEach(() => {
    bob = new Bob();
  });

  it('replies to stating something', () => {
    const reply = bob.hey('Tom-ay-to, tom-aaaah-to.');
    expect(reply).toEqual('Whatever.');
  });

  xit('replies to shouting', () => {
    const reply = bob.hey('WATCH OUT!');
    expect(reply).toEqual('Whoa, chill out!');
  });

  xit('replies to shouting gibberish', () => {
    const reply = bob.hey('FCECDFCAAB');
    expect(reply).toEqual('Whoa, chill out!');
  });

  xit('replies to asking a question', () => {
    const reply = bob.hey('Does this cryogenic chamber make me look fat?');
    expect(reply).toEqual('Sure.');
  });

  xit('replies to asking a numeric question', () => {
    const reply = bob.hey('You are, what, like 15?');
    expect(reply).toEqual('Sure.');
  });

  xit('replies to asking gibberish', () => {
    const reply = bob.hey('fffbbcbeab?');
    expect(reply).toEqual('Sure.');
  });

  xit('replies to talking forcefully', () => {
    const reply = bob.hey("Let's go make out behind the gym!");
    expect(reply).toEqual('Whatever.');
  });

  xit('replies to using acronyms in regular speech', () => {
    const reply = bob.hey("It's OK if you don't want to go to the DMV.");
    expect(reply).toEqual('Whatever.');
  });

  xit('replies to forceful question', () => {
    const reply = bob.hey('WHAT THE HELL WERE YOU THINKING?');
    expect(reply).toEqual('Calm down, I know what I\'m doing!');
  });

  xit('replies to shouting numbers', () => {
    const reply = bob.hey('1, 2, 3 GO!');
    expect(reply).toEqual('Whoa, chill out!');
  });

  xit('replies to only numbers', () => {
    const reply = bob.hey('1, 2, 3');
    expect(reply).toEqual('Whatever.');
  });

  xit('replies to question with only numbers', () => {
    const reply = bob.hey('4?');
    expect(reply).toEqual('Sure.');
  });

  xit('replies to shouting with special characters', () => {
    const reply = bob.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!');
    expect(reply).toEqual('Whoa, chill out!');
  });

  xit('replies to shouting with no exclamation mark', () => {
    const reply = bob.hey('I HATE YOU');
    expect(reply).toEqual('Whoa, chill out!');
  });

  xit('replies to statement containing question mark', () => {
    const reply = bob.hey('Ending with a ? means a question.');
    expect(reply).toEqual('Whatever.');
  });

  xit('replies to non-letters with question', () => {
    const reply = bob.hey(':) ?');
    expect(reply).toEqual('Sure.');
  });

  xit('replies to prattling on', () => {
    const reply = bob.hey('Wait! Hang on. Are you going to be OK?');
    expect(reply).toEqual('Sure.');
  });

  xit('replies to silence', () => {
    const reply = bob.hey('');
    expect(reply).toEqual('Fine. Be that way!');
  });

  xit('replies to prolonged silence', () => {
    const reply = bob.hey('          ');
    expect(reply).toEqual('Fine. Be that way!');
  });

  xit('replies to alternate silence', () => {
    const reply = bob.hey("\t\t\t\t\t\t\t\t\t\t");
    expect(reply).toEqual('Fine. Be that way!');
  });

  xit('replies to multiple line question', () => {
    const reply = bob.hey("\nDoes this cryogenic chamber make me look fat?\nno");
    expect(reply).toEqual('Whatever.');
  });

  xit('replies to starting with whitespace', () => {
    const reply = bob.hey('         hmmmmmmm...');
    expect(reply).toEqual('Whatever.');
  });

  xit('replies to ending with whitespace', () => {
    const reply = bob.hey('Okay if like my  spacebar  quite a bit?   ');
    expect(reply).toEqual('Sure.');
  });

  xit('replies to other whitespace', () => {
    const reply = bob.hey("\n\r \t");
    expect(reply).toEqual('Fine. Be that way!');
  });

  xit('replies to non-question ending with whitespace', () => {
    const reply = bob.hey('This is a statement ending with whitespace      ');
    expect(reply).toEqual('Whatever.');
  });
});
```
