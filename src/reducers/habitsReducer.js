import { CREATE_HABIT } from '../actions/habitActions';

const initialState = {
  list: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_HABIT:
      return { ...state, list: [...state.list, action.payload] };
    default:
      return state;
  }
}

