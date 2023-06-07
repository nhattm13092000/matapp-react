import React from "react";
import img from "../img/profile.jpg";

const sidebar = () => {
  return (
    <div className="bg-[#fff] shadow-[0_2px_92px_0_rgba(0,0,0,0.07)] rounded-md">
      <div className="profile">
        <div className="p-[20px] leading-[18px]">
          <span className="uppercase text-[17px] font-bold">HENRY ROONEY</span>
          <br />
          <span className="text-[13px] text-[#777777]">Creative Designer</span>
        </div>
        <figure className="profile-img">
          <img src={img} alt={img} className="w-[100%] mt-[-18px] cl" />
        </figure>
        <ul className="profile-information lg:table lg:ml-[auto] lg:mr-[auto] lg:mb-[30px] mt-[8px] mb-[8px] ml-[35px] list-none">
          <li></li>
          <li>
            <p>
              <span>Name: </span>
              Chris Johnson
            </p>
          </li>
          <li>
            <p>
              <span>Birthday: </span>
              06 December 1987
            </p>
          </li>
          <li>
            <p>
              <span>Job: </span>
              Freelancer
            </p>
          </li>
          <li>
            <p>
              <span>Email: </span>
              henry@domain.com
            </p>
          </li>
          <li>
            <p>
              <span>Skype: </span>
              henryrooney85
            </p>
          </li>
        </ul>
        <div className="button-download text-center pl-[15px] pr-[15px]">
          <button className="bg-[#ffc500] text-[#000] text-[14px] font-medium border-0 rounded-[50px] cursor-pointer leading-[35px]" id="downloadCV">
            Download Cv <i className="fa fa-download" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
