import React, { useState, useEffect, useRef } from 'react';

function FadeInOnScroll({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [elementRef]);

  return (
    <div ref={elementRef} className={isVisible ? 'fade-in' : ''}>
      {children}
    </div>
  );
}

export default FadeInOnScroll;
