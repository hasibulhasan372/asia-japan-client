import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";


const OurWork = () => {
    return (
        <div className="bg-[#F0FAFF] py-10 sm:py-16 md:py-24 ">
            <div className="my-con">
                <div className="lg:w-7/12 md:w-9/12 xl:w-1/2 mx-auto">
                    <SectionTitle title="Why We Are Different From Another Real Estate"></SectionTitle>
                </div>
                <div className="grid sm:grid-cols-2 gap-y-6 gap-x-6 mt-10 sm:mt-10 md:mt-14 lg:mt-20">
                    <div className="text-center">
                        <img src="https://i.ibb.co/J7YvScM/full-area.png" alt="" />
                        
                        <h4 className="subTitle pt-4 md:pt-8  md:w-11/12 mx-auto">Guidance in every step when buying any properties </h4>
                        <p className="subTitle-para pt-3.5 w-11/12 mx-auto hidden sm:block">We connect our customers in a win-win good relationship. Leave all the hassle real estate  transactions to us.</p>
                        <div className="mt-6 sm:mt-14">
                            <button className="fst-contact-btn">Contact Us</button>
                        </div>

                    </div>
                    <div className="text-center">
                        <img src="https://i.ibb.co/nRTc5Sn/meeting.png" alt="" />
                        
                        <h4 className="subTitle pt-4 md:pt-8  md:w-11/12 mx-auto">Plenty of Land & Apartment in Every Area in Dhaka </h4>
                        <p className="subTitle-para pt-3.5 w-11/12 mx-auto hidden sm:block">We have lot of properties in major place in Dhaka like Banani,Gulshan, Baridhara Bashundha,purbachal all over the Dhaka city.</p>
                        <div className="mt-6 sm:mt-9">
                            <button className="fst-contact-btn">Contact Us</button>
                        </div>
                        
                    </div>
                </div>

            </div>

        </div>
    );
};

export default OurWork;