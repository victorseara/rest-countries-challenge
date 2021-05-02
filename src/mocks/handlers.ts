import { rest } from 'msw';

export const handlers = [
  rest.get('/countries', (_, res, ctx) => res(ctx.status(200), ctx.json({}))),
];
