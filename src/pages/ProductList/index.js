import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    BrandItem,
  CardList,
  Content,
  Filter,
  Footer,
  Header,
  Navbar,
  Sidebar,
} from "../../components";
import { fetchAllProduct } from "../../redux/actions";

const ProductList = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [navbarToggle, setNavbarToggle] = useState(false);

  const [filterToggle, setFilterToggle] = useState(false);
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const allProducts = useSelector((state) => state.productReducers.allProducts);

  const movePageToProductDetail = (data) => {
    history.push({
      pathname: "/product-detail",
      state: {
        product: data,
      },
    });
  };

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, [dispatch]);

  return (
    <div className="box-border bg-primary w-full h-full">
      <Navbar
        title="Product List"
        navbarToggle={navbarToggle}
        setNavbarToggle={setNavbarToggle}
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      ></Navbar>
      <div className="w-full box-border">
        <div className="w-full flex justify-between py-4 mobile:px-4 tablet:px-4 laptop:px-16 desktop:px-16 gap-4">
          <Sidebar sidebarToggle={sidebarToggle} />

          <div className="w-full">
            <Header page={"product"} />
            <Filter
              filterToggle={filterToggle}
              setFilterToggle={setFilterToggle}
            ></Filter>
            <Content page={"product"}>
              <CardList data={allProducts} onPress={(data) => movePageToProductDetail(data)}/>
              <div className="pt-5"></div>
              <div className="w-full flex justify-center mb-24">
                <BrandItem type="all" padding="px-4 py-2.5">
                  See more
                  <FiChevronDown className="text-white ml-2 text-lg" />
                </BrandItem>
              </div>
            </Content>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
