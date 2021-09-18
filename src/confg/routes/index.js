import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, NoMatch, Product } from "../../pages";
import { fetchBestSelling, fetchNewProduct } from "../../redux/actions";

const Routes = ({ store }) => {
  return (
    <Switch>
      <Route
        path="/"
        render={() => {
          if (store) {
            store.dispatch(fetchBestSelling());
            store.dispatch(fetchNewProduct());
          }

          return <HomePage />;
        }}
        exact
      />
      <Route
        path="/product-detail"
        render={() => {
          return <Product />;
        }}
        exact
      />
      <Route render={NoMatch} />
    </Switch>
  );
};

export default Routes;
