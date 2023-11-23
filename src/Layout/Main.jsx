import React, { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);
  // if (loading) {
  //   return (
  //     <div>
  //       <h1>Loading</h1>
  //     </div>
  //   );
  // }
  return (
    <div>
      <Navbar />
      <div className="md:min-h-[calc(100vh-73px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
