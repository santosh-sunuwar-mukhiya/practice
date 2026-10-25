import Header from "./Header"
import Main from "./Main"
import Loader from "./Loader"
import Error from "./Error";
import {useReducer, useEffect} from "react"

const API = process.env.REACT_APP_API_URL;

const initialState = {
  questions: [],

  // loading, error, ready, active, finished
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    default:
      throw new Error("Unknown Action.");
  }
}

export default function App() {
  const [{question, status}, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    // const res = axios.get(`${API}`);

    fetch(API)
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "dataRecived",
          payload: data,
        }),
      )
      .catch((err) =>
        dispatch({
          type: "dataFailed",
        }),
      );
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {
          status === "loading" && <Loader />
        }
        {
          status === "error" && <Error />
        }
      </Main>
    </div>
  );
}