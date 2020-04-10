import React, { useContext } from "react";
import { MusicContext } from "../context/MusicContext";

const MusicDetails = ({ music }) => {
  const { dispatch } = useContext(MusicContext);
  const remove = () => {
    return dispatch({ type: "REMOVE_MUSIC", id: music.id });
  };
  return (
    <li onClick={remove}>
      <div className="title">{music.title}</div>
      <div className="artiste">{music.artiste}</div>
    </li>
  );
};

export default MusicDetails;
