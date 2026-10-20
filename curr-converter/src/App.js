import { useEffect, useState } from "react";
import axios from "axios";

const currencies = ["USD", "EUR", "CAD", "INR"];

export default function App() {
  const [fromCurr, setFromCurr] = useState("USD");
  const [toCurr, setToCurr] = useState("EUR");
  const [amount, setAmount] = useState("1");
  const [converted, setConverted] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const numericAmount = Number(amount);

    if (amount === "" || !Number.isFinite(numericAmount) || numericAmount < 0) {
      setConverted(null);
      setError("");
      setLoading(false);
      return () => controller.abort();
    }

    if (fromCurr === toCurr) {
      setConverted(numericAmount);
      setError("");
      setLoading(false);
      return () => controller.abort();
    }

    async function convertCurrency() {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get(
          `https://api.frankfurter.app/latest?amount=${numericAmount}&from=${fromCurr}&to=${toCurr}`,
          { signal: controller.signal },
        );
        const convertedAmount = res.data.rates[toCurr];
        if (!Number.isFinite(convertedAmount)) {
          throw new Error("The currency service returned an invalid rate.");
        }
        setConverted(convertedAmount);
      } catch (err) {
        if (!controller.signal.aborted) {
          setConverted(null);
          setError("Unable to convert currencies. Please try again.");
        }
      } finally {
        if (!controller.signal.aborted) {
            setLoading(false);
          }
        }
    }

    convertCurrency();
    return () => controller.abort();
  }, [amount, fromCurr, toCurr]);

  return (
    <main>
      <h1>Currency Converter</h1>
      <input
        aria-label="Amount"
        type="number"
        min="0"
        step="any"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        aria-label="From currency"
        onChange={(e) => setFromCurr(e.target.value)}
        value={fromCurr}
      >
        {currencies.map((currency) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>

      <select
        aria-label="To currency"
        onChange={(e) => setToCurr(e.target.value)}
        value={toCurr}
      >
        {currencies.map((currency) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>

      <p aria-live="polite">
        {loading
          ? "Loading..."
          : error
            ? error
            : converted === null
              ? "Enter a valid amount."
              : `Output: ${converted}`}
      </p>
    </main>
  );
}
