import { Link } from "react-router-dom";


const BuyProperty = () => {
    return (
        <div className="mt-10 md:mt-16 lg:mt-24 mb-20 md:mb-24 lg:mb-32">
            <div className="my-con rounded-[8px] main-color">
                <div className="py-10 md:py-14 lg:py-20 text-center">
                    <h3 className="text-white text-[32px] leading-[40px] sm:text-[46px] sm:leading-[52px] lg:text-[56px] lg:leading-[65px] font-semibold sm: md:w-8/12 lg:w-7/12 xl:w-1/2 mx-auto ">Want to buy properties in Dhaka City </h3>
                    <p className="  lg:text-lg text-white font-medium mt-6 sm: md:w-8/12 lg:w-7/12 xl:w-1/2 mx-auto">A New York Times analysis reveals how the left outdid the right at raising and spending millions from undisclosed donors to </p>
                    <div className="mt-6 md:mt-12 gap-x-3 gap-y-3 flex flex-col sm:flex-row px-10 sm:px-0 justify-center">
                        <Link to="" className="btn-one">See Property Listing</Link>
                        <Link to="" className="btn-one">Sell Your Properties</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BuyProperty;