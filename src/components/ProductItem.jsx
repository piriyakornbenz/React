import React from "react";

function ProductItem(props) {
  const { item, onProductClick, onClickAdd } = props;
  return (
    <>
      <div className="col-lg-3 col-md-4 col-12">
        <div className="img">
          <img className="picture" src={item.thumbnailUrl} onClick={() => {onProductClick(item)}} />
          
          {!!item.tag ? <span className="span1">{item.tag}</span> : ''}
          <span><img src={item.brand} className="span2" alt="" /></span>
        </div>
        <div className="text">
          <h4>{item.name}</h4>
          <h4 style={{color:'#888'}}>{item.sizes.join(', ')}</h4>
          <h5>${item.price}</h5>
        </div>
        <div className="button">
          <a className="btn btn-dark w-100 mb-5" onClick={() => {onClickAdd(item)}}>Add to cart</a>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
