import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {detailsApi} from "../ApiCalling/apiCalling.js";
import Loader from "./Loader.jsx";

const BlogDetails = () => {
    const {postID}=useParams();
    const [detailedBlog,setDetailedBlog]=useState([]);
    useEffect(() => {
        (async ()=>{
            let res=await detailsApi(postID);
            setDetailedBlog(res);

        })()
    }, []);
    console.log(detailedBlog)
    return (
        detailedBlog.length!==0 && detailedBlog['postDetails'] !==null ?
        (<div className='mt-[100px] flex justify-center'>
            <div  key={detailedBlog['postDetails']['id']} className="card mb-8 w-4/5 bg-base-100 shadow-xl">
                <figure><img src={detailedBlog['postDetails']['img']}
                             alt="image"/></figure>
                <div className="card-body ">
                    <h2 className="card-title mx-auto mb-4">{detailedBlog['postDetails']['title']}</h2>
                    <p>{detailedBlog['postDetails']['content']}</p>
                </div>
            </div>

        </div>):(<Loader/>)
    );
};

export default BlogDetails;