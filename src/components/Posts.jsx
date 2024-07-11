import React from "react";
import PostItem from "./PostItem";
import { useDataContext } from "../context/DataContextProvider";

const Posts = () => {
  const { loading, data } = useDataContext();

  const reversedBlogs = data && [...data].reverse();

  return (
    <>
      {loading ? (
        <div className="loading">loading...</div>
      ) : (
        <section className="posts">
          {data.length > 0 ? (
            <div className="container posts__container">
              {reversedBlogs.map(
                ({ id, thumbnail, category, title, desc, authorID }) => (
                  <PostItem
                    key={id}
                    postID={id}
                    thumbnail={thumbnail}
                    category={category}
                    title={title}
                    description={desc}
                    authorID={authorID}
                  />
                )
              )}
            </div>
          ) : (
            <h2 className="center">No posts found</h2>
          )}
        </section>
      )}
    </>
  );
};
export default Posts;
