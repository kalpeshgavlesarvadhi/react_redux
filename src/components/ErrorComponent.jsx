import { Component } from "react";
import ErrorPage from "../pages/ErrorPage";

class ErrorComponent extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      error: null,
      errorMessage: null,
    };
  }
  static getDerivedStateFromError(error) {
    // return {
    //   hasError: true,
    // };
    console.log(error.message);
    return { hasError: true, error: error.message };
  }

  //   componentDidCatch(error) {
  //     console.log("error", error);
  //     return { hasError: true, error: error.message };
  //   }

  render() {
    return this.state.hasError ? (
      <>
        {/* {console.log("hejejas")} */}
        <ErrorPage error={this.state.error} />
      </>
    ) : (
      <>{this.props.children}</>
    );
  }
}

export default ErrorComponent;
