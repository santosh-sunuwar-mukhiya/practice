# Currency Converter

A small React currency converter that uses the [Frankfurter API](https://www.frankfurter.app/)
to convert between USD, EUR, CAD, and INR.

## Running the app

Install dependencies and start the development server:

```bash
npm install
npm start
```

Run the test suite:

```bash
npm test -- --watchAll=false
```

Create a production build:

```bash
npm run build
```

## What I learned

I learned about using `useEffect` and practicing by building small currency converter app.

The app uses `useEffect` to request a conversion whenever the amount or selected
currencies change. It also demonstrates loading and error states, request
cancellation, and avoiding unnecessary requests when both currencies match.
