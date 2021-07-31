import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format"; 
import { useStateValue } from "./StateProvider";
import {getBasketTotal} from "./reducer";
import { useHistory } from "react-router-dom";


function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  
  console.log('this is the basket>>>>', basket )
  
  // const totalPrice = basket.length > 0 && basket.reduce((a, c) => {
  //   console.log('ac => ', a, 'cur => ', c)
  //   if (a) {
  //     if (a.price) {
  //       return parseInt(a.price, 10) + c.price
  //     }
  //     return parseInt(a, 10) + c.price
  //   }

  //   return c.price;
  // });

// {totalPrice && `$${totalPrice.toFixed(2)}`}

 

  return (
    <div className="subtotal">
      <CurrencyFormat 
      renderText={(value) => (
        <>
          <p>
          Subtotal ({basket?.length} items): <strong>{value}</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox"/>This order contains a gift
        </small>
        </>
  )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
      />

      <button onClick={e => history.push('./payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
