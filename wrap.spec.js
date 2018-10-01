const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Breaks a string', () => {
    expect(wrap("I love potatoes too!", 10)).to.equal("I love po\ntatoes too!");
  });
});