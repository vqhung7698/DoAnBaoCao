import { useState, useEffect } from 'react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            style={{
                position: 'fixed',
                bottom: '100px', // Đẩy lên trên Chatbot
                right: '25px',
                background: '#007bff',
                color: 'white',
                border: 'none',
                width: '50px',
                height: '50px',
                fontSize: '27px',
                borderRadius: '50%', // Biến thành hình tròn
                cursor: 'pointer',
                display: isVisible ? 'block' : 'none',
                transition: 'opacity 0.3s, transform 0.2s',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                zIndex: 999,
            }}
        >
            ⬆
        </button>
    );
};

export default BackToTop;
