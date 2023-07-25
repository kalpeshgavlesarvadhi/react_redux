import React, { useEffect, useState } from "react";

function withLoading(Compopnent) {
  return function () {
    const [isLoading, setIsLoading] = useState(true);
    const [productData, setProductData] = useState([]);
    const [cocktailData, setCocktailData] = useState([]);

    useEffect(() => {
      setTimeout(() => {
        fetch("https://fakestoreapi.com/products/")
          .then((resp) => resp.json())
          .then((data) => setProductData(data));
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
          .then((resp) => resp.json())
          .then((data) => setCocktailData(data.drinks));
        setIsLoading(false);
      }, 2000);
    }, [isLoading]);

    return isLoading ? (
      <>
        <div className="container">
          <h1>loading....</h1>
        </div>
      </>
    ) : (
      <>
        <Compopnent
          setIsLoading={setIsLoading}
          isLoading={isLoading}
          productData={productData}
          cocktailData={cocktailData}
        />
      </>
    );
  };
}

export default withLoading;
