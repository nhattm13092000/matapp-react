import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const header = () => {
  return (
    <div className="flex lg:h-[50px] w-[100%] h-[70px] justify-between bg-[#fff] shadow-[0_2px_92px_0_rgba(0,0,0,0.07)]">
      <div className="flex">
        <Link to="/" className="home bg-[#ffc500] text-[14px] leading-[77px] mr-[10px] h-[70px] lg:h-[auto] lg:flex lg:items-center" id="tabHome">
          <i className="fa-solid fa-house-chimney"></i>
        </Link>
        <ul className="link lg:hidden flex items-center">
          <li className="tab list-none" id="tabResume">
            <Link to="/resume">RESUME</Link>
          </li>
          <li className="tab" id="tabPortfolio">
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>
          <li className="tab" id="tabBlog">
            <Link to="/blog">BLOG</Link>
          </li>
          <li className="tab" id="tabContact">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <div className="linkPersonal flex items-center text-[12px]">
          <a href="">
            <i className="fa-brands fa-facebook-f"></i>
          </a>

          <a href="">
            <i className="fa-brands fa-twitter"></i>
          </a>

          <a href="">
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a href="">
            <i className="fa-brands fa-dribbble"></i>
          </a>
        </div>
        <div className="flex lg:hidden items-center rounded-[20px] ml-[5px] mr-[18px]">
          <a href="" className="send w-[116px] cursor-pointer border-0 rounded-[50px] bg-[#ffc500] text-[14px] font-medium leading-[35px] no-underline text-[#000]">
            Hire Me <i className="fa-solid fa-paper-plane"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

const CustomLink = ({ to, children, ...props}) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path: resolvedPath.pathname, end: true});

  return(
    <li className= {isActive ? "active" : ""}>
      <Link to = {to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default header;
