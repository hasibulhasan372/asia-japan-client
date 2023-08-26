import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Features from "../Features/Features";
import OurWork from "../OurWork/OurWork";
import PopularProperties from "../PopularProperties/PopularProperties";


const Home = () => {
    return (
        <>
        <Banner></Banner>
        <Features></Features>
        <PopularProperties></PopularProperties>
        <OurWork></OurWork>
        <Blogs></Blogs>
        </>
    );
};

export default Home;