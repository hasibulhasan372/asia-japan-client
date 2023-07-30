import PopularPropertiesCard from "../../../components/Card/PopularPropertiesCard";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import usePopularProperties from "../../../hooks/usePopularProperties";


const PopularProperties = () => {
    const [popularProperties] = usePopularProperties();
    
    return (
        <div className="my-con">
            <div className="py-16">
                <SectionTitle title="Popular Properties"></SectionTitle>
                <p className="text-[#3B5779] sm:text-xl pt-4 pb-10 md:pb-12 lg:pb-16 text-center md:w-9/12 lg:w-1/2 mx-auto ">We buy various real estate at a  that you want to sell. And if you want to buy real estate, we’ll be able to introduce</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7 md:px-10 lg:px-0 md:gap-10 lg:gap-6">
                    {
                        popularProperties?.map(property => <PopularPropertiesCard key={property._id} property={property}></PopularPropertiesCard>)
                    }
                </div>
            </div>

            
        </div>
    );
};

export default PopularProperties;