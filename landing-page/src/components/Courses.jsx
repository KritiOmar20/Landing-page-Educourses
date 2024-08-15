import React from 'react';
import './Courses.css';

import webDevelopmentImg from '../assets/web-development.jpg';
import dataScienceImg from '../assets/DATA-SCIENCE.png';
import graphicDesignImg from '../assets/graphic-design.png';
import dsaImg from '../assets/Data-Structure-and-Algorithm.jpg';
import devopsImg from '../assets/Devops.jpg';

const CourseCard = ({ title, description, imgSrc }) => (
  <div className="course-card">
    <img src={imgSrc} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <a href="#" className="course-button">Learn More</a>
  </div>
);

const Courses = () => (
  <section id="courses" className="courses">
    <h2>Our Courses</h2>
    <div className="courses-grid">
      <CourseCard 
        title="Web Development" 
        description="Learn how to build modern websites and applications."
        imgSrc={webDevelopmentImg}
      />
      <CourseCard 
        title="Data Science" 
        description="Analyze and interpret complex data."
        imgSrc={dataScienceImg}
      />
      <CourseCard 
        title="Graphic Design" 
        description="Create stunning visuals and design layouts."
        imgSrc={graphicDesignImg}
      />
      <CourseCard 
        title="Data Structure and Algorithms" 
        description="A beginner friendly course using Java and C++."
        imgSrc={dsaImg}
      />
      <CourseCard 
        title="Devops and Cloud" 
        description="The key to unlocking faster development."
        imgSrc={devopsImg}
      />
      
    </div>
  </section>
);

export default Courses;
