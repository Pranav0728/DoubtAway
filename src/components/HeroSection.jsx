import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <div className="head">
            <h1 className="hero-heading">DoubtAway</h1>
            <h2>Where curiosity meets guidance</h2>
            <p className="hero-para">
              DoubtAway help students to solving the doubt by providing a
              separate platform. It would be great experience for student.
              Teachers are able to give their 100% effort for solving the doubt
              of students. This is a Platform for a College or School to solve
              doubt of their Students.
            </p>
          </div>
          <div className="btns">
            <Button className="btn student-btn">
              <NavLink to="/register">Student</NavLink>
            </Button>
            <Button className="btn teacher-btn">
              <NavLink to="/register">Teacher</NavLink>
            </Button>
          </div>
        </div>
        <div className="section-hero-image">
          <picture>
            <img
              src="./images/home.jpeg"
              alt="hero image"
              className="hero-img "
            />
          </picture>
        </div>
      </div>
      <div className="mode">
        <div className="container grid grid-two-column middle">
          <div className="section-hero-image">
            <picture>
              <img
                src="./images/doubt.jpeg"
                alt="hero image"
                className="hero-img "
              />
            </picture>
          </div>
          <div className="section-hero-data">
            <div className="head">
              <h2>Why DoubtAway?</h2>
              <p className="hero-para">
                Your direct path to learning clarity. Connecting students and
                teachers effortlessly, we're here to ensure every question finds
                its answer, making your learning journey smoother than ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
    margin-right: 2rem;
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
  .container {
    height: 60vh;
  }
  h2{
    font-weight:500;
  }

  .hero-heading {
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .mode {
    background-color: #f8f9fa;
    padding: 10rem;
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

export default HeroSection;
