---
layout: default
title: Coin changer
---

**Challenge:** Correctly determine the fewest number of coins to be given to a customer such that the sum of the coins' value would equal the correct amount of change.

**For example:**

* An input of 15 with [1, 5, 10, 25, 100] should return one nickel (5) and one dime (10) or [5, 10]
* An input of 40 with [1, 5, 10, 25, 100] should return one nickel (5) and one dime (10) and one quarter (25) or [5, 10, 25]

**Edge cases:**

* Does your algorithm work for any given set of coins?
* Can you ask for negative change?
* Can you ask for a change value smaller than the smallest coin value?

When you finish, take a look at [this video of the kata](https://vimeo.com/53519408) and compare with your result. You can also [read this post](https://8thlight.com/blog/micah-martin/2012/11/17/transformation-priority-premise-applied.html
) using the kata to introduce the concept of transformation-priority premise.

**To practice:** Node

### Step by step instructions:

* Setup a new node project

* Make this test suite green:

```js
describe('Change', () => {
  it('calculates change for 1 cent', () => {
    let change = new Change();
    let result = change.calculate([1, 5, 10, 25], 1);
    expect(result).toEqual([1]);
  });

  xit('calculates single coin change', () => {
    let change = new Change();
    let result = change.calculate([1, 5, 10, 25, 100], 25);
    expect(result).toEqual([25]);
  });

  xit('calculates multiple coin change', () => {
    let change = new Change();
    let result = change.calculate([1, 5, 10, 25, 100], 15);
    expect(result).toEqual([5, 10]);
  });

  xit('calculates change with Lilliputian Coins where a greedy algorithm fails', () => {
    // https://en.wikipedia.org/wiki/Change-making_problem#Greedy_method
    let change = new Change();
    let result = change.calculate([1, 4, 15, 20, 50], 23);
    expect(result).toEqual([4, 4, 15]);
  });

  xit('calculates change with Lower Elbonia Coins where a greedy algorithm fails', () => {
    // https://en.wikipedia.org/wiki/Change-making_problem#Greedy_method
    let change = new Change();
    let result = change.calculate([1, 5, 10, 21, 25], 63);
    expect(result).toEqual([21, 21, 21]);
  });

  xit('calculates large amount of change', () => {
    let change = new Change();
    let result = change.calculate([1, 2, 5, 10, 20, 50, 100], 999);
    expect(result).toEqual([2, 2, 5, 20, 20, 50, 100, 100, 100, 100, 100, 100, 100, 100, 100]);
  });

  xit('calculates possible change without unit coins available', () => {
    let change = new Change();
    let result = change.calculate([2, 5, 10, 20, 50], 21);
    expect(result).toEqual([2, 2, 2, 5, 10]);
  });

  xit('calculates another possible change without unit coins available', () => {
    let change = new Change();
    let result = change.calculate([4, 5], 27);
    expect(result).toEqual([4, 4, 4, 5, 5, 5]);
  });

  xit('calculates no coins make 0 change', () => {
    let change = new Change();
    let result = change.calculate([1, 5, 10, 21, 25], 0);
    expect(result).toEqual([]);
  });

  xit('fails for change smaller than the smallest of coins', () => {
    let change = new Change();
    let message = 'The total 3 cannot be represented in the given currency.';
    let failure = () => { change.calculate([5, 10], 3); };
    expect(failure).toThrow(new Error(message));
  });

  xit('fails if no combination can add up to target', () => {
    let change = new Change();
    let message = 'The total 94 cannot be represented in the given currency.';
    let failure = () => { change.calculate([5, 10], 94); };
    expect(failure).toThrow(new Error(message));
  });

  xit('negative change is rejected', () => {
    let change = new Change();
    let message = 'Negative totals are not allowed.';
    let failure = () => { change.calculate([1, 2, 5], -5); };
    expect(failure).toThrow(new Error(message));
  });
});
```
