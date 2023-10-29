import React, { useEffect } from "react";
import Header from "@/components/Header";
import Product from "@/components/Product";
import AppHeader from "@/components/AppHeader";
import Loader from "@/components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/products/store";

const HomePage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => {
    return state.reducer?.isLoading;
  });

  const filteredProducts = useSelector((state)=> state.reducer?.filteredProducts)
  const products = useSelector((state) => state.reducer?.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const renderProducts = (filteredProducts.length>0 ? filteredProducts :products)?.map((product) => {
    return (
      <Product
        key={product.id}
        product={product}
      />
    );
  });

  if (isLoading) return <Loader />;

  return (
    <div className={`flex flex-col w-screen h-screen`}>
      <Header appName={"PRODUCTS"}>
        <AppHeader />
      </Header>
      <div className="sm:grid-cols-1 md:grid-cols-4 grid  gap-8 p-20">
        {renderProducts}
      </div>
    </div>
  );
};

export default HomePage;
