const initialState = {};

export default function reducer(state = initialState, action: { type: string }) {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
}
