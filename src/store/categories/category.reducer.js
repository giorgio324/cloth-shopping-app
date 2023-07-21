import { CATEGIRY_ACTION_TYPES } from './categories.types';
export const initialState = {
  categoriesMap: {},
};

export const categoryReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGIRY_ACTION_TYPES.SET_CATEGORIES_MAP:
      return {
        ...state,
        categoriesMap: payload,
      };
    default:
      return state;
  }
};
