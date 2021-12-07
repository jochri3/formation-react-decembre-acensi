import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./";

test("renders envoyer", () => {
  render(<Button type="button" label="Envoyer" />);
  const buttonElement = screen.getByText(/Envoyer/);
  expect(buttonElement).toBeInTheDocument();
});
