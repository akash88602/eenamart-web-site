import { useParams } from "react-router";
import Pruducts from "../../Pages/products/Pruducts";
import Banner from "../Bannar/Banner";
import HeadLine from "../HeadLine/HeadLine";
import Navber from "../Navber/Navber";
import Sliders from './../../Pages/Sliders/Sliders';
import { useEffect } from "react";

;

const Category = () => {
    const id=useParams('id');
    useEffect(()=>{
        console.log(id.id)
    },[])
    return (
        <div className="">
            
             <Banner></Banner> <br />
           
               
        </div>
    );
};

export default Category;