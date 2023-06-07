import React from "react";

const footer = () => {
  return (
    <div className="flex justify-between leading-[72px] rounded-[8px] bg-[#1e1e1e] pl-[15px] pr-[15px] mt-[30px] mb-[30px] min-h-[70px] lg:justify-center lg:items-center">
      <div className="text-[15px] text-[#fff] lg:hidden">Henry Rooney.</div>
      <div className="text-[#9c9c9c] text-[12px]">
        © 2017 All rights reserved. Designed by
        <a className="text-[#fff] no-underline ml-[2px]" href="https://themeforest.net/user/tavonline">tavonline</a>
      </div>
    </div>
  );
};

export default footer;
