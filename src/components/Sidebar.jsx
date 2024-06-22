import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar({ onSizeChange, onBrandChange, data }) {
  const [activeSize, setActiveSize] = useState('');
  const [activeBrand, setActiveBrand] = useState('');
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const brands = ['adidas', 'nike'];

  const handleClick = (size) => {
    const newActiveSize = activeSize === size ? '' : size;
    setActiveSize(newActiveSize);
    onSizeChange(newActiveSize);
  };

  const handleClickBrand = (brand) => {
    const newActiveBrand = activeBrand === brand ? '' : brand;
    setActiveBrand(newActiveBrand);
    onBrandChange(newActiveBrand);
  };

  return (
    <div className="container">
      <h3>Sizes:</h3>
      {sizes.map((size) => (
        <span
          key={size}
          className={activeSize === size ? 'size active' : 'size'}
          onClick={() => handleClick(size)}
        >
          {size}
        </span>
      ))}
      <p className='mb-5'>Filter size that you want.</p>

      <h3>Brand:</h3>
      {brands.map((brand) => (
        <span
          key={brand}
          className={activeBrand === brand ? 'brand active' : 'brand'}
          onClick={() => handleClickBrand(brand)}
        >
          {brand}
        </span>
      ))}
      <p>Filter brand that you want.</p>
    </div>
  );
}

export default Sidebar;
