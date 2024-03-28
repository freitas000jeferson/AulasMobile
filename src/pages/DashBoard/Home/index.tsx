import React from "react";
import { ScrollView } from "react-native";
import { Banner } from "../../../components";
import PageLogged from "../../../templates/PageLogged";
import SinglePage from "../../../templates/SinglePage";
import Categories from "./components/Categories";
import { Filter } from "./components/Filter";
import ProductList from "./components/ProductList";
import { Images } from "./components/banner";

const Home = () => {
  return (
    <PageLogged>
      <SinglePage>
        <ScrollView>
          <Filter />
          <Banner items={Images} />
          <Categories />
          <ProductList />
        </ScrollView>
      </SinglePage>
    </PageLogged>
  );
};

export default Home;
