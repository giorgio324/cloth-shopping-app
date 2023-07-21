import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGIRY_ACTION_TYPES } from './categories.types';
export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGIRY_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);
