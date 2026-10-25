import { useEffect } from "react";
// import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const Main = ({ children }) => {
  useEffect(function () {
    // const res = axios.get(`${API}`);

    fetch(API)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return <div>{children}</div>;
};

export default Main;
