import React from "react";
import MusicContextProvider from "./context/MusicContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <MusicContextProvider>
        <Navbar />
      </MusicContextProvider>
    </div>
  );
}

export default App;
