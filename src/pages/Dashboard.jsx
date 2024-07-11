import React from "react";
import { Link } from "react-router-dom";
import MetaData from "../components/MetaData";
import { HelmetProvider } from "react-helmet-async";
import { useDataContext } from "../context/DataContextProvider";
import { toast } from "react-toastify";


const Dashboard = () => {
  const { data, deletePost } = useDataContext();
  const handleDelete = (id) => {
    deletePost(id);
    toast.success("Post deleted")
  };
  return (
    <HelmetProvider>
      <section className="dashboard">
        <MetaData title="My Posts" />
        {data.length ? (
          <div className="container dashboard__container">
            {data.map((post) => {
              return (
                <article key={post.id} className="dashboard__post">
                  <div className="dashboard_post__info">
                    <div className="dashboard_post__thumbnail">
                      <img src={post.thumbnail} alt="" />
                    </div>
                    <h5>{post.title}</h5>
                  </div>
                  <div className="dashboard_post__actions">
                    <Link
                      to={`/posts/${post.id}`}
                      style={{ margin: "auto", fontSize: "0.9rem" }}
                    >
                      View
                    </Link>
                    <Link
                      to={`/posts/${post.id}/edit`}
                      className="btn primary sm"
                    >
                      Edit
                    </Link>
                    <a
                      href="#"
                      className="btn danger sm"
                      onClick={() => handleDelete(post.id)}
                    >
                      Delete
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <h2 style={{ textAlign: "center" }}>You have made no posts yet.</h2>
        )}
      </section>
    </HelmetProvider>
  );
};

export default Dashboard;
