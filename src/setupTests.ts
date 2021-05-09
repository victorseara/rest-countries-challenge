// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import MockIntersectionObserver from 'mocks/MockIntersectionObserver';
import LocalStorageMock from 'mocks/MockLocalStorage';

import { server } from 'mocks/server';

beforeAll(() => {
  window.IntersectionObserver = MockIntersectionObserver;
  window.IntersectionObserverEntry = jest.fn();
  global.localStorage = new LocalStorageMock();
  server.listen();
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
