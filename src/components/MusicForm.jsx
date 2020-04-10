import React, { useContext, useState } from "react";
import { MusicContext } from "../context/MusicContext";

const MusicForm = () => {
  const { dispatch } = useContext(MusicContext);
  const [music, setMusic] = useState({
    title: "",
    artiste: "",
  });
  const { title, artiste } = music;
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setMusic({ ...music, [name]: value });
  };
  const submitFunc = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_MUSIC_LIST",
      payload: {
        title,
        artiste,
      },
    });
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
        value={title}
        onChange={handleOnChange}
        required
      />
      <input
        type="text"
        placeholder="Artiste"
        name="artiste"
        value={artiste}
        onChange={handleOnChange}
        required
      />
      <input type="submit" value="Add Music List" />
    </form>
  );
};

export default MusicForm;
