import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import { Details } from "./views/details";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card-details/:type/:id" element={<Details />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
