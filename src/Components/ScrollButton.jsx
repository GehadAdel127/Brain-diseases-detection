import React, { useEffect, useState } from 'react';
import './ScrollButton.css';

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isBottom, setIsBottom] = useState(false);

    const toggleVisibility = () => {
        const scrollHeight = window.scrollY;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        if (scrollHeight > windowHeight) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }

        if (scrollHeight + windowHeight >= docHeight - 10) {
            setIsBottom(true);
        } else {
            setIsBottom(false);
        }
    };

    // Scroll to top or bottom of the page
    const handleScroll = () => {
        if (isBottom) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <div className="scrollButton" onClick={handleScroll}>
                    {isBottom ? '↑' : '↓'}
                </div>
            )}
        </>
    );
};

export default ScrollButton;
