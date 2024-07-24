import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Carousel from "./Carousel";

const App = () => {
  return (
    <Provider store={store}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        <div
          className="App"
          style={{
            textAlign: "center",

            marginTop: "3rem",
          }}
        >
          <h1>Image Carousel</h1>
          <Carousel />
        </div>
      </div>
    </Provider>
  );
};

export default App;
