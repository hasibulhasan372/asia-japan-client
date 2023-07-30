import { Link } from 'react-router-dom';
import banner from '../../../assets/banner.png'
import house from '../../../assets/House_03.png'
import key from '../../../assets/key.png'
const Banner = () => {
    return (
       
            <div className=" pt-16 pb-20 sm:pt-24 sm:pb-28 md:pt-32 md:pb-36 lg:pt-44 lg:pb-48 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
                <div className='my-con'>
                    <div className='text-center'>
                        <h1 className=' text-xl sm:text-2xl md:text-[32px] lg:text-[44px] xl:text-[61px] md:leading-[50px]  lg:leading-[60px] xl:leading-[70px] text-[#fff] font-semibold px-2 sm:px-28 md:px-36 lg:px-[140px] '><span className='text-[#0092E0]'>Buy ,Sell,Rent</span>  Land or Apartment in Dhaka City with us </h1>
                        <p className='sm:text-lg md:text-xl xl:text-2xl text-white mt-3 px-1 sm:px-16 md:px-28 lg:px-56 xl:px-60'>Our goal is to contribute to the world through real estate business and consulting so that our customers can become richer and have</p>
                        <div className='mt-4 md:mt-6 lg:mt-10 sm:space-x-5 flex flex-col items-center gap-y-3 sm:flex-row justify-center'>
                            <Link to='/propertyListing' className='btn-two flex gap-x-2 items-center'><img src={house} alt="" /> See Property Listing</Link>

                            <Link to='/yourProperty' className='btn-one flex gap-x-2 items-center'><img src={key} alt="" /> Sell Your Properties</Link>
                        </div>
                    </div>
                </div>
            </div>
     
    );
};

export default Banner;