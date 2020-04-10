import React, { createContext, useReducer, useEffect } from "react";
import musicReducer from "../reducers/musicReducer";

export const MusicContext = createContext();

const MusicContextProvider = ({ children }) => {
  const [music, dispatch] = useReducer(musicReducer, [], () => {
    const storageData = localStorage.getItem("music");
    return storageData ? JSON.parse(storageData) : [];
  });

  useEffect(() => {
    localStorage.setItem("music", JSON.stringify(music));
  }, [music]);

  return (
    <MusicContext.Provider value={{ music, dispatch }}>
      {children}
    </MusicContext.Provider>
  );
};

export default MusicContextProvider;
