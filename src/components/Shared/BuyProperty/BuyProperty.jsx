import { Link } from "react-router-dom";


const BuyProperty = () => {
    return (
        <div className="mt-24 mb-32">
            <div className="my-con rounded-[8px] main-color">
                <div className="py-20 text-center">
                    <h3 className="text-white text-[56px] font-semibold ">Want to buy properties in Dhaka City </h3>
                    <p className="text-lg text-white font-medium">A New York Times analysis reveals how the left outdid the right at raising and spending millions from undisclosed donors to </p>
                    <div className="mt-12 space-x-3">
                        <Link to="" className="btn-one">See Property Listing</Link>
                        <Link to="" className="btn-one">See Property Listing</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BuyProperty;