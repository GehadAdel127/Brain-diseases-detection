import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollButton from '../Components/ScrollButton';
import blogData from '../Data';

const Blogs = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredPosts = blogData.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <div>
            <div className="allPosts">
                <h3>All Posts</h3>
                <div className="searchContainer">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="cards">
                    {filteredPosts.map((post, index) => (
                        <Link to={`/blog/${index}`} key={index} className="card-link">
                            <div className="card" key={index}>
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
                        </Link>
                    ))}
                </div>
                <ScrollButton />
            </div>
        </div>
    )
}

export default Blogs