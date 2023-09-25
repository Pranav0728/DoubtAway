import React from "react";
import styled from "styled-components";

const Guidecompo = () => {
  const Compo = styled.section`
  text-align:center;

  .container{
    margin:10rem;
  }
  `;
  return (
    <Compo>
      <div className="container">
        <h1>Guide for Student</h1>
        <iframe
          width="900"
          height="400"
          src="https://www.youtube.com/embed/pl-tBjAM9g4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="container">
        <h1>Guide for Teacher</h1>
        <iframe
          width="900"
          height="400"
          src="https://www.youtube.com/embed/u-8nJj1EXhw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </Compo>
  );
};

export default Guidecompo;
