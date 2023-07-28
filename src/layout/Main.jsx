import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Shared/Footer/Footer";
import BuyProperty from "../components/Shared/BuyProperty/BuyProperty";


const Main = () => {
    return (
        <>
        <NavBar></NavBar>
         <Outlet></Outlet>  
         <BuyProperty></BuyProperty> 
         <Footer></Footer>
        </>
    );
};

export default Main;