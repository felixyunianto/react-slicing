const initialState = {
    carouselOne : [],
    carouselTwo: [],
    bannerCarousel : [],
    banner : ''
};

const imageReducers = (state = initialState, {type, payload}) => {
    switch (type) {
        case "FETCH_CAROUSEL_ONE":
          return {
            ...state,
            carouselOne: payload,
          };
        case "FETCH_CAROUSEL_TWO":
          return {
            ...state,
            carouselTwo: payload,
          };
        case "FETCH_BANNER_CAROUSEL":
          return {
            ...state,
            bannerCarousel: payload,
          };
        case "FETCH_BANNER":
          return {
            ...state,
            banner: payload,
          };
        default:
          return state;
      }
}

export default imageReducers;