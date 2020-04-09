import React, { createContext, useState } from "react";

export const MusicContext = createContext();

const MusicContextProvider = ({ children }) => {
  const [music, setMusic] = useState([
    {
      title: "Could you be loved",
      artiste: "Bob Marley",
      id: 3,
    },
  ]);
  const rand = () => {
    return Math.floor(Math.random() * 1000);
  };
  const addMusic = (
    title = "Coming in from the cold",
    artiste = "Bob Marley"
  ) => {
    setMusic([...music, { title, artiste, id: rand() }]);
  };
  const removeMusic = (id) => {
    setMusic(music.filter((el) => el.id !== id));
  };

  return (
    <MusicContext.Provider value={{ music, addMusic, removeMusic }}>
      {children}
    </MusicContext.Provider>
  );
};

export default MusicContextProvider;
