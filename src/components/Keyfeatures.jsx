import React from "react";
import styled from "styled-components";

const Keyfeatures = () => {
  const Keyfeature = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    .column {
      background-color: #f8f9fa;
      height: 30rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      border-radius:1rem;
      padding:1.5rem;
    }
    .keyhead{
        font-size:4rem;
        font-weight:600;
        margin:0 0 5rem 0;
    }
  `;
  return (
    <Keyfeature>
      <h2 className="keyhead">Key features</h2>
      <div className="container grid grid-four-column">
        <div className="column">
          <h2>Instant Doubt Resolution</h2>
          <p>
            Connect with your class teachers in real-time to receive quick
            answers and clear explanations.
          </p>
        </div>
        <div className="column">
          <h2>Personalized Support</h2>
          <p>
            Enjoy personalized attention and guidance to grasp concepts
            thoroughly.
          </p>
        </div>
        <div className="column">
          <h2>Convenient Accessibility</h2>
          <p>
            Whether it's day or night, DoubtAway is here to help whenever you
            need it.
          </p>
        </div>
        <div className="column">
          <h2>Secure Learning Space</h2>
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
