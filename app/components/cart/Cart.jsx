import React from 'react';
import { Link } from 'react-router';
import Checkout from 'APP/app/components/checkout/Checkout';

import {
  GridList,
  GridTile,
  RaisedButton,
  TextField
} from 'material-ui';


const style = {
  root: {
    margin: '1vw'
  },
  button: {
    margin: '8%'
  },
  header: {
    textAlign: 'left'
  }
};


export default ({ cartProducts, auth, cartAddProduct, cartRemoveProduct }) => {
  let totalPrice = 0;
  if (cartProducts.length === 0) {
    return (
      <div style={style.root}>
        <h1>Shopping Cart is Empty</h1>
      </div>
    );
  } else if (cartProducts[0].rock) {
    return (
      <div style={style.root}>
        <h1>Shopping Cart</h1>
        <GridList cols={4} cellHeight={'auto'}>
          {
            cartProducts.map(cartProduct => {
              console.log('this is cartProduct', cartProduct);
              totalPrice += cartProduct.rock.price * cartProduct.quantity;
              return (
                <GridTile key={cartProduct.id}>
                  <h1 style={style.header}><Link to={`/rocks/${cartProduct.rock.id}`}>{ cartProduct.rock && cartProduct.rock.name}</Link></h1>
                  <h3 style={style.header}>rock price: ${ (cartProduct.rock.price / 100).toFixed(2) }</h3>
                  <h3 style={style.header}>quantity: {cartProduct.quantity} </h3>
                  <TextField type="number" name="itemQuantity" floatingLabelText="Update Quantity" onChange={evt => {
                    evt.preventDefault();
                    evt.stopPropagation();
                    cartAddProduct(evt.target.value, auth.id, cartProduct.rock.id);
                  }}/>

                  <RaisedButton style={style.button} label="Remove From Cart" secondary={true} onClick={evt => {
                    evt.preventDefault();
                    cartRemoveProduct(auth.id, cartProduct.rock_id);
                    }}/>

                </GridTile>
              );
            })
          }
          <GridTile cols={4}>
            <h2>Total Price: ${(totalPrice / 100).toFixed(2)}</h2>
            <Checkout />
          </GridTile>
        </GridList>
      </div>
    );
  }

  return (
    <div style={style.root}>
      <h1>Shopping Cart</h1>

    </div>
  );
};

