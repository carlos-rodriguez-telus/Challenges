import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Info from "../pages/Info";
import Contact from "../pages/Contact";

function Blog() {
  const [data, setData] = useState();

  function getData() {
    fetch("./blogInfo.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((info) => {
        setData(info);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home data={data?.home} />} />
            <Route path="info" element={<Info data={data?.info} />} />
            <Route path="contact" element={<Contact data={data?.contact} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Blog;
