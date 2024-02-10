import React from 'react'
import { Link } from "react-router-dom";
import Avatar from "../images/avatar8.jpg"

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/dsfsfd`} className="post__author">
        <div className="post__author_avatar">
            <img src={Avatar} alt="" />
        </div>
        <div className="post__author_details">
            <h5>By: Ernesto Broad</h5>
            <small>Just Now</small>
        </div>
    </Link>
  )
}

export default PostAuthor