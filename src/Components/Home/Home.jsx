import Pruducts from "../../Pages/products/Pruducts";
import Banner from "../Bannar/Banner";
import HeadLine from "../HeadLine/HeadLine";
import Navber from "../Navber/Navber";
import Sliders from './../../Pages/Sliders/Sliders';

;

const Home = () => {
    return (
        <div className="">
             <Banner></Banner> <br />
             <h1 className="text-2xl font-semibold text-center mt-15">Popular Products</h1>
             <Sliders></Sliders> <br />
                 <h1 className="text-2xl font-semibold text-center mt-15">Chinees Products</h1>
             <Sliders></Sliders> <br />
                 <h1 className="text-2xl font-semibold text-center mt-15">Beauty & Health</h1>
             <Sliders></Sliders> <br />
                 <h1 className="text-2xl font-semibold text-center mt-15">Oral Care</h1>
             <Sliders></Sliders> <br /> <br />
             <Pruducts></Pruducts>
               

             
        </div>
    );
};

export default Home;