import axios from "axios";


const baseUrl='https://basic-blog.teamrabbil.com/api';

export async function navCategoryApi (){
    let res=await axios.get(baseUrl+'/post-categories');
    if (res.status===200){
        return res.data;
    }
    else{
        return []
    }
}
export async function homePageApi (){
    let res=await axios.get(baseUrl+'/post-newest');
    if (res.status===200){
        return res.data;
    }
    else{
        return []
    }
}

export async function blogListApi (id){
    let res=await axios.get(baseUrl+'/post-list/'+id);
    if (res.status===200){
        return res.data;
    }
    else{
        return []
    }
}

export async function detailsApi(id){
    let res=await axios.get(baseUrl+'/post-details/'+id);
    if(res.status===200){
        return res.data;
    }else{
        return  [];
    }
}