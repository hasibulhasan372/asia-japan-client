import Logo from "./Logo";
import Menus from "./Menus";
import { FaPhoneAlt} from "react-icons/fa"


const NavBar = () => {
    return (
        <div className="my-con px-4 xl:px-0 py-2 md:py-4 border-b-2">
        <div className="flex flex-row justify-between items-center ">
             <Logo></Logo>
             <Menus></Menus>
             <div className="hidden lg:block">
                <a href="#" className="flex items-center gap-1 py-4 px-4 bg-[#FF9E12] rounded-lg text-[#FCFEFF] font-semibold  "><FaPhoneAlt></FaPhoneAlt> +8801923187440</a>
             </div>
        </div>
     </div>
    );
};

export default NavBar;