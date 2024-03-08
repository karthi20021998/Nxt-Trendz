import PopUp from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'

import Payment from '../Payment'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let orderTotal = 0
      cartList.forEach(eachCartItem => {
        orderTotal += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="summary-container">
            <h1 className="order-total">
              Order Total:<span className="amount">{orderTotal} Rs</span>
            </h1>
            <p className="items">{cartList.length} Items in the cart</p>

            <PopUp
              modal
              trigger={
                <button type="button" className="checkout-btn">
                  CheckOut
                </button>
              }
            >
              {close => <Payment close={close} />}
            </PopUp>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
