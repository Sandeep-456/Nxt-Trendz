import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const lengthofCart = cartList.length
      const total = cartList.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0,
      )

      return (
        <div className="summary-bg-container">
          <div className="summary-card">
            <h1 className="summary-total">
              Order Total:
              <span className="total-amount">Rs {total}/-</span>
            </h1>
            <p className="order-count">{lengthofCart} items in cart</p>
            <button className="checkout-btn" type="button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
