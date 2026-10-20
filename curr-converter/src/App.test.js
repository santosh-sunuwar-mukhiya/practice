import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import App from "./App";

jest.mock("axios");

beforeEach(() => {
  jest.clearAllMocks();
});

test("converts the default amount", async () => {
  axios.get.mockResolvedValueOnce({ data: { rates: { EUR: 0.92 } } });
  render(<App />);

  expect(screen.getByRole("heading", { name: /currency converter/i })).toBeInTheDocument();
  expect(screen.getByText("Loading...")).toBeInTheDocument();
  await waitFor(() => expect(screen.getByText("Output: 0.92")).toBeInTheDocument());
  expect(axios.get).toHaveBeenCalledWith(
    "https://api.frankfurter.app/latest?amount=1&from=USD&to=EUR",
    expect.objectContaining({ signal: expect.any(AbortSignal) }),
  );
});

test("uses the amount directly when both currencies are the same", async () => {
  axios.get.mockResolvedValue({ data: { rates: { EUR: 0.92 } } });
  render(<App />);
  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
  jest.clearAllMocks();

  fireEvent.change(screen.getByRole("combobox", { name: "To currency" }), {
    target: { value: "USD" },
  });

  await waitFor(() => expect(screen.getByText("Output: 1")).toBeInTheDocument());
  expect(axios.get).not.toHaveBeenCalled();
});
