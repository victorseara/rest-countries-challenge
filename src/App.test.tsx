import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import App from "./App";

const asyncRender = async (Element: React.ReactElement) => {
  render(Element);

  await waitFor(() => expect(screen.getByText(/finding/i)).toBeVisible());
};

it("should be possible to change theme ", async () => {
  await asyncRender(<App />);

  let theme = localStorage.getItem("theme");
  expect(theme).toEqual("light");

  userEvent.click(screen.getByRole("button", { name: /change theme/i }));
  theme = localStorage.getItem("theme");
  expect(theme).toEqual("dark");
});

it("should respect user preference", async () => {
  localStorage.setItem("theme", "dark");

  await asyncRender(<App />);

  userEvent.click(screen.getByRole("button", { name: /change theme/i }));
  const theme = localStorage.getItem("theme");
  expect(theme).toEqual("light");
});
