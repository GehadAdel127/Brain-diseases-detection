import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollButton from '../Components/ScrollButton';
import blogData from '../Data'; // Assuming blogData is imported from your data file
import './HomePage.css';

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredPosts = blogData.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="home">
                <div className='homeparagraph'>
                    <h2>The Book Lover</h2>
                    <p>READ ALL ABOUT IT</p>
                </div>
            </div>

            <div className="allPosts">
                <h3>Recommended Posts</h3>
                <div className="searchContainer">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="cards">
                    {filteredPosts.slice(0, 4).map((post, index) => (
                        <Link to={`/blog/${index}`} key={index} className="card-link">
                            <div className="card">
                                <img src={post.picture} alt={post.title} />
                                <div className="articleInfo">
                                    <h2>{post.title}</h2>
                                    <p>{post.firstParagraph}</p>
                                    <span></span>
                                    <div className="author">
                                        <p className="authorName">{post.author}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <ScrollButton />
            </div>
        </>
    );
}

export default HomePage;
