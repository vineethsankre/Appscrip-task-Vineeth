import { FaRegHeart } from "react-icons/fa";
import './index.css'

const ProductCard=props=>{
    const {productData1}=props
    const {title, image}=productData1

    return(
        <div className="product-container">
            <img className="product-image" src={image} alt={title} />
            <div className="product-inner">
                <h1 className="product-name">{title}</h1>
            </div>
            <div className="product-info">
                <p className="product-desc">
                    <span className="span">
                        Sign in 
                    </span>
                    <span> </span>
                    or Create an account to see pricing
                </p>
                <FaRegHeart/>
            </div>
        </div>
    )
}

export default ProductCard