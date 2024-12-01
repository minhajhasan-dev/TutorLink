import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login");
  const noHeaderFooterSignUp = location.pathname.includes("signup");
  return (
    <div>
      {noHeaderFooter || noHeaderFooterSignUp || <Navbar></Navbar>}
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      {noHeaderFooter || noHeaderFooterSignUp || <Footer></Footer>}
    </div>
  );
};

export default Main;
