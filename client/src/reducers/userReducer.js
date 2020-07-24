export const initialState = null;

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case 'USER':
    return { ...state, ...payload }
  case 'LOGOUT':
    return null
  default:
    return state
  }
}
