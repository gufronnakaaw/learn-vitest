import { describe, it } from 'vitest';

describe('SLOW TEST', () => {
  it('should pass in 3 seconds', async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  });
  it('should pass in 2 seconds', async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  });
  it('should pass in 1 second', async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  });
});
