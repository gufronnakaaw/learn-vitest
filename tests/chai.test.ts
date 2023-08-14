import { assert, describe, expect, it } from 'vitest';

function sayHello(name: string): string {
  return `Hello ${name}!`;
}

describe('Say Hello', () => {
  it('should return with name', () => {
    // expect style
    expect(sayHello('John')).to.be.a('string', 'Hello John!');

    // assert style
    assert.equal(sayHello('Vania'), 'Hello Vania!');
  });
});
