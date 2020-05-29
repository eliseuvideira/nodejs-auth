import { request } from './request';

describe('auth', () => {
  it('should run without errors', async () => {
    expect.assertions(1);
    const res = await request.options('/');
    expect(res.status).toBe(204);
  });
});
