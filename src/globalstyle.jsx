import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Work Sans', 'sans-serif';
 }
html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}

body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}

//On-scorll Animation
.hidden{
  opacity:0;
  filter:blur(5px);
  transform:translateY(20px);
  transition:all 1s;
}

.show{
opacity:1;
filter:blur(0);
transform:translateY(0px);
// ##

}


.hidden1{
  opacity:0;
  filter:blur(5px);
  transform:translateY(20px);
  transition:all 1s;
}

.show1{
opacity:1;
filter:blur(0);
transform:translateY(0px);
// ##

}
body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}


h1{
  color:${({ theme }) => theme.colors.heading};
  font-size: 6rem;
  font-weight: 600;
}

h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-size: 3.5rem;
   font-weight: 600;
   white-space: normal;
  }

  h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p {
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  line-height: 1.5;
  margin-top: 1rem;
  font-weight:400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 5rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1fr 1fr 1fr ;
}

  .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
      text-align:center;
    }

    input, textarea{
    ${'' /* max-width: 50rem; */}
    ${'' /* color: ${({ theme }) => theme.colors.black}; */}
    padding: 1.6rem 2.4rem;
    ${'' /* border: 1px solid ${({ theme }) => theme.colors.border}; */}
    ${'' /* text-transform: uppercase; */}
   ${'' /* box-shadow: ${({ theme }) => theme.colors.shadowSupport}; */}
}
    input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
    }

    .is-sticky {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 999;
      box-shadow: 0 2px 24px 0 rgb(0 0 0 / 15%);
      background-color: ${({ theme }) => theme.colors.bg};
      animation:  2s ease-in-out 0s normal none 1;
      padding-top: 0px;
      padding-bottom: 0px;
      border-bottom: 0.0625rem solid #e0e0e0;
    }

    .Header{
      padding: 0 4.8rem;
   height: 5.5rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: fixed;
   width: 100%;
   top: 0;
    }
    
    .bubble::after {
      content: '';
      border-top-left-radius: 170% 80%;
      border-top-right-radius: 170% 80%;
      position: absolute;
      bottom: 0;
      z-index: -1;
      width: 100%;
      background-color:  ${({ theme }) => theme.colors.helper};
      height: 85%;
      
  }
 

    .logo {
      height: auto;
      width: 17rem;
      margin-bottom:-10px;
    }
  
    .dropdown {
      position: relative;
      display: inline-block;
    }
    .dropdown span {
      font-size: 2rem;
      margin-right: 2rem;
    }
  
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 16rem;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      padding: 1.2rem 1.6rem;
      z-index: 1;
    }
    .dropdown-content p {
      font-size: 2rem;
    }
    .dropdown:hover .dropdown-content {
      display: block;
    }
  


/* ===========================================
/* media queries  
======================================= */
/* px  */
/* rem  */
/* em  */
/* 1500px */

//998px
@media (max-width:${({ theme }) => theme.media.tab}) {
      .container{
        padding: 0 3.2rem;
      }

        .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
}

@media (max-width:${({ theme }) => theme.media.mobile}) {

      html{
        font-size: 50%;
      }

      .grid{
        gap: 3.2rem;
      }

      .grid-two-column, .grid-three-column, .grid-four-column{
        grid-template-columns: 1fr;
      }
}


`;
