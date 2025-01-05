import React, { useState } from 'react';
import './AddNewArticle.css';

const AddNewArticle = ({ addNewArticle }) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newArticle = {
            title,
            author,
            content,
            picture: image,
            firstParagraph: content.split('.').slice(0, 1).join('.'),
        };

        addNewArticle(newArticle);

        setTitle("");
        setAuthor("");
        setContent("");
        setImage("");
    };

    return (
        <div className="wrapper">
            <div className="flip-card__inner">
                <div className="flip-card__front">
                    <h2 className="title">Add New Article</h2>
                    <form className="flip-card__form" onSubmit={handleSubmit}>
                        <input
                            className="flip-card__input"
                            type="text"
                            value={title}
                            placeholder="Title"
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                        <input
                            className="flip-card__input"
                            type="text"
                            value={author}
                            placeholder="Author"
                            onChange={(e) => setAuthor(e.target.value)}
                            required
                        />
                        <textarea
                            className="flip-card__input"
                            value={content}
                            placeholder="Content"
                            rows="4"
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                        <input
                            className="flip-card__input"
                            type="file"
                            value={image}
                            placeholder="Image URL"
                            onChange={(e) => setImage(e.target.value)}
                            required
                        />
                        <button className="flip-card__btn" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNewArticle;
