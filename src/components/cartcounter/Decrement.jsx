import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const Decrement = ({ id }) => {

const { decrementCount } = useContext(CartContext);
        
return (
        <button className="btn btn-primary" onClick={()  => decrementCount(id)}>
        -
        </button>
);
};
export default Decrement;