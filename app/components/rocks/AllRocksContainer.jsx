import { connect } from 'react-redux';
import AllRocks from './AllRocks';

import { addProductToCart } from '../../reducers/cart';
import {
  updateQuantity,
  addedItemToCart,
  handleSnackbarClose
} from '../../reducers/itemQuantityReducer';

const mapStateToProps = ({ rocks, auth, itemQuantity }, { location: { pathname } }) => ({
  auth,
  rocks,
  pathname,
  itemQuantity
});

const mapDispatchToProps = dispatch => ({
  addProductToCart: (quantity, userId, rockId) =>
    dispatch(addProductToCart(quantity, userId, rockId)),
  updateQuantity: amount =>
    dispatch(updateQuantity(amount)),
  addedItemToCart: () =>
    dispatch(addedItemToCart()),
  handleSnackbarClose: () =>
    dispatch(handleSnackbarClose())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllRocks);
