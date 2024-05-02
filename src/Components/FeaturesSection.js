import React from 'react';
import styles from './FeaturesSection.module.css';

function FeaturesSection() {
  const features = [
    {
      title: 'AI-Powered Content Creation',
      description: 'Generate high-quality content for your marketing campaigns using the power of Generative AI.',
    },
    {
      title: 'Effortless Poster Design',
      description: 'Create stunning visuals for your brand with our intuitive poster design tools.',
    },
    {
      title: 'Slogan Generation',
      description: 'Craft catchy and memorable brand slogans to elevate your marketing message.',
    },
  ];

  return (
    <section className={styles.features}>
      <h2>Our Features</h2>
      <div className={styles.featuresList}>
        {features.map((feature, index) => (
          <div key={feature.title} className={styles.featureItem}>
            <span className={styles.featureIcon}>{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            {index === 1 && <div className={styles.separator}></div>}
             {index === 2 && <div className={styles.separator}></div>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
