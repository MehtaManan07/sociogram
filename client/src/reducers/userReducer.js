export const initialState = null

export const reducer = (state, { type, payload }) => {
  if (type === "USER") {
    return payload;
  } else {
    return state;
  }
};
