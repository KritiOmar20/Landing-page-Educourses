import React from 'react';
import './Testimonials.css';

const Testimonials = () => (
  <section id="testimonials" className="testimonials">
    <h2>What Our Students Say</h2>
    <div className="testimonial">
      <p>"The web development course was amazing. I learned so much in a short amount of time!"</p>
      <cite>- Alex J.</cite>
    </div>
    <div className="testimonial">
      <p>"The data science course provided valuable insights and practical skills for my career."</p>
      <cite>- Jamie R.</cite>
    </div>
    <div className="testimonial">
      <p>"Graphic design was a game-changer for me. The course was well-structured and informative."</p>
      <cite>- Morgan T.</cite>
    </div>
    <div className="testimonial">
      <p>"The DevOps course gave me a thorough understanding of CI/CD pipelines. Highly recommend!"</p>
      <cite>- Taylor W.</cite>
    </div>
    <div className="testimonial">
      <p>"The DSA course was intense but incredibly rewarding. It helped me ace my technical interviews."</p>
      <cite>- Jordan K.</cite>
    </div>
    {/* Add more testimonials as needed */}
  </section>
);

export default Testimonials;
