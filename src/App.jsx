import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Product from "./components/Product";
import ModalProduct from "./components/ModalProduct";
import SearchBox from "./components/SearchBox";
import products from "./data/products";
import ProductItem from "./components/ProductItem";
import ModalBuy from "./components/ModalBuy";
import Cart from "./components/Cart";

function App() {
  const [searchText, setSearchText] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product, countAmount, size) => {
    setCartItems([...cartItems, { product, countAmount, size }]);
    setIsModalOpen(false);
    setIsCartOpen(true);
  };

  const handleRemoveItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const handleBuy = () => {
    alert('Confirm to check out');
    setCartItems([]);
  };

  // show modal product img when click img
  const [selectProduct, setSelectProduct] = useState(null);

  const openModalProduct = (key) => setSelectProduct(key);
  const closeModalProduct = () => setSelectProduct(null);

  let productModal = null;
  if (!!selectProduct) {
    productModal = (
      <ModalProduct product={selectProduct} onBgClick={closeModalProduct} />
    );
  }

  // show modal product when click add to cart
  const [clickAdd, setClickAdd] = useState(null);

  const openModalBuy = (key) => setClickAdd(key);
  const closeModalBuy = () => setClickAdd(null);

  let buyModal = null;
  if (!!clickAdd) {
    buyModal = (
      <ModalBuy
        product={clickAdd}
        onBgClick={closeModalBuy}
        onAddToCart={handleAddToCart}
      />
    );
  }

  // filter product
  const filterProduct = products.filter((product) => {
    const lowerCaseSearchText = searchText.toLowerCase();
    const matchesSearchText =
      product.name.toLowerCase().includes(lowerCaseSearchText) ||
      product.brand.toLowerCase().includes(lowerCaseSearchText);
    const matchesSize =
      !selectedSize || (product.sizes && product.sizes.includes(selectedSize));
    const matchesBrand =
      !selectedBrand ||
      (product.brandname && product.brandname.includes(selectedBrand));
    return matchesSearchText && matchesSize && matchesBrand;
  });

  const productElements = filterProduct.map((product, index) => {
    return (
      <ProductItem
        key={index}
        item={product}
        onProductClick={openModalProduct}
        onClickAdd={openModalBuy}
      />
    );
  });

  // count of filtered product
  const filteredProductCount = filterProduct.length;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <SearchBox value={searchText} onChange={setSearchText} />
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <Sidebar
              onSizeChange={setSelectedSize}
              onBrandChange={setSelectedBrand}
              data={productElements}
            />
          </div>
          <div className="col-lg-8 col-md-8 col-12">
            <Product data={productElements} count={filteredProductCount} />
          </div>
          {productModal}
          {buyModal}
          {isCartOpen && (
            <Cart
              cartItems={cartItems}
              onHideCart={() => setIsCartOpen(false)}
              onRemoveItem={handleRemoveItem}
              onBuy={handleBuy}
            />
          )}
          <div className="cart-icon" onClick={() => setIsCartOpen(!isCartOpen)}>
            <i className="fa-solid fa-shopping-cart"></i>
            {cartItems.length > 0 && (
              <div className="cart-count">{cartItems.length}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
