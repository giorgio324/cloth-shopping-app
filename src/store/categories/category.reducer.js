import { CATEGIRY_ACTION_TYPES } from './categories.types';
export const initialState = {
  categoriesArray: [],
  isLoading: false,
  error: null,
};

export const categoryReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGIRY_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categoriesArray: payload,
      };
    default:
      return state;
  }
};
