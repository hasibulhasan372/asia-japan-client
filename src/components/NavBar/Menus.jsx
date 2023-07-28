import { NavLink } from "react-router-dom";


const Menus = () => {
    return (
        <div>
            <ul className="flex flex-col lg:flex-row md:gap-x-2 lg:gap-x-9 justify-between items-center text-[#273548] font-medium">
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/propertyListing">Property Listing</NavLink></li>
                <li><NavLink to="/sellProperties">Sell Properties</NavLink></li>
                <li><NavLink to="/projects">Our Projects</NavLink></li>
                <li><NavLink to="/service">Our Service</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>
        </div>
    );
};

export default Menus;