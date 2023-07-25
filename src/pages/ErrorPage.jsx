import React from "react";

function ErrorPage({ error }) {
  //   console.log(errorMessage);

  return (
    <div>
      <p>Something went wrong..</p>
      <p>{error}</p>
    </div>
  );
}

export default ErrorPage;
