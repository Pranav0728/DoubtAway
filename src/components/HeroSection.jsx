

// import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import Typewriter from 'typewriter-effect';
import Card from "./Card.jsx";
import teacher from "../Assets/teacher.jpg";
import { useEffect } from "react";



const HeroSection = () => {

// Onscroll Animation function 
useEffect(()=> {
    let observer = new IntersectionObserver((entries) =>{
       entries.forEach((entry) =>{
         console.log(entry);
         if(entry.isIntersecting){
           entry.target.classList.add('show');
         }
         else{
          //  entry.target.classList.remove("show")
         }
       })
     } )

     if (typeof document !== 'undefined') {
       // will run in client's browser only
       const hiddenElements = document.querySelectorAll(".hidden");
        
       hiddenElements.forEach((el) => observer.observe(el));
   }

     },[]);


  return (
    <Wrapper className="bubble">
      <div className="container grid grid-two-column ">
        <div className="section-hero-data">
          <div className="head">
            <h1 className="hero-heading">Doubt<span1>Away</span1></h1>
            <div id='Multiples-skills-text'> 
                    <p> <div className='MultiText'> <Typewriter 
                                                options={{
                                                        strings: [
                                                        'Where curiosity meets guidance', 
                                                        'The future of e-Learning is wide open!',
                                                        'Online learning is an important tool'
                                                        ],
                                                        autoStart: true,
                                                        loop: true,
                                                    }}/></div></p>
</div>

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
              //src="./images/home.jpeg"
              src={teacher}
              alt="hero image"
              className="hero-img "
            /> 
          </picture>
        </div>
      </div>
      <div className="mode">
        <div className="container grid grid-two-column middle hidden">
          <div className="section-hero-image hidden">
            <Card className="card"/>
          </div>
          
          <div className="section-hero-data hidden">
            <div className="head newhead">
              <h2>Why DoubtAway?</h2>
              <p className="hero-para">
                Your direct path to learning clarity. Connecting students and
                teachers effortlessly, we are here to ensure every question finds
                its answer, making your learning journey smoother than ever.
              </p>
            </div>
          </div>
        </div>
        <div className="wave-container">
      <div className="wave"></div>
     </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`

@keyframes fade-up {
  0%{
      opacity: 0;
      transform: translateY(30px) scale(0.9);
  }



  100%{
      opacity: 1;
      transform: rotateY(0px) scale(1);
  }
  .card{
   z-index:10; 
  }
}
.wave-container {
  height: 2%;
  width: 100%;
  position: absolute;
  //bottom: 50;
  left: 0;
  background-color: ${({ theme }) => theme.colors.helper};

}

.wave {
  background: url(https://ilumina.ca/img/blue_bg_02.png)
  repeat-x;
  position: absolute;
  top: -198px;
  width: 6400px;
  height: 300px;
  // animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
  z-index:0;
  
}


@keyframes wave {
  0% {
     margin-left: 0;
  }
  100% {
     margin-left: -1500px;
  }
}

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
  
  span1{
    font-family: 'Inter', sans-serif;
   
  }
 .btn{
    animation: fade-up 1s;
  }

  #Multiples-skills-text p{
    font-size: 1.2rem;
    display: flex;
    flex-wrap: nowrap;
    gap: 7px;
    font-family: 'Inter', sans-serif;

}
.MultiText{
  color:yellow;
  margin-top: 0.5rem;
  font-size: 3rem;
 
 
}

  .container {
    height: 90vh;
  }
  h2{
    font-weight:500;
  }

  .hero-heading {
    font-size: 7rem;
    color:white;
    font-family: 'Kalam', cursive;
  }

  .head{
    animation: fade-up 1s;

  }
  .hero-para {
    margin-top: 1rem;
    margin-bottom: 3.4rem;
    width: 60rem;
    color:white;
    font-size: 1.8rem;
   
  }
  .mode {
    background-color: #f8f9fa;
    margin-top:-2rem;
    padding: 10rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
   
  }
  .section-hero-image img{
    
  }

  picture {
    text-align: center;
   
  }

  .hero-img {
    max-width: 80%;
    border-radius:20px;
    animation: fade-up 1s;
  }
  .newhead p{ 
    color:black;
  }



  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;
