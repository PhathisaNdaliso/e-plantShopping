import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const items = useSelector(state => state.cart.items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/products">Plants</Link> | 
      <Link to="/cart">Cart <span className="cart-count">{count}</span></Link>
    </nav>
  );
}

export default Navbar;