import React, { useContext, useState } from "react";
import { MusicContext } from "../context/MusicContext";

const MusicForm = () => {
  const { addMusic } = useContext(MusicContext);
  const [music, setMusic] = useState({
    title: "",
    artiste: "",
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setMusic({ ...music, [name]: value });
  };
  const submitFunc = (e) => {
    e.preventDefault();
    addMusic(music.title, music.artiste);
    setMusic({
      title: "",
      artiste: "",
    });
  };
  return (
    <form onSubmit={submitFunc}>
      <input
        type="text"
        placeholder="Music Title"
        name="title"
        value={music.title}
        onChange={handleOnChange}
      />
      <input
        type="text"
        placeholder="Artiste"
        name="artiste"
        value={music.artiste}
        onChange={handleOnChange}
      />
      <input type="submit" value="Add Music List" />
    </form>
  );
};

export default MusicForm;
