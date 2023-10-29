import HomePage from "@/containers/HomePage";
import { Provider } from "react-redux";
import Head from "next/head";
import { store } from "@/products/store";

export default function Home() {
  return (
    <Provider store={store}>
      <Head>
        <title>CodeHall Products</title>
      </Head>
      <HomePage />
    </Provider>
  );
}
