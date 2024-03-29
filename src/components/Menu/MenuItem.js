import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { IoIosArrowDown, IoIosArrowUp, IoIosHome } from "react-icons/io";

// import { Link } from 'react-router-dom'
const MenuItem = ({icon, title, url, onClick, sub_menus}) => {

    const [ isExpanded, setIsExpanded ] = useState(false);

    const toggleCollapse = ()=>{
        setIsExpanded(!isExpanded)
    }
    return (
        <li className="py-3" onClick={()=> toggleCollapse()}>

            <a href={url} className="text-1xl hover:text-white active:text-white font-bold text-slate-600 flex items-center  font-inter " >
                {
                    sub_menus.length > 0 ? isExpanded ? <IoIosArrowUp />: <IoIosArrowDown /> :<></>
                }
                {icon}
                <h2 className="ml-5 font-18">{title}</h2>
            </a>
            <Collapse isOpened={isExpanded}>
                {
                    sub_menus.map(sub_menu=>(
                        <div className=" px-16 font-16  p-1 hover:text-white active:text-white font-bold text-slate-600 ">{sub_menu.title}</div>
                    ))
                }
            </Collapse>
        </li>
    )
}

export default MenuItem;