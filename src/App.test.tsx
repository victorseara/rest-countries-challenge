import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import App from "./App";

const asyncRender = async (Element: React.ReactElement) => {
  render(Element);

  await waitFor(() => expect(screen.getByText(/finding/gi)).toBeVisible());
  await waitFor(() =>
    expect(screen.getAllByTestId("country-card")).toHaveLength(8)
  );
};

it("should be possible to change theme ", async () => {
  await asyncRender(<App />);

  let theme = localStorage.getItem("theme");
  expect(theme).toEqual("light");

  userEvent.click(screen.getByRole("button", { name: /change theme/gi }));
  theme = localStorage.getItem("theme");
  expect(theme).toEqual("dark");
});

it("should respect user preference", async () => {
  localStorage.setItem("theme", "dark");

  await asyncRender(<App />);

  userEvent.click(screen.getByRole("button", { name: /change theme/gi }));
  const theme = localStorage.getItem("theme");
  expect(theme).toEqual("light");
});

it("should be possible to navigate to all routes", async () => {
  await asyncRender(<App />);

  const country = { name: "Brazil", alpha3Code: "BRA" };

  userEvent.type(screen.getByRole("textbox"), country.name);
  await waitFor(() =>
    expect(screen.getByRole("heading", { name: country.name })).toBeVisible()
  );

  userEvent.tab();
  userEvent.tab();
  expect(screen.getByTestId("country-card")).toHaveFocus();
  fireEvent.keyDown(screen.getByTestId("country-card"), {
    key: "Enter",
    code: "Enter",
  });

  await waitFor(() =>
    expect(screen.getByRole("button", { name: /back/gi })).toBeVisible()
  );

  userEvent.click(screen.getByRole("button", { name: /where in the world/gi }));

  await waitFor(() => expect(screen.getByText(/finding/gi)).toBeVisible());
  await waitFor(() => expect(screen.getByRole("textbox")).toBeVisible());
});
