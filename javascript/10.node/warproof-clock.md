---
layout: default
title: Warproof clock
---

**Challenge:** Implement a clock that handles times in AM and PM without dates. It takes an integer representing the hour and an integer representing the minutes as arguments.

You should be able to add and subtract minutes to it.

**To practice:** Node


### Step by step instructions

* Setup a new node project

* Make this test suite green:

```js
describe('Clock', () => {
  describe('#toString', () => {
    it('supports on the hour', () => {
      expect((new Clock(8)).toString()).toEqual('08:00');
    });

    xit('supports past the hour', () => {
      expect((new Clock(11, 9)).toString()).toEqual('11:09');
    });

    xit('supports midnight is zero hours', () => {
      expect((new Clock(24, 0)).toString()).toEqual('00:00');
    });

    xit('supports hour rolls over', () => {
      expect((new Clock(25, 0)).toString()).toEqual('01:00');
    });

    xit('supports hour rolls over continuously', () => {
      expect((new Clock(100, 0)).toString()).toEqual('04:00');
    });

    xit('supports sixty minutes is next hour', () => {
      expect((new Clock(1, 60)).toString()).toEqual('02:00');
    });

    xit('supports minutes roll over', () => {
      expect((new Clock(0, 160)).toString()).toEqual('02:40');
    });

    xit('supports minutes roll over continuously', () => {
      expect((new Clock(0, 1723)).toString()).toEqual('04:43');
    });

    xit('supports hour and minutes roll over', () => {
      expect((new Clock(25, 160)).toString()).toEqual('03:40');
    });

    xit('supports hour and minutes roll over continuously', () => {
      expect((new Clock(201, 3001)).toString()).toEqual('11:01');
    });

    xit('supports hour and minutes roll over to exactly midnight', () => {
      expect((new Clock(72, 8640)).toString()).toEqual('00:00');
    });

    xit('supports negative hour', () => {
      expect((new Clock(-1, 15)).toString()).toEqual('23:15');
    });

    xit('supports negative hour rolls over', () => {
      expect((new Clock(-25, 0)).toString()).toEqual('23:00');
    });

    xit('supports negative hour rolls over continuously', () => {
      expect((new Clock(-91, 0)).toString()).toEqual('05:00');
    });

    xit('supports negative minutes', () => {
      expect((new Clock(1, -40)).toString()).toEqual('00:20');
    });

    xit('supports negative minutes rolls over', () => {
      expect((new Clock(1, -160)).toString()).toEqual('22:20');
    });

    xit('supports negative minutes rolls over continuously', () => {
      expect((new Clock(1, -4820)).toString()).toEqual('16:40');
    });

    xit('supports negative sixty minutes is previous hour', () => {
      expect((new Clock(2, -60)).toString()).toEqual('01:00');
    });

    xit('supports negative hour and minutes both roll over', () => {
      expect((new Clock(-25, -160)).toString()).toEqual('20:20');
    });

    xit('supports negative hour and minutes both roll over continuously', () => {
      expect((new Clock(-121, -5810)).toString()).toEqual('22:10');
    });
  });

  describe('#plus', () => {
    xit('adds minutes', () => {
      expect((new Clock(10, 0)).plus(3).toString()).toEqual('10:03');
    });

    xit('adds no minutes', () => {
      expect((new Clock(6, 41)).plus(0).toString()).toEqual('06:41');
    });

    xit('adds to next hour', () => {
      expect((new Clock(0, 45)).plus(40).toString()).toEqual('01:25');
    });

    xit('adds more than one hour', () => {
      expect((new Clock(10, 0)).plus(61).toString()).toEqual('11:01');
    });

    xit('adds more than two hours with carry', () => {
      expect((new Clock(0, 45)).plus(160).toString()).toEqual('03:25');
    });

    xit('adds across midnight', () => {
      expect((new Clock(23, 59)).plus(2).toString()).toEqual('00:01');
    });

    xit('adds more than one day (1500 min = 25 hrs)', () => {
      expect((new Clock(5, 32)).plus(1500).toString()).toEqual('06:32');
    });

    xit('adds more than two days', () => {
      expect((new Clock(1, 1)).plus(3500).toString()).toEqual('11:21');
    });
  });

  describe('#minus', () => {
    xit('subtracts minutes', () => {
      expect((new Clock(10, 3)).minus(3).toString()).toEqual('10:00');
    });

    xit('subtracts to previous hour', () => {
      expect((new Clock(10, 3)).minus(30).toString()).toEqual('09:33');
    });

    xit('subtracts more than an hour', () => {
      expect((new Clock(10, 3)).minus(70).toString()).toEqual('08:53');
    });

    xit('subtracts across midnight', () => {
      expect((new Clock(0, 3)).minus(4).toString()).toEqual('23:59');
    });

    xit('subtracts more than two hours', () => {
      expect((new Clock(0, 0)).minus(160).toString()).toEqual('21:20');
    });

    xit('subtracts more than two hours with borrow', () => {
      expect((new Clock(6, 15)).minus(160).toString()).toEqual('03:35');
    });

    xit('subtracts more than one day (1500 min = 25 hrs)', () => {
      expect((new Clock(5, 32)).minus(1500).toString()).toEqual('04:32');
    });

    xit('subtracts more than two days', () => {
      expect((new Clock(2, 20)).minus(3000).toString()).toEqual('00:20');
    });
  });
});
```
