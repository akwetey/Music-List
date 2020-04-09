import React, { useContext } from "react";
import MusicDetails from "./MusicDetails";
import { MusicContext } from "../context/MusicContext";

const MusicList = () => {
  const { music } = useContext(MusicContext);
  return music.length ? (
    <div className="music-list">
      <ul>
        {music.map((mus) => {
          return <MusicDetails music={mus} key={mus.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No Music</div>
  );
};
export default MusicList;
