import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link} from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const Home = () => {

const [restaurantData, setRestaurantData] = useState([]);

const getRestaurantDetail = async() => {
  const data = await fetch("https://foodmandu.com/webapi/api/Vendor/GetVendors1?Cuisine=&DeliveryZoneId=1&IsFav[…]ndorTagsCSV=FEATURED,&filtertags=FEATURED&search_by=restaurant");

  const jsonData = await data.json();
  setRestaurantData(jsonData);
};


useEffect(() => {
  // getRestaurantDetail();
}, []);

  return (
    <div className="">

      <div className="relative">
        <img
          className="h-[500px] w-full"
          src="https://i.pinimg.com/originals/a1/af/e3/a1afe3d0e72d48986573b7ec9595f583.jpg"
        />

        <div className="absolute  text-[20px] top-0 right-0 left-0 bottom-0 flex  flex-col items-center justify-center">
          <p className="font-bold ">Order food from the widest range of </p>
          <p className="font-bold ">restaurants.</p>

          <div className="flex gap-4  mt-4">
            <input className="p-4 rounded-lg outline-none" placeholder="Restaurants or Cuisine" />
            <button className="bg-[#ffdd00]  rounded-lg p-4">Find Restaurants</button>
          </div>
        </div>
      </div>


      <div className="mx-8 flex justify-between py-4">
        <p className="font-bold text-xl ">Featured Restaurants </p>
        <Link to = "restaurants" className="flex items-center font-bold text-xl">View all
        <FaArrowRight className="ml-4"/>
        </Link>
      </div>
    
    <div  className="flex flex-wrap gap-8 items-center justify-center my-4">
      {
      restaurantData.map((data)=>(
        <Card Key = {data.Id} propData = {data}/>
      ))}
    </div>
    </div>
  );
};

export default Home;
