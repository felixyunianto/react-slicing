import React, { useState } from "react";
import {
  banner,
  bannerNewComing,
  carouselOne,
  carouselTwo,
  productJson,
} from "../../assets";
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

const HomePage = () => {
  const [navbarToggle, setNavbarToggle] = useState(false);
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const carouselData = {
    one: [carouselOne, carouselTwo],
    two: [carouselTwo, carouselOne],
  };

  const carouselBannerNewComing = [bannerNewComing, bannerNewComing];

  // const 

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
              <Carousel type="promo" data={carouselData.one} />
              <Carousel type="promo" data={carouselData.two} />
            </CarouselContent>
            <CardList data={productJson} />
            <div className="pt-5">
              <CarouselContent>
                <Carousel type="new-coming" data={carouselBannerNewComing} />
              </CarouselContent>
            </div>
            <CardList data={productJson.sort((a,b) => {
              return new Date(a.created_at) - new Date(b.created_at)
            })} />
          </Content>
        </div>
        <BannerContent image={banner} />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
