import "./App.css";
import Navbar from "./components/header/Navbar";
import Newnav from "./components/newnavbaar/Newnav";
import Sign_in from "./components/signup_sign/Sign_in";
import SignUp from "./components/signup_sign/SignUp";
import { Routes, Route } from "react-router-dom";
import Maincomp from "./components/home/Maincomp";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Newnav />
      <Routes>
        <Route path="/" element={<Maincomp />} />
        <Route path="/login" element={<Sign_in />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* <Maincomp /> */}
      <Footer />
    </>
  );
}

export default App;
