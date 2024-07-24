import React from "react";
import { useDispatch } from "react-redux";
import { nextImage, prevImage } from "./redux/action";

const Controls = () => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        justifyContent: "space-evenly",
        display: "flex",
        alignItems: "center",
        marginTop: "3rem",
      }}
    >
      <button
        onClick={() => dispatch(prevImage())}
        style={{
          backgroundColor: "red",
          color: "white",
        }}
      >
        Back
      </button>
      <button
        onClick={() => dispatch(nextImage())}
        style={{
          backgroundColor: "blue",
          color: "white",
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Controls;
