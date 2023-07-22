import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';

export const setIsCartOpen = (bool) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);
