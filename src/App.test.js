import { getByTestId, render, screen } from "@testing-library/react";

import App from "./App";

test("renders page title", () => {
  render(<App />);
  const titleElement = screen.getByText(/nasa picture of the day/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders date picker", () => {
  render(<App />);
  const datePickerEl = screen.getByLabelText(/date picker/i);
  expect(datePickerEl).toBeInTheDocument();
});

test("renders image title", () => {
  render(<App />);
  const imageTitleEl = screen.getByText(/image title/i);
  expect(imageTitleEl).toBeInTheDocument();
});

test("renders NASAs picture of the day", () => {
  render(<App />);
  const imageEl = screen.getByTestId("picture-of-the-day");
  expect(imageEl).toBeInTheDocument();
});

test("renders picture of the day description", () => {
  render(<App />);
  const descriptionEl = screen.getByTestId("description");
  expect(descriptionEl).toBeInTheDocument();
});

test("render footer", () => {
  render(<App />);
  const footerEl = screen.getByText(
    /project created during Wizeline Academy React Testing Bootcamp/i
  );
  expect(footerEl).toBeInTheDocument();
});
