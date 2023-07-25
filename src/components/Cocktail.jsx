import React from "react";
import withLoading from "./Loading";

function Cocktail({ cocktailData }) {
  return (
    <div className="container">
      <h1>Cocktail page</h1>

      <div className="row">
        {cocktailData.map((item) => {
          return (
            <div className="col-md-3 mb-3 " key={item.id}>
              <div className="card mx-auto" style={{ width: "18rem" }}>
                <img
                  src={item.strDrinkThumb}
                  className="card-img-top"
                  height="250px"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-truncate">{item.strDrink}</h5>
                  <p className="card-text text-truncate">
                    {item.strInstructions}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default withLoading(Cocktail);
