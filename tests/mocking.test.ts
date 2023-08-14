import { describe, expect, it, vi } from 'vitest';

describe('mock', () => {
  function sayHello(name: string, callback: (message: string) => void) {
    callback(`Hello ${name}!`);
  }

  it('should mock', () => {
    const callback = vi.fn();
    sayHello('Cia', callback);
    expect(callback).toHaveBeenCalledWith('Hello Cia!');
  });
});
