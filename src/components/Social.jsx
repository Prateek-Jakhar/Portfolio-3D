import React from "react";
import styled from "styled-components";
import IconGitHub from "./icons/github";
import IconLinkedin from "./icons/linkedin";
import IconTwitter from "./icons/twitter";

let socialMedia = [
  {
    name: "GitHub",
    url: "https://github.com/adiig7",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/adiig7",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/adiig7",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/adiig7",
  },
];

const Social = () => {
  return (
    // <div className="absolute z-12 bg-white w-[2px] h-24 left-10 text-orange-900 "></div>
    // <div className="absolute flex flex-col justify-center items-center ">
    //   <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
    //   <div className="w-1 h-28 bg-[#915EFF]" />
    // </div>

    <StyledSocialList>
      {/* {socialMedia && */}
      {/* socialMedia.map(({ url, name }, i) => ( */}
      <li>
        <a
          href="https://github.com/Prateek-Jakhar"
          aria-label=""
          target="_blank"
          rel="noreferrer"
        >
          <IconGitHub />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/prateektwts"
          aria-label=""
          target="_blank"
          rel="noreferrer"
        >
          <IconTwitter />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/prateekjakhar123/"
          aria-label=""
          target="_blank"
          rel="noreferrer"
        >
          <IconLinkedin />
        </a>
      </li>
      {/* ))} */}
    </StyledSocialList>
  );
};

const StyledSocialList = styled.ul`
  position: fixed;
  bottom: 0;
  left: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 100px;
    margin: 0 auto;
    background-color: white;
  }
  li {
    &:last-of-type {
      margin-bottom: 20px;
    }
    a {
      padding: 10px;
      &:hover,
      &:focus {
        transform: translateY(-3px);
      }
      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

export default Social;
