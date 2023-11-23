import React, { useEffect, useState } from 'react'
import "./Home.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Home = () => {

    const navigate = useNavigate();
    const [blog, setBlog] = useState([]);
    const fetchBlog = async () => {
        const response = await axios.get("https://65599dd16981238d054cbba7.mockapi.io/blog");
        setBlog(response.data)
    }
    useEffect(() => {
        fetchBlog();
    }, []);
    
    return (
        <>
            <div className="blogSection">
                {
                    blog.map((blog) => {
                        return (
                            <div key={blog.id}>
                                <div className="container" >
                                    <div className="leftContainer">
                                        <div className="top">
                                            <img src={blog.userImage} alt="userProfile" className='userProfile' />
                                            <span className="userName">{blog.userName}</span>
                                            <span className="createdAt">{blog.createdAt.slice(0, 10)}</span>
                                        </div>
                                        <h2 className="blogTitle">{blog.blogTitle}</h2>
                                        <p className="blogDescription">{blog.blogDescription}</p>
                                        <span className="blogCategory">{blog.blogCategory}</span>
                                        <button className="btn" onClick={()=>navigate(`/blog/${blog.id}`)}>Read More + </button>
                                    </div>
                                    <div className="rightContainer">
                                        <img src={blog.blogCoverImage} alt="blogCoverImage" className='blogCoverImage' />
                                    </div>
                                </div>
                                <hr />
                            </div>
                        )
                    })
                }

            </div>
        </>


    )
}

export default Home