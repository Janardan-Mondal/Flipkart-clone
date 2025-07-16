import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return <div className="min-h-screen w-full bg-bg-primary">
    <header>
      <Navbar />
    </header>
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>;
};

export default App;
