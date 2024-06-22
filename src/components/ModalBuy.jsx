import React, { useState, useEffect } from 'react'
import './ModalBuy.css'

function ModalBuy(props) {
    const { product, onBgClick, onAddToCart } = props
    const [countAmount, setCountAmount] = useState(1)
    const [selectedSize, setSelectedSize] = useState(product.sizes[0])

    useEffect(() => {
        console.log('ModalBuy props:', props)
    }, [props])

    const onClickAmountDown = () => {
        if (countAmount > 1) {
            setCountAmount(countAmount - 1)
        }
    }
    
    const onClickAmountUp = () => {
        setCountAmount(countAmount + 1)
    }

    const handleAddToCart = () => {
        console.log('Clicked Add to Cart')
        onAddToCart(product, countAmount, selectedSize)
        onBgClick() // Close the modal after adding to cart
    }

    return (
        <div className='buy-modal'>
            <div className="buy-bg" onClick={onBgClick} />
            <div className="buy-content">
                <i className="fa-solid fa-xmark" onClick={onBgClick}></i>
                <img src={product.thumbnailUrl} alt={product.name} />
                <div className="text">
                    <h3>{product.name}</h3>
                    <p className='price'>${product.price}</p>
                    <div className='product-size'>
                        <label className='mb-3' htmlFor="size-select">Size: </label>
                        <select id="size-select" value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                            {product.sizes.map((size) => (
                                <option key={size} value={size}>{size}</option>
                            ))}
                        </select>
                    </div>
                    <div className="amount">
                        <span className={`amount-down ${countAmount <= 1 ? 'disabled' : ''}`} onClick={onClickAmountDown}>-</span>
                        <span className='amount-count'>{countAmount}</span>
                        <span className='amount-up' onClick={onClickAmountUp}>+</span>
                    </div>
                    <div className="button">
                        <button className='btn btn-dark mt-3 w-100' onClick={handleAddToCart}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalBuy
