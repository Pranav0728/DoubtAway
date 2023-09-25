import React from "react";
import styled from "styled-components";

const Commitment = () => {
  const Commit = styled.section`
  .grid{
    margin-top:10rem;
    margin-bottom:10rem;
  }
    .up {
      text-align: center;
    }
    .image img {
      width: 100%;
      margin-bottom: 5rem;
    }
    h1 {
      margin-top: 3rem;
    }
    h3 {
      margin-bottom: 5rem;
    }
    padding: 9rem 0;

    .section-hero-data {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .section-hero-image {
      height: 100%;
      width: 100%;
    }
    .hero-top-data {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.helper};
    }
    h2 {
      font-weight: 500;
    }

    .hero-heading {
      font-size: 6.4rem;
    }

    .hero-para {
      margin-top: 1.5rem;
      margin-bottom: 3.4rem;
      max-width: 60rem;
    }
    .section-hero-image {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    picture {
      text-align: center;
    }

    .hero-img {
      max-width: 80%;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .grid {
        gap: 7.2rem;
      }
    }
  `;
  return (
    <Commit>
      <div className="container up">
        <h1>Helping expand learning for everyone</h1>
        <h3>
          We believe that everyone—educators and learners at every age and
          stage—deserve the tools and <br />
          skills that set them up for success in building the future they want
          for themselves.
        </h3>
        <picture className="image">
          <img src="./images/aboutbg2.jpg" alt="students" />
        </picture>
      </div>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <div className="head">
            <h2>What We Offer</h2>
            <p className="hero-para">
              Our innovative app provides a user-friendly platform where
              students can ask questions and receive personalized responses from
              their class teachers. We are committed to creating a collaborative
              and supportive learning environment that empowers students to
              thrive academically.
            </p>
          </div>
        </div>
        <div className="section-hero-image">
          <picture>
            <img
              src="./images/aboutbg1.jpg"
              alt="hero image"
              className="hero-img"
            />
          </picture>
        </div>
      </div>
      <div className="container grid grid-two-column middle">
        <div className="section-hero-image">
          <picture>
            <img
              src="./images/aboutbg3.jpg"
              alt="hero image"
              className="hero-img "
            />
          </picture>
        </div>
        <div className="section-hero-data">
          <div className="head">
            <h2>Our Mission</h2>
            <p className="hero-para">
              At DoubtAway, our mission is clear - To provide students with an
              easily accessible platform where doubts are met with timely,
              expert assistance. We are dedicated to fostering a sense of
              confidence and curiosity in every student, ensuring that no
              question goes unanswered.
            </p>
          </div>
        </div>
      </div>
    </Commit>
  );
};

export default Commitment;
