import useFeature from "../../../hooks/useFeature";


const Features = () => {
    const [features] = useFeature()
    console.log(features)
    return (
        <div className="my-con">
            <div className="">
                <h4 className="heading-color text-3xl font-semibold py-10 text-center">Feature Properties</h4>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 px-24 gap-6 sm:px-6 md:px-10 sm:gap-5 md:gap-x-8 lg:px-0 md:gap-y-8 lg:gap-x-8">
                    {
                        features?.map(feature =><div key={feature._id}>

                                <img src={feature?.img} alt="" />
                                <h5 className="text-[#B3B3B3] text-lg font-semibold text-center mt-[14px] ">{feature?.area}</h5>

                        </div>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Features;