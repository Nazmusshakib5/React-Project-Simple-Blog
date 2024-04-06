import Layout from "../layout/Layout.jsx";
import {useEffect, useState} from "react";
import {homePageApi} from "../ApiCalling/apiCalling.js";
import NewestBlogs from "../components/NewestBlogs.jsx";
import Loader from "../components/Loader.jsx";

const HomePage = () => {
    const [homeList,setHomeList]=useState([]);
    useEffect(() => {
        (async ()=>{
            let res=await homePageApi();
            setHomeList(res);
        })()
    }, []);
    return (
        <Layout>
            <div className='flex justify-center items-center'>
                {
                    homeList.length!==0?(<NewestBlogs homeList={homeList}/>):(<Loader/>)
                }
            </div>

        </Layout>
    );
};

export default HomePage;