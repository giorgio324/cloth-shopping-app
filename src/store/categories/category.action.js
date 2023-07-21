import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGIRY_ACTION_TYPES } from './categories.types';
export const setCategories = (categoriesArray) =>
  createAction(CATEGIRY_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
