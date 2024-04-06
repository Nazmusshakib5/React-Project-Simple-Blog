import {useEffect, useState} from "react";
import {navCategoryApi} from "../ApiCalling/apiCalling.js";
import {NavLink} from "react-router-dom";

const Layout = (props) => {
    const [list,setList]=useState([]);

    useEffect(() => {
        (async ()=>{
            let res=await navCategoryApi();
            setList(res)
        })()
    }, []);

    return (
        <div className='flex w-full justify-center items-center'>
            <div className="navbar shadow-md bg-slate-100 text-black md:px-[160px] z-10 fixed top-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                            <li><NavLink to='/' className='font-normal'>হোম</NavLink></li>
                            {list.map((item) => {
                                return <li key={item['id']}><NavLink
                                    to={'/postlist/' + item['id']}>{item['name']}</NavLink></li>
                            })
                            }

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/' className='font-normal'>হোম</NavLink></li>
                        {list.map((item) => {
                            return <li key={item['id']}><NavLink to={'/postlist/' + item['id']}>{item['name']}</NavLink>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
            {props.children}

        </div>
    );
};

export default Layout;