import React from 'react';
import styles from '../stylesheet/home.module.css';

const Home = () => {
  // Define the function INSIDE the component
  const handleClick = () => {
    alert('You clicked me!');
  };

  return (
    <div className={styles.home}>
      <div className={styles.content}>
       <button className={styles.homeButton} onClick={handleClick}> Home </button>
       <button className={styles.aboutButton} onClick={handleClick}> About Me </button>
        <h1 className={styles.centeredHeading}>I am Adrian Orig</h1>
        <button className={styles.portfolioButton} onClick={handleClick}>My Portfolio </button>
      </div>
    </div>
  );
};

export default Home;
