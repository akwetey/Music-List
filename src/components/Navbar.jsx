import React, { useContext } from "react";
import { MusicContext } from "../context/MusicContext";

const Navbar = () => {
  const { music } = useContext(MusicContext);
  return (
    <div className="navbar">
      <h1>Reggae Music List</h1>
      <p>You have {music.length} currently</p>
    </div>
  );
};

export default Navbar;
