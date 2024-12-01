import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";


const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login');
    const noHeaderFooterSignUp = location.pathname.includes('signup')
    return (
        <div>
            { noHeaderFooter || noHeaderFooterSignUp || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noHeaderFooter || noHeaderFooterSignUp || <Footer></Footer>}
            
        </div>
    );
};

export default Main;