const initialState = {
  allProducts: [],
  newestProducts: [],
  bestSellings: [],
};

const productReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_ALL_PRODUCT":
      return {
        ...state,
        allProducts: payload,
      };
    case "FETCH_NEWEST_PRODUCT":
      return {
        ...state,
        newestProducts: payload,
      };
    case "FETCH_BEST_SELLING":
      return {
        ...state,
        bestSellings: payload,
      };
    default:
      return state;
  }
};

export default productReducers;
