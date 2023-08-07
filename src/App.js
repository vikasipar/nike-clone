import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Other from "./components/Other";
import { data } from "./data";

// rfce shortcut to creat new component

function App() {
  const [heroProduct, setHeroProduct] = useState(data[0]);

  const productSelected = (product) => {
    setHeroProduct(product);
  };

  return (
    <div>
      <Navbar />
      <Main product={heroProduct} />
      <Other
        heroProduct={heroProduct}
        data={data}
        heroHandler={productSelected}
      />
    </div>
  );
}

export default App;
