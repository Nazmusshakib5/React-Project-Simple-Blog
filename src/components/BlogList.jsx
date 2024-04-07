import {Link, useParams} from "react-router-dom";
import {blogListApi} from "../ApiCalling/apiCalling.js";
import {useEffect, useState} from "react";
import Loader from "./Loader.jsx";

const BlogList = () => {
    const  {categoryID}=useParams();
    const [blogpost,setBlogpost]=useState([])
    useEffect(() => {
        (async ()=>{
            let res=await blogListApi(categoryID);
            setBlogpost(res);
        })()
    }, [categoryID]);

    return (
        blogpost.length!==0?
            (<div className='w-4/5 mt-[100px]'>
            <div className='grid grid-cols-3 gap-4'>
                {
                    blogpost.map((item) => {
                        return (<Link to={'/details/'+item['id']} key={item['id']} className="card w-100 bg-base-100 shadow-xl">
                            <figure><img src={item['img']}
                                         alt="image"/></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item['title']}</h2>
                                <p>{item['short']}</p>
                            </div>
                        </Link>)
                    })
                }

            </div>

        </div>):(<Loader/>)
    );
};

export default BlogList;