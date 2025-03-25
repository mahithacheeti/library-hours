import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/custom.css";

const Home = () => {
  return (
    <>
      <Header />
      <main className="container py-5 text-center">
        <h2>Welcome to UTK Library Hours Explorer</h2>
      </main>
      <Footer />
    </>
  );
};

export default Home;
