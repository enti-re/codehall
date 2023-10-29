import React, { createContext, useEffect, useState } from "react";
import Header from "@/components/Header";
import Product from "@/components/Product";
import AppHeader from "@/components/AppHeader";
import Loader from "@/components/Loader";

export const HomePageContext = createContext();

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const productsRes = await res.json();
        const productArray =
          JSON.parse(localStorage.getItem("productArray")) ?? [];
        if (productArray.length > 0)
          setProducts([...productsRes, ...productArray]);
        else setProducts([...productsRes]);
        setLoader(false);
      } catch (err) {
        alert("Unable to fetch data");
      }
    };
    fetchProducts();
  }, []);

  const sortProducts = (order) => {
    const productsArr = products;
    let sortedProducts = [];
    if (order === "dsc")
      sortedProducts = productsArr.sort((a, b) => a.price - b.price);
    else sortedProducts = productsArr.sort((a, b) => b.price - a.price);
    setProducts([...sortedProducts]);
  };

  const renderProducts = products.map((product) => {
    return (
      <Product
        key={product.id}
        onDelete={handleDeleteProduct}
        product={product}
      />
    );
  });

  if (loader) return <Loader />;

  return (
    <HomePageContext.Provider
      value={{ handlePopupVisibility, handleProductChange, sortProducts }}
    >
      <div
        className={`flex flex-col w-screen h-screen ${
          isAddPopupVisible && "overflow-hidden"
        }`}
      >
        <Header appName={"PRODUCTS"}>
          <AppHeader />
        </Header>
        <div className="sm:grid-cols-1 md:grid-cols-4 grid  bg-black gap-8 p-20">
          {renderProducts}
        </div>
      </div>
    </HomePageContext.Provider>
  );
};

export default HomePage;
