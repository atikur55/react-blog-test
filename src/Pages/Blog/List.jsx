import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import SingleBlog from "../../Components/SingleBlog";

const url = "https://atik.thesoftking.com/playlab/api/blogs";

const List = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  const fetchBlog = async () => {
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      const blogs = data.data;
      setBlogs(blogs);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchBlog();
  },[])

  if(loading){
    return <Loading />
  }

  if(!blogs){
    return <h2>Data Not Found</h2>
  }
  const blogData = blogs.blogs 
  const imagePath = blogs.image_path

  return (
    <section className="section">
      <div className="display-create-blog">
        <h2 className="section-title">All Blogs</h2>
      </div>
      <div className="cocktails-center">
        {blogData.map((item) => {
          return <SingleBlog key={item.id} {...item} imagePath={imagePath}/>
        })}
      </div>
    </section>
  );
};

export default List;
