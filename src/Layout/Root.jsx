import { Outlet } from "react-router";
import Navber from "../Components/Navber/Navber";
import Footers from "../Components/Footers/Footers";
import HeadLine from "../Components/HeadLine/HeadLine";


const Root = () => {
    return (
        <div>
             <Navber></Navber><br />
             <HeadLine></HeadLine>
             <Outlet></Outlet>
             <Footers></Footers>
        </div>
    );
};

export default Root;