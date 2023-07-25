import ErrorComponent from "./components/ErrorComponent";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ErrorComponent>
        <Home />
      </ErrorComponent>
      <ErrorComponent>
        <About />
      </ErrorComponent>
    </>
  );
}

export default App;
