import React from 'react';
import styles from './HeroSection.module.css';
import Typewriter from './Typewriter'; // Import the Typewriter component
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import Header from './Header';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <>
    <Header />
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>
        <Typewriter text="Elevate your brand with AI-driven marketing solutions" /></h1>
        <p>
          Generate high-quality marketing materials in minutes, without the need for expensive agencies.
        </p>
        <Link to="signup" className={styles.button}>Get Started</Link>
      </div>
     
      <img src="watch.jpeg" alt="Watch." className={styles.heroImagea} />
     
      <img src="second.jpeg" alt="Watch"  className={styles.heroImageb} />
    </section>
    <AboutSection />
    <FeaturesSection />
    </>
  );
}

export default HeroSection;
