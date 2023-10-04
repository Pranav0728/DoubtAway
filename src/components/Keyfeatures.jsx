//import React from "react";
import styled from "styled-components";
import imgs  from "../Assets/Safety.png";
//import { useEffect } from "react";


const Keyfeatures = () => {

  // Onscroll Animation function 
  // useEffect(()=> {
  //   let observer = new IntersectionObserver((entries) =>{
  //      entries.forEach((entry) =>{
  //        console.log(entry);
  //        if(entry.isIntersecting){
  //          entry.target.classList.add('show');
  //        }
  //        else{
  //          entry.target.classList.remove("show")
  //        }
  //      })
  //    } )
  
  //    if (typeof document !== 'undefined') {
  //      // will run in client's browser only
  //      const hiddenElements = document.querySelectorAll(".hidden");
        
  //      hiddenElements.forEach((el) => observer.observe(el));
  //  }
  
  //    },[]);



  const Keyfeature = styled.section`
    .container{
      display: flex;
      flex-flow:row wrap;
      align-items:center;
      justify-content:center;
    }
  display: flex;
    align-items: center;
    flex-direction: column;
    .column {
      transition: all 0.3s ease;
      background-color: #f8f9fa;
      width:30rem;
      height: 30rem;
      display: flex;
      flex-flow:row wrap;
      align-items: center;
      flex-direction: column;
      border-radius:1rem;
      padding:1.5rem;
      //box-shadow: 6px 3px 3px black;
      box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
      cursor:pointer;
    }
    .column h2{
      font-size:1.5rem;
      align-text:center;
    }

    .column p{
      font-size:1.5rem;
      margin-top:5rem;
    }
    .keyhead{
        font-size:4rem;
        font-weight:700;
        margin:0 0 5rem 0;
        font-family: 'Dosis', sans-serif;
        font-family: 'Kalam', cursive;
        font-family: 'Roboto Mono', monospace;
    }
    .FeaturesIMGS img{
      display: flex;
      justify-content:center;
      align-items:center;
    }
    .feature-img{
      width:20%;
      margin-left:40%;
      margin-top:5rem;
    }
    .column:hover{
      
      transform: translateY(-20px);
    }
  `;
  return (
    <Keyfeature>
      <h2 className="keyhead">- Key features -</h2>
      <div className="container grid grid-four-column ">
        <div className="column hidden">
          <h2>Instant Doubt Resolution</h2>
          <div className="FeaturesIMGS">
          <picture>
            <img
              src={imgs}
              alt="hero image"
              className="feature-img"
            /> 
          </picture>
        </div>
          <p>
            Connect with your class teachers in real-time to receive quick
            answers and clear explanations.
          </p>
        </div>
        <div className="column hidden">
          <h2>Instant Doubt Resolution</h2>
          <div className="FeaturesIMGS">
          <picture>
            <img
              src={imgs}
              alt="hero image"
              className="feature-img"
            /> 
          </picture>
        </div>
          <p>
            Connect with your class teachers in real-time to receive quick
            answers and clear explanations.
          </p>
        </div>
        <div className="column hidden">
          <h2>Instant Doubt Resolution</h2>
          <div className="FeaturesIMGS">
          <picture>
            <img
              src={imgs}
              alt="hero image"
              className="feature-img"
            /> 
          </picture>
        </div>
          <p>
            Connect with your class teachers in real-time to receive quick
            answers and clear explanations.
          </p>
        </div>
        <div className="column hidden">
          <h2>Personalized Support</h2>
          <div className="FeaturesIMGS">
          <picture>
            <img
              src={imgs}
              alt="hero image"
              className="feature-img"
            /> 
          </picture>
        </div>
          <p>
            Enjoy personalized attention and guidance to grasp concepts
            thoroughly.
          </p>
        </div>
        <div className="column hidden">
          <h2>Convenient Accessibility</h2>
          <div className="FeaturesIMGS">
          <picture>
            <img
              src={imgs}
              alt="hero image"
              className="feature-img"
            /> 
          </picture>
        </div>
          <p>
            Whether its day or night, DoubtAway is here to help whenever you
            need it.
          </p>
        </div>
        <div className="column hidden">
          <h2>Secure Learning Space</h2>
          <div className="FeaturesIMGS">
          <picture>
            <img
              src={imgs}
              alt="hero image"
              className="feature-img"
            /> 
          </picture>
        </div>
          <p>
            Your privacy and data security are our top priorities, creating a
            safe environment for interaction.
          </p>
        </div>
      </div>
    </Keyfeature>
  );
};

export default Keyfeatures;
