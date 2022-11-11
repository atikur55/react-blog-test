import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../../Components/Loading";

const url = "https://atik.thesoftking.com/playlab/api/blog";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState(null);
  const [path, setPath] = useState(null);

  useEffect(() => {
    setLoading(true);

    const getBlog = async () => {
      try {
        const response = await fetch(`${url}/${id}`);
        const data = await response.json();

        const blog = data.data.blog;
        const imagePath = data.data.image_path;

        if (blog) {
          setBlog(blog);
          setPath(imagePath);
        } else {
          setBlog(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getBlog();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!blog) {
    return <h2 className="section-title">No blog to display</h2>;
  }

  return (
    <section className="section cocktail-section">
      <Link to="/blogs" className="btn btn-primary">
        Back
      </Link>
      <h2 className="section-title"></h2>
      <div className="drink">
        <img
          src={`https://atik.thesoftking.com/playlab/${path}/${blog.data_values.image}`}
          alt={blog.data_values.title}
        ></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {blog.data_values.title}
          </p>
          <p>
            <span className="drink-data">Description :</span>
            {blog.data_values.description.replace(/<[^>]+>/g, '')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Detail;
