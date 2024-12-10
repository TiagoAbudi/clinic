import { useState } from "react";
import DataHora from "./components/DataHora/DataHora";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [mostraLogin, setMostraLogin] = useState(false);
  const currentURL = window.location.href;

  return (
    <>
      <div className="h-screen" style={{ display: mostraLogin ? "none" : "" }}>
        <NavBar />
        <div
          className="flex flex-col items-center justify-center h-5/6"
          style={{ display: currentURL.includes("inicio") ? "" : "none" }}
        >
          <img
            alt="Your Company"
            src="src/imgs/logo.png"
            className="h-20 w-auto"
          />
        </div>
        <div
          className="flex flex-col items-center justify-center h-5/6"
          style={{ display: currentURL.includes("horario") ? "" : "none" }}
        >
          <DataHora />
        </div>
      </div>

      <div style={{ display: mostraLogin ? "" : "none" }}>
        <Login />
      </div>
      <button onClick={() => setMostraLogin(!mostraLogin)}>aaa</button>
    </>
  );
};

export default App;
