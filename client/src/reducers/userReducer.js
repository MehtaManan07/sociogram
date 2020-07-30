export const initialState = null;

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case 'USER':
    return { ...state, ...payload }
  case 'LOGOUT':
    return null
  case "UPDATE":
    return {
      ...state,
      followers: payload.followers,
      following: payload.following
    }
  default:
    return state
  }
}
