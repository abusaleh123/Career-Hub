import { Outlet } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";


const Base = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Base;