
import { createBrowserRouter } from "react-router-dom";

import Root from "../Layout/Root";
import Home from './../Components/Home/Home';
import AdminRoots from "../AdminRoots/AdminRoots";

import Dashdroard from "../Components/Dashdoard/Dashdroard";
import Users from './../Components/Users/Users';
import AddProducts from './../Components/AddProducts/AddProducts';
import Orders from './../Components/Orders/Orders';
import AdminHeader from "../Components/AdminHeader/AdminHeader";
import AddProducts_Edit from "../Components/AddProducts_Edit/AddProducts_Edit";
import CategoriesList from "../Components/AdminPoratal/Categoris/CategoriesList";
import CategoriesUpdate from "../Components/AdminPoratal/CategoriesUpdate/CategoriesUpdate";
import CategoriesCreate from "../Components/AdminPoratal/CategoriesCreacte/CategoriesCreate";
import Category from "../Components/Home/Category";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,

    children: [
      {
        index: true,
        Component: Home,
      }
    ]

  },
  {
    path: '/category/:id', Component: Category
  },
  {
    path: "/admin",
    Component: AdminHeader,
    children: [
      { path: "dashboard", Component: Dashdroard },
      { path: "product-update/:id", Component: AddProducts_Edit },
      { path: "productsadd", Component: AddProducts },
      { path: "categories-list", Component: CategoriesList },
      { path: 'categories-update/:id', Component: CategoriesUpdate },
      { path: 'categories-create', Component: CategoriesCreate },

    ],
  },
  {
    path: "*",
    element: <h1 className="text-center text-3xl mt-10">404 Page Not Found</h1>,
  },


]);