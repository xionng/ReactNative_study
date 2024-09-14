// import Image from "next/image";
// import localFont from "next/font/local";
import Head from "next/head";
import { useEffect, useState } from "react";
import Axios from "axios";
import ItemList from "../component/ItemList";
import { Header, Divider, Loader } from "semantic-ui-react";
export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL =
    "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    Axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
      setIsLoading(false);
    });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Head>
        <title>HOME | 시온</title>
        <meta name="description" content="시온이의 홈"></meta>
      </Head>
      {isLoading && (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}
      {!isLoading && (
        <>
          <Header as="h3" style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" style={{ paddingTop: 40 }}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
      )}
    </div>
  );
}
