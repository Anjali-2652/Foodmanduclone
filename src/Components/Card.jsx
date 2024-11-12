import React from 'react'
import { RiMapPin2Fill } from "react-icons/ri";
import { RiEBike2Fill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";



const Card = (props) => {
    const {propData} = props;
    const {VendorListingWebImageName, Name, Address1, DeliveryDistanceStr, CuisineTags, } = propData;
  return (
    <div>
      
    <img  className='h-52 w-96' src={VendorListingWebImageName}/>
    <div className='flex flex-col gap-1 font-bold'>
        <p className='font-bold text-[22px]'>{Name}</p>
        <div className='flex gap-4 '>
            <div className='flex items-center'>
            <RiMapPin2Fill className='mr-1'/>
            {Address1}
            </div>
            <div className='flex items-center'>
            <RiEBike2Fill className='mr-1'/>
            {DeliveryDistanceStr}
            </div>
        </div>
        <div className='flex items-center'>
        <IoFastFood className='mr-1'/>
        {CuisineTags}
        </div>
    </div>

    </div>
  )
}

export default Card
