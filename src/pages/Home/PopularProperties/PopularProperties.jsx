import PopularPropertiesCard from "../../../components/Card/PopularPropertiesCard";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import usePopularProperties from "../../../hooks/usePopularProperties";


const PopularProperties = () => {
    const [popularProperties] = usePopularProperties();
    
    return (
        <div className="my-con">
            <div className="py-16">
                <SectionTitle title="Popular Properties"></SectionTitle>
                <p className="text-[#3B5779] text-xl lg:pt-4 lg:pb-16 text-center lg:w-1/2 mx-auto ">We buy various real estate at a  that you want to sell. And if you want to buy real estate, we’ll be able to introduce</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                    {
                        popularProperties?.map(property => <PopularPropertiesCard key={property._id} property={property}></PopularPropertiesCard>)
                    }
                </div>
            </div>

            
        </div>
    );
};

export default PopularProperties;