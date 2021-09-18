import { banner, bannerNewComing, carouselOne, carouselTwo, productJson } from "../../assets";

export const fetchAllProduct = () => {
  return (dispatch) => {
    return dispatch({
      type: "FETCH_ALL_PRODUCT",
      payload: productJson,
    });
  };
};

export const fetchNewProduct = () => {
  const newestProducts = productJson
    .sort((a, b) => {
      return b.created_at - a.created_at;
    })
    .slice(0, 10);
  return (dispatch) => {
    dispatch({
      type: "FETCH_NEWEST_PRODUCT",
      payload: newestProducts,
    });
  };
};

export const fetchBestSelling = () => {
  const bestSellings = productJson
    .sort((a, b) => {
      return b.price - a.price;
    })
    .slice(0, 10);
  return (dispatch) => {
    dispatch({
      type: "FETCH_BEST_SELLING",
      payload: bestSellings,
    });
  };
};

export const fetchCarouselOne = () => {
  const image = [carouselOne, carouselTwo];
  return (dispatch) => {
    dispatch({
      type: "FETCH_CAROUSEL_ONE",
      payload: image,
    });
  };
};

export const fetchCarouselTwo = () => {
  const image = [carouselTwo, carouselOne];
  return (dispatch) => {
    dispatch({
      type: "FETCH_CAROUSEL_TWO",
      payload: image,
    });
  };
};

export const fetchBannerNewComming = () => {
  const image = [bannerNewComing, bannerNewComing];
  return (dispatch) => {
    dispatch({
      type: "FETCH_BANNER_CAROUSEL",
      payload: image,
    });
  };
};

export const fetchBanner = () => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_BANNER",
      payload: banner,
    });
  };
}