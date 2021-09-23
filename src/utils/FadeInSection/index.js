import { useState, useEffect, useRef } from "react";

const FadeInSection = (props) => {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();
    
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        let curr = domRef.current;
        observer.observe(curr);
        return () => observer.unobserve(curr);
    }, []);

    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
};

export default FadeInSection;