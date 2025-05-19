import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Increment = ({ id }) => {
    const { incrementCount } = useContext(CartContext);

  return (
    <button className="btn btn-primary" onClick={() => incrementCount(id)}>
      +
    </button>
  );
};

export default Increment;