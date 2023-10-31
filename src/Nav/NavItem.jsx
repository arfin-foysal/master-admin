import { BiSolidRightArrowAlt} from "react-icons/bi";
import { BsGear } from "react-icons/bs";


// Ex: link: "schooladmin/enrollment-list",
  
  
export const navItem = [

  
  {
    title: "Master Settings",
    role: "SchoolAdmin",
    icon: <BsGear size={14} />,
    children: [
      {
        title: "User List",
        link: "user-list",
        role: "SchoolAdmin",
        icon: <BiSolidRightArrowAlt />,
      },
    ],
  },
  
  
];
