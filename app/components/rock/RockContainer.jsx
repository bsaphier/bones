import { connect } from 'react-redux';
import SingleRock from './Rock';

import { addProductToCart } from '../../reducers/cart';
import {
  updateQuantity,
  addedItemToCart,
  handleSnackbarClose
} from '../../reducers/itemQuantityReducer';

const mapStateToProps = ({ rock, auth, itemQuantity }) => ({
  rock,
  auth,
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
)(SingleRock);
