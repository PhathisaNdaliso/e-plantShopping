import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function CartItem() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div>
        <Navbar />
        <h2>Your Cart is Empty</h2>
        <button onClick={() => navigate("/products")}>Continue Shopping</button>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <h2>Your Cart</h2>
      {items.map(item => (
        <div key={item.id} className="card">
          <img src={item.img} alt={item.name} width="100" />
          <h4>{item.name}</h4>
          <p>Unit Price: R{item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: R{item.price * item.quantity}</p>
          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
        </div>
      ))}
      <h3>Total Cost: R{total}</h3>
      <button onClick={() => navigate("/products")}>Continue Shopping</button>
      <button onClick={() => alert("Coming Soon")}>Checkout</button>
    </div>
  );
}

export default CartItem;