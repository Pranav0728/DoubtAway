import React from "react";
import Safety from "../Assets/budget.png";
import no_Emmison from "../Assets/no_Emmison.png";
import budget from "../Assets/budget.png";
import styled from "styled-components";

const Card = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleChange = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Wrapper>
      <div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0 button1">
              {/* <button onClick={checkNext}>{'<'}</button> */}
            </div>
          </div>
          <div className="md:w-2/4 md:mb-0 mb-6 flex flex-col text-center items-center">
            <section
              id="slider"
              className="w-16 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0"
            >
              <input
                type="radio"
                className="radiobtn"
                name="slider"
                id="s1"
                checked={selectedIndex === 0}
                onChange={() => handleChange(0)}
              />
              <input
                type="radio"
                className="radiobtn"
                name="slider"
                id="s2"
                checked={selectedIndex === 1}
                onChange={() => handleChange(1)}
              />
              <input
                type="radio"
                name="slider"
                className="radiobtn"
                id="s3"
                checked={selectedIndex === 2}
                onChange={() => handleChange(2)}
              />
              <label htmlFor="s1" id="slide1" className="imgCard">
                <img className="fea" src={Safety} alt="" />
                <div className="Comp">
                  <h1>Safety</h1>
                  <h4>We can assure you Our Product Is very Safe and easy </h4>
                  <button>Learn More</button>
                </div>
              </label>
              <label htmlFor="s2" id="slide2" className="imgCard">
                <img className="fea" src={no_Emmison} alt="" />
                <div className="Comp">
                  <h1>No Emission</h1>
                  <h4>We can assure you Our Product Is very Safe and easy </h4>
                  <button>Learn More</button>
                </div>
              </label>
              <label htmlFor="s3" id="slide3" className="imgCard">
                <img className="fea" src={budget} alt="" />
                <div className="Comp">
                  <h1>Easily Doubt Away</h1>
                  <h4>We can assure you Our Product Is very Safe and easy </h4>
                  <button>Learn More</button>
                </div>
              </label>
            </section>
          </div>
          <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0 button2">
              {/* <button onClick={checkNext}>{'>'}</button> */}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  input[type="radio"] {
    visibility: hidden;
  }
  .flex {
    z-index: 20;
  }

  #slider {
    height: 30vw;
    width: 40vw;
    margin: 0 auto;
    left: -2%;
    position: relative;
    perspective: 1000px;
    transform-style: preserve-3d;
  }

  #slider label {
    margin: auto;
    background-color: aliceblue;
    width: 50%;
    height: 90%;
    border-radius: 50px;
    position: absolute;
    left: 0;
    right: 0;
    cursor: pointer;
    transition: transform 0.4s ease;
  }

  #s1:checked ~ #slide3,
  #s2:checked ~ #slide1,
  #s3:checked ~ #slide2 {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
    transform: translate3d(-50%, 0, -100px);
  }

  #s1:checked ~ #slide1,
  #s2:checked ~ #slide2,
  #s3:checked ~ #slide3 {
    box-shadow: 0 13px 25px 0 rgba(0, 0, 0, 0.3),
      0 11px 7px 0 rgba(0, 0, 0, 0.19);
    transform: translate3d(0, 0, 0);
  }

  #s1:checked ~ #slide2,
  #s2:checked ~ #slide3,
  #s3:checked ~ #slide1 {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
    transform: translate3d(50%, 0, -100px);
  }
  .button1 {
    position: relative;
    top: 210px;
    margin-left: 26%;
  }
  .button1 button {
    padding: 9px 9px;
    border: none;
  }
  .button2 {
    margin-left: 67.5%;
    top: -235px;
    position: relative;
  }
  .button2 button {
    padding: 9px 9px;
    border: none;
  }
  .imgCard img {
    width: 50%;
    margin-left: 25%;
    position: relative;
    top: 30px;
  }
  .Comp {
    position: relative;
    top: 50px;
  }
  .Comp h1 {
    position: relative;
    text-align: center;
    font-size: 150%;
  }

  .Comp h4 {
    position: relative;
    top: 15px;
    padding: 0px 20px;
    font-size: 1.2rem;
  }
  .Comp button {
    border: none;
    border-radius: 8px;
    color: white;
    background-color: red;
    padding: 9px 12px;
    margin-left: 90px;
    position: relative;
    top: 50px;
  }
`;

export default Card;
