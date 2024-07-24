import { NEXT_IMAGE, PREV_IMAGE } from "./action";

const initialState = {
  currentIndex: 0,
  images: [
    "https://itpreneurpune.com/wp-content/uploads/2024/02/image-1.jpeg",
    "https://miro.medium.com/v2/resize:fit:550/1*dqvlaszRLvoPmARpOlLN9A.png",
    "https://graffersid.com/wp-content/uploads/2024/07/Components-Of-MERN-Stack.png",
    "https://miro.medium.com/v2/resize:fit:1400/1*Ex6KsoXIPRUza5uOUD4yMA.png",
    "https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F7i310k6grqvgeppz7xed.png",
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_IMAGE:
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % state.images.length,
      };
    case PREV_IMAGE:
      return {
        ...state,
        currentIndex:
          (state.currentIndex - 1 + state.images.length) % state.images.length,
      };
    default:
      return state;
  }
};

export default reducer;
