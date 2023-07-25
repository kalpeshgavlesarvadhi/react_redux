import React from "react";
import withLoading from "./Loading";

function Product({ productData }) {
  return (
    <div className="container">
      <h1>Product page</h1>

      <div className="row">
        {productData.map((item) => {
          return (
            <div className="col-md-3 mb-3 " key={item.id}>
              <div className="card mx-auto" style={{ width: "18rem" }}>
                <img
                  src={item.image}
                  className="card-img-top"
                  height="250px"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-truncate">{item.title}</h5>
                  <p className="card-text text-truncate">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default withLoading(Product);
