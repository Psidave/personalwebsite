import React from 'react';
import { useNavigate } from 'react-router-dom'; // Needed for navigation
import styles from '../stylesheet/home.module.css';

const Home = () => {
  const navigate = useNavigate();

  // A generic click handler
  const handleClick = () => {
    alert('You clicked me!');
  };

  // Handles the About Me button
  const handleAboutMeClick = () => {
    navigate('/aboutme'); 
  };

  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <button className={styles.homeButton} onClick={handleClick}>Home</button>
        <button className={styles.aboutButton} onClick={handleAboutMeClick}>About Me</button>
        <button className={styles.contactsButton} onClick={handleClick}>Contact</button>
        <button className={styles.servicesButton} onClick={handleClick}>Services</button>

        <h1 className={styles.centeredHeading}>I am Adrian Orig</h1>
        <h2 className={styles.details}>
          Computer Engineering graduate turned passionate web developer in the making.
        </h2>

        <button className={styles.portfolioButton}>
          <span>My Portfolio</span>
          </button>
        <button className={styles.hireButton}>
          <span>Hire Me</span></button>
      </div>
    </div>
  );
};

export default Home;
