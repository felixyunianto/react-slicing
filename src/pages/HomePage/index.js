import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {
  BannerContent,
  CardList,
  Carousel,
  CarouselContent,
  Content,
  Footer,
  Header,
  Navbar,
  Sidebar,
} from "../../components";
import { fetchBanner, fetchBannerNewComming, fetchBestSelling, fetchCarouselOne, fetchCarouselTwo, fetchNewProduct } from "../../redux/actions";

const HomePage = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [navbarToggle, setNavbarToggle] = useState(false);
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const newestProducts = useSelector((state) => state.productReducers.newestProducts);
  const bestSellings = useSelector((state) => state.productReducers.bestSellings);

  const imageCarouselOne = useSelector((state) => state.imageReducers.carouselOne)
  const imageCarouselTwo = useSelector((state) => state.imageReducers.carouselTwo)
  const imageBannerCarousel = useSelector((state) => state.imageReducers.bannerCarousel);
  const imageBanner = useSelector((state) => state.imageReducers.banner)

  const movePageToProductDetail = (data) => {
    history.push({
      pathname : '/product-detail',
      state : {
        product: data
      }
    })
  }

  useEffect(() => {
    dispatch(fetchNewProduct())
    dispatch(fetchBestSelling())
    dispatch(fetchCarouselOne())
    dispatch(fetchCarouselTwo())
    dispatch(fetchBannerNewComming())
    dispatch(fetchBanner())
  }, [dispatch])

  return (
    <div className="box-border bg-primary w-full h-full">
      <Navbar
        title="Store"
        navbarToggle={navbarToggle}
        setNavbarToggle={setNavbarToggle}
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      >
        Test
      </Navbar>
      <div className="w-full box-border">
        <Header page={"home"} />
        <div className="w-full flex justify-between py-4 mobile:px-4 tablet:px-4 laptop:px-16 desktop:px-16 gap-4">
          <Sidebar sidebarToggle={sidebarToggle} />
          <Content>
            <CarouselContent>
              <Carousel type="promo" data={imageCarouselOne} />
              <Carousel type="promo" data={imageCarouselTwo} />
            </CarouselContent>
            <CardList data={bestSellings} onPress={(data) => movePageToProductDetail(data)}/>
            <div className="pt-5">
              <CarouselContent>
                <Carousel type="new-coming" data={imageBannerCarousel}/>
              </CarouselContent>
            </div>
            <CardList data={newestProducts} />
          </Content>
        </div>
        <BannerContent image={imageBanner} />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
