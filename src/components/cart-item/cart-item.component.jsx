import './cart-icon.styles.scss';
import {CartContext} from "../../context/cart.context";
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {useContext} from "react";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext)

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    };

    return (
        <div
            onClick={toggleIsCartOpen}
            className="cart-icon-container"
        >
            <ShoppingIcon classname="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    );
};

export default CartIcon;
