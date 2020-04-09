import React from "react";
import MusicContextProvider from "./context/MusicContext";
import Navbar from "./components/Navbar";
import MusicList from "./components/MusicList";
import MusicForm from "./components/MusicForm";

function App() {
  return (
    <div className="App">
      <MusicContextProvider>
        <Navbar />
        <MusicList />
        <MusicForm />
      </MusicContextProvider>
    </div>
  );
}

export default App;
