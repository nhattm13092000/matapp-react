import React from "react";
import img1 from "../img/client-01.jpg"
import img2 from "../img/client-02.jpg"
import img3 from "../img/client-03.jpg"
import img4 from "../img/client-04.jpg"
import img5 from "../img/testimonial-2.jpg"

const resume = () => {
  return (
    <div className="bg-[#fff] lg:w-[100%]">
      <div className="row">
        <div className="p-[30px]">
          <div className="section-title">
            <span></span>
            <h2>Resume</h2>
          </div>
          <div className="flex justify-between pl-[15px] pr-[15px] lg:flex-col">
            <div className="w-[45%] mt-[30px] lg:w-[100%]">
              <ul className="timeline ml-[10px]">
                <li>
                  <i className="fa-solid fa-suitcase"></i>
                  <h2>Working History</h2>
                </li>
                <li>
                  <h3 className="text-[16px] leading-[6px] font-medium">Art Director - Facebook Inc</h3>
                  <span className="text-[12px] pt-[9px] pb-[9px]">2010-Present</span>
                  <p className="text-[13px] text-[#989898] font-normal leading-[18px]">
                    Expenses as material breeding insisted building to in.
                    Continual so distrusts pronounce by unwilling listening.
                    Thing do taste on we manor.
                  </p>
                </li>
                <li>
                  <h3 className="text-[16px] leading-[6px] font-medium">Art Director - Facebook Inc</h3>
                  <span className="text-[12px] pt-[9px] pb-[9px]">2010-Present</span>
                  <p className="text-[13px] text-[#989898] font-normal leading-[18px]">
                    Expenses as material breeding insisted building to in.
                    Continual so distrusts pronounce by unwilling listening.
                    Thing do taste on we manor.
                  </p>
                </li>
                <li>
                  <h3 className="text-[16px] leading-[6px] font-medium">Art Director - Facebook Inc</h3>
                  <span className="text-[12px] pt-[9px] pb-[9px]">2010-Present</span>
                  <p className="text-[13px] text-[#989898] font-normal leading-[18px]">
                    Expenses as material breeding insisted building to in.
                    Continual so distrusts pronounce by unwilling listening.
                    Thing do taste on we manor.
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-[45%] mt-[30px] lg:w-[100%]">
              <ul className="timeline">
                <li>
                  <i className="fa-solid fa-graduation-cap"></i>
                  <h2>Education History</h2>
                </li>
                <li>
                  <h3 className="text-[16px] leading-[6px] font-medium">Art Director - Facebook Inc</h3>
                  <span className="text-[12px] pt-[9px] pb-[9px]">2010-Present</span>
                  <p className="text-[13px] text-[#989898] font-normal leading-[18px]">
                    Expenses as material breeding insisted building to in.
                    Continual so distrusts pronounce by unwilling listening.
                    Thing do taste on we manor.
                  </p>
                </li>
                <li>
                  <h3 className="text-[16px] leading-[6px] font-medium">Art Director - Facebook Inc</h3>
                  <span className="text-[12px] pt-[9px] pb-[9px]">2010-Present</span>
                  <p className="text-[13px] text-[#989898] font-normal leading-[18px]">
                    Expenses as material breeding insisted building to in.
                    Continual so distrusts pronounce by unwilling listening.
                    Thing do taste on we manor.
                  </p>
                </li>
                <li>
                  <h3 className="text-[16px] leading-[6px] font-medium">Art Director - Facebook Inc</h3>
                  <span className="text-[12px] pt-[9px] pb-[9px]">2010-Present</span>
                  <p className="text-[13px] text-[#989898] font-normal leading-[18px]"> 
                    Expenses as material breeding insisted building to in.
                    Continual so distrusts pronounce by unwilling listening.
                    Thing do taste on we manor.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="p-[40px] bg-[#fafafa]">
          <div className="section-title">
            <span></span>
            <h2>Clients</h2>
          </div>
          <div className="flex justify-between lg:flex-col">
            <div className="w-[22%] shadow-[0_2px_92px_0_rgba(0,0,0,0.07)] bg-[#fff] mt-[20px] rounded-[8px] p-[26px] lg:w-[100%]">
              <img className="w-[100%] rounded-[8px]" src= { img1 } alt= { img1 } />
            </div>
            <div className="w-[22%] shadow-[0_2px_92px_0_rgba(0,0,0,0.07)] bg-[#fff] mt-[20px] rounded-[8px] p-[26px] lg:w-[100%]">
              <img className="w-[100%] rounded-[8px]" src= { img2 } alt= { img2 } />
            </div>
            <div className="w-[22%] shadow-[0_2px_92px_0_rgba(0,0,0,0.07)] bg-[#fff] mt-[20px] rounded-[8px] p-[26px] lg:w-[100%]">
              <img className="w-[100%] rounded-[8px]" src= { img3 } alt= { img3 } />
            </div>
            <div className="w-[22%] shadow-[0_2px_92px_0_rgba(0,0,0,0.07)] bg-[#fff] mt-[20px] rounded-[8px] p-[26px] lg:w-[100%]">
              <img className="w-[100%] rounded-[8px]" src= { img4 } alt= { img4 } />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="p-[40px]">
          <div className="section-title">
            <span></span>
            <h2>Testimonials</h2>
          </div>
          <div className="flex justify-between mt-[20px]">
            <div className="w-[30%] rounded-[8px] shadow-[0_2px_92px_0_rgba(0,0,0,0.07)] p-[20px]">
              <div className="testInfo">
                <img src= { img5 } alt= { img5 } />
                <div className="testDes">
                  <h4 className="nameTest">April M.Griffin</h4>
                  <p className="positionTest">Founder</p>
                </div>
              </div>
              <div className="testQuote">
                <p>
                  Our logo and business card design look great. Thanks Henry
                </p>
              </div>
            </div>
            <div className="w-[30%] rounded-[8px] shadow-[0_2px_92px_0_rgba(0,0,0,0.07)] p-[20px]">
              <div className="testInfo">
                <img src= { img5 } alt= { img5 } />
                <div className="testDes">
                  <h4 className="nameTest">April M.Griffin</h4>
                  <p className="positionTest">Founder</p>
                </div>
              </div>
              <div className="testQuote">
                <p>
                  Our logo and business card design look great. Thanks Henry
                </p>
              </div>
            </div>
            <div className="w-[30%] rounded-[8px] shadow-[0_2px_92px_0_rgba(0,0,0,0.07)] p-[20px]">
              <div className="testInfo">
                <img src= { img5 } alt= { img5 } />
                <div className="testDes">
                  <h4 className="nameTest">April M.Griffin</h4>
                  <p className="positionTest">Founder</p>
                </div>
              </div>
              <div className="testQuote">
                <p>
                  Our logo and business card design look great. Thanks Henry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
