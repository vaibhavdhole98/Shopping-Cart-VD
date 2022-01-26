import React,{useContext} from 'react';
import Items from './Items';
import Scrollbars from 'react-custom-scrollbars-2';
import { CartContext } from './Cart';


const RemoveCart = () => {
    const { item, clearCart } = useContext(CartContext);
    return (
        <>
                <header>
                <div className="continue-shopping">
                    <img className='arrow-icon' src="./images/arrow.png" alt="a" />
                    <h3>Continue Shopping</h3>
                </div>
                <div className="cart-icon">
                    <img src="./images/cart.png" alt="cart" />
                    <p>0</p>
                </div>
            </header>

            <section className='main-cart-section'>
                <h1>Shopping-cart</h1>
                <p className='total-items'>You have <span className='total-items-count'>0</span> items in your cart.</p>

                <div className="cart-items">
                    <div className="cart-items-container">
                        <Scrollbars>
                            {
                                item.map((cElm) => {
                                    return <Items key={cElm.id} title={cElm.title} img={cElm.img}
                                        color={cElm.description} price={cElm.price}
                                        quantity={cElm.quantity} id={cElm.id} />
                                })
                            }
                        </Scrollbars>
                    </div>
                </div>
                <div className="card-total">
                    <h3>Card Total: <span>0 </span> ₹</h3>
                    <button>CheckOut</button>
                    <button className='clear-cart' onClick={clearCart}>Clear Cart</button>
                </div>
            </section>
            </>
        )
    
};

export default RemoveCart;

