const rand = () => {
  return Math.floor(Math.random() * 1000);
};

const musicReducer = (state, action) => {
  if (action.type === "ADD_MUSIC_LIST") {
    return [
      ...state,
      {
        title: action.payload.title,
        artiste: action.payload.artiste,
        id: rand(),
      },
    ];
  }

  if (action.type === "REMOVE_MUSIC") {
    return state.filter((el) => el.id !== action.id);
  }
  return state;
};

export default musicReducer;
