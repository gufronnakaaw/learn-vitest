import { describe, it } from 'vitest';

describe('MULTI THREAD', () => {
  it.concurrent('should pass in 3 seconds', async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  });
  it.concurrent('should pass in 2 seconds', async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  });
  it.concurrent('should pass in 1 second', async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  });
});
