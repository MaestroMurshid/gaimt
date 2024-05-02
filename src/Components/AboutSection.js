import React, { useState, useEffect, useRef } from 'react';
import FadeInOnScroll from './FadeInOnScroll'; // Assuming same directory

import styles from './AboutSection.module.css';

function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutContentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });

    if (aboutContentRef.current) {
      observer.observe(aboutContentRef.current);
    }

    return () => observer.disconnect();
  }, [aboutContentRef]);

  return (
    <section className={styles.about}>
      <div className={styles.aboutContent} ref={aboutContentRef}>
        <div className={styles.aboutText}>
        <FadeInOnScroll>
          <h2>About Us</h2>
          </FadeInOnScroll>
          <FadeInOnScroll>
          <p>
            Our platform delivers innovative AI-powered marketing solutions tailored to businesses of all sizes. Harnessing the power of Generative AI, we provide intuitive tools for poster designing, content creation, and brand slogan generation, empowering brands to thrive in today's dynamic market. 
            With a focus on affordability and accessibility, we're committed to helping businesses elevate their presence and drive success.
          </p>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
