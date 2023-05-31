/*eslint-env node*/
/* global it, describe, expect*/

import supertest from 'supertest';
import app from '../app';

const request = supertest(app);

describe('Endpoint tests', () => {
  it('...testing GET /animals endpoint.', async () => {
    const response = await request.get('/animals');
    await expect(response.status).toBe(200);
  });
  it('...testing resizeTool.', async () => {
    const response = await request.get(
      '/animals/images?filename=camel.jpg&width=200&height=200'
    );
    await expect(response.status).toBe(200);
  });
  it('...testing when a query param is missing.', async () => {
    const response = await request.get('/animals/images?width=200&height=200');
    await expect(response.status).toBe(400);
  });
  it('...testing when a file is missing.', async () => {
    const response = await request.get(
      '/animals/images?filename=nonexistent&width=200&height=200'
    );
    await expect(response.status).toBe(400);
  });
});
