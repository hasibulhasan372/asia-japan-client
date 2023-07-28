import {FaHouse} from 'react-icons/fa6'
import {BiSolidArea} from 'react-icons/bi'
import {TbCurrencyTaka} from 'react-icons/tb'

const PopularPropertiesCard = ({property}) => {
    const {area, address, asset, size, price, img} = property;
    return (
        <div className="border border-[#F9EDED] rounded-[10px]  pb-[27px]">
            <img src={img} alt="" />
            <div className="pl-5">
                <h3 className="text-lg text-[#0092E0] font-semibold pt-5">{area}</h3>
                <h4 className="text-[#696969] text-[17px] font-medium pt-[7px] pb-[11px]">{address}</h4>
                <div className='flex gap-x-2'>
                    <p className="property-feature"><FaHouse></FaHouse>{asset}</p>
                    <p className='property-feature'><BiSolidArea></BiSolidArea>{size}</p>
                    <p className='property-feature'><TbCurrencyTaka className='rounded border bg-[#011E40] text-white'></TbCurrencyTaka>{price}</p>
                </div>
                <div className='lg:space-x-3 lg:mt-[30px]'>
                    <button className='popular-btn'>View Properties</button>
                    <button className='popular-btn-2'>Ask to Agent</button>
                </div>
            </div>
        </div>
    );
};

export default PopularPropertiesCard;