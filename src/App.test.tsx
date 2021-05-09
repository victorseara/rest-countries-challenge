/* eslint-disable import/no-extraneous-dependencies */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

it('should be possible to change theme ', async () => {
  render(<App />);

  await waitFor(() => expect(screen.getByText(/finding/gi)).toBeVisible());
  await waitFor(() =>
    expect(screen.getAllByTestId('country-card')).toHaveLength(8)
  );

  let theme = localStorage.getItem('theme');
  expect(theme).toEqual('light');

  userEvent.click(screen.getByRole('button', { name: /change theme/gi }));
  theme = localStorage.getItem('theme');
  expect(theme).toEqual('dark');
});
