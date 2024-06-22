import React from 'react'
import './ModalProduct.css'

function ModalProduct(props) {
  const {product, onBgClick} = props
  return (
    <div className='product-model'>
        <div className="product-bg" onClick={onBgClick} />
        <div className="product-content">
            <img src={product.thumbnailUrl} />
            <h3>{product.name}</h3>
        </div>
    </div>
  )
}

export default ModalProduct