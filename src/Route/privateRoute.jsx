import { Navigate } from "react-router-dom";
import { getPath } from "./utils";
import DashboardHomePage from "../app/views/dashboardHomePage/DashboardHomePage";


//Ex: path: "schooladmin/content-outline-list/:id/:cid",
//Ex: to={`/dashboard/schooladmin/content-outline-list/${row?.row?.original?.id}/${id}`}><BsEyeFill size={17} />

export const privateRoute = [
  {
    path: "*",
    element: <Navigate replace to={getPath()} />,
    role: "all",
  },
  {
    path: "/dashboard",
    element: <Navigate replace to={getPath()} />,
    role: "all",
  },
  {
    path: "schooladmin",
    element: <DashboardHomePage/>,
    role: "SchoolAdmin",
  },
  
];
