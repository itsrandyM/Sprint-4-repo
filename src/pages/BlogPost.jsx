import React, { useState } from 'react';
import "./blog.css"

const BlogPost = ({title, content, image }) => {
  const [comment, setComment] = useState('');

  const handleLikeClick = () => {
    onLike(post.id);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      onAddComment(post.id, comment);
      setComment('');
    }
  };

  return (
    
      <div className="blog-post">
      <h2>{title}</h2>
      <img src={image} alt="Blog Post" />
      <p>{content}</p>
    </div>
  );
};

export default BlogPost;
