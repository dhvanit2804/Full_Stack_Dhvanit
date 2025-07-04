import React from "react";
import Hello from "./Hello";
import Css from "./Css/Css";
import Mainprops from "./props/Mainprops";
import Mainstate from "./States/Mainstate";
import FuncState from "./States/FuncState";
// import Form from './Form/Formobj';
import Formobj from "./Form/Formobj";
import Form from "./Form/Form";
import Usedata from "./UseEffect/Usedata";
import Usetable from "./UseEffect/Usetable";
import Useaxios from "./UseEffect/Useaxios";
import Fakestore from "./UseEffect/Fakestore";
import Mockapi from "./UseEffect/Mockapi";
import DummyUser from "./DummyJson/DummyUser";
import DummyProduct from "./DummyJson/DummyProduct";
import DummyCart from "./DummyJson/DummyCart";
import Reactboot from "./Bootstrap/Reactboot";
import Footer from "./Bootstrap/Footer";
import Login from "./Bootstrap/Login";
import MainContext from "./Context/MainContext";
import Header from "./Layout/Coman/Header";
// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Layout/Pages/Home";
import About from "./Layout/Pages/About";
import About1 from "./Layout/Pages/About1";
import About2 from "./Layout/Pages/About2";
import Notfound from "./Layout/Pages/Notfound";
import Contact from "./Layout/Pages/Contact";
import Contact1 from "./Layout/Pages/Contact1"; 
import './index.css';
import UseReducer from "./Hooks/UseReducer";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Hello /> */}
        {/* <Mainprops /> */}
        {/* <Mainstate /> */}
        {/* <FuncState /> */}

        {/* <Formobj /> */}
        {/* <Form /> */}
        {/* <Usedata /> */}
        {/* <Usetable /> */}
        {/* <Useaxios /> */}
        {/* <Fakestore /> */}
        {/* <Mockapi /> */}
        {/* <DummyUser /> */}
        {/* <DummyProduct /> */}
        {/* <DummyCart /> */}
        {/* <Reactboot /> */}
        {/* <Footer /> */}
        {/* <Login /> */}
        {/* <MainContext /> */}
        {/* <Header /> */}
        <UseReducer />
        {/* <h1 className="text-4xl font-bold bg-red-500 text-green-600 ml-3">This is Heading Tag</h1> */}
      </div>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="about1" element={<About1 />} />
          <Route path="about2" element={<About2 />} />
        </Route>
        <Route path="/contact" element={<Contact />}>
          <Route path="contact1" element={<Contact1 />} />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
