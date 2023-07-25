import { useState } from "react";
import ErrorPage from "./ErrorPage";

const withAuth = (Component) => {
  return function () {
    const [isLogin, setIsLogin] = useState(false);
    return !isLogin ? (
      <>
        <ErrorPage />
      </>
    ) : (
      <>
        <Component />
      </>
    );
  };
};

export default withAuth;
