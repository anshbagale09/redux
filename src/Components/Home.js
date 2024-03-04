import React from "react";
import imagephone from "../Images/iphone.jpg"
import cart from "../Images/cart.jpg"
function Home()
{
    return(
        <div>
            <div className="add-to-cart">
                <img src={cart} alt=""/>
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={imagephone} alt="" />
                </div>
            
            <div className="text-wrapper">
                <span>
                    I-Phone 12
                    </span>
                    <br/>
                <span>
                    Price : 70000

                </span>
            </div>
                <div className="btn-wrapper item">
                <button>Add To Cart</button>
            </div>
            </div>
        </div>
    )
}
export default Home;