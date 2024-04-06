import {Link} from "react-router-dom";


const NewestBlogs = ({homeList}) => {
    return (
        <div className='w-4/5 mt-[100px]'>
            <div className='grid grid-cols-3 gap-4'>
                {
                    homeList.map((item)=>{
                        return (<Link key={item['id']} className="card w-100 bg-base-100 shadow-xl">
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

        </div>
    );
};

export default NewestBlogs;