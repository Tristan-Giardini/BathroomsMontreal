import { useState, useEffect } from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";

const App = () => {
  const [message, setMessage] = useState(false);
  useEffect(() => {
    fetch("/message").then((res) =>
      res
        .json()
        .then((data) => setMessage(data.message))
        .catch((e) => console.log("got error", e))
    );
  }, []);

  console.log(message);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <div className="App">
        <h1>Hello World</h1>
        <h1>{message}</h1>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
