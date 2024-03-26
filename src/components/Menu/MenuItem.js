import React from "react";
import { IoIosHome } from "react-icons/io";

// import { Link } from 'react-router-dom'
const MenuItem = ({icon, title, url}) => {

    console.log(title);
    return (
        <li className=" my-2">
            <a href={url} className="text-1xl hover:text-white active:text-white font-bold text-slate-600 flex items-center  font-inter " >
                {icon}
                <h2 className="ml-5 text-lg">{title}</h2>
            </a>
        </li>
    )
}

export default MenuItem;