import { useState, useEffect } from "react";

function App() {
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
    <div className="App">
      <h1>Hello World</h1>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
