import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../Data';

const BlogDetails = () => {
    const { id } = useParams();
    const post = blogData[id];

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="blogDetails">
            <div className="card" key={post.id}>
                <img src={post.picture} alt={post.title} />
                <div className="articleInfo">
                    <h2>{post.title}</h2>
                    <p>{post.firstParagraph}</p>
                    <span></span>
                    <div className="author">
                        <p className='authorName'>{post.author}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;
