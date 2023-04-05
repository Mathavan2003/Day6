import React, { createContext, useRef, useContext,} from "react";

const ProductContext = createContext();

function withProducts(Component) {
  return function WithProducts(props) {
    const products = [
      { name: "Fruits", price: 10.99, image: "https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/10/31/Photos/Processed/fruits-kFLF--621x414@LiveMint.jpg" },
      { name: "Vegetables", price: 9.99, image: "https://www.cdc.gov/foodsafety/images/comms/features/GettyImages-1247930626-500px.jpg?_=00453" },
      { name: "Snacks", price: 12.99, image: "https://media.istockphoto.com/id/1149135424/photo/group-of-sweet-and-salty-snacks-perfect-for-binge-watching.webp?s=612x612&w=is&k=20&c=-GW3phwPxVIynvTv-dTT-kJycgk1OTPmGtijS4kyt8I=" },
    ];
    const inputRef = useRef(null);
    
    return (
      <ProductContext.Provider value={{ products, inputRef }}>
        <Component {...props} />
      </ProductContext.Provider>
    );
  };
}

function ProductList() {
  const { products } = useContext(ProductContext);
  
  return (
    <ul>
      {products.map((product) => (
        <li key={product.name}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
        </li>
      ))}
    </ul>
  );
}

const ProductListWithProducts = withProducts(ProductList);

function App() {
  return (
    <div>
      <h1>Our Products</h1>
      <ProductListWithProducts />
    </div>
  );
}

export default App;