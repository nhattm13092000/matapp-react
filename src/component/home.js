import React from "react";

const home = () => {
  return (
    <div>
      <div className="row">
        <div className="about-me bg-[#fff]">
          <div className="section-title">
            <span></span>
            <h2>About Me</h2>
          </div>
          <p className="text-[13px] mt-[30px] text-[#4c4c4c] leading-[24px]">
            Started earnest brother believe an exposed so. Me he believing
            daughters if forfeited at furniture. Age again and stuff downs
            spoke. Late hour new nay able fat each sell. Nor themselves age
            introduced frequently use unsatiable devonshire get. They why quit
            gay cold rose deal park. One same they four did ask busy. Reserved
            opinions fat him nay position. Breakfast as zealously incommode do
            agreeable furniture. One too nay led fanny allow plate. <br />
            <br />
            Quick six blind smart out burst. Perfectly on furniture dejection
            determine my depending an to. Add short water court fat. Her
            bachelor honoured perceive securing but desirous ham required.
            Questions deficient acuteness to engrossed as. Entirely led ten
            humoured greatest and yourself. Besides ye country on observe. She
            continue appetite endeavor she judgment interest the met. For she
            surrounded motionless fat resolution may.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="myServices">
          <div className="section-title mb-[45px]">
            <span></span>
            <h2>My Services</h2>
          </div>
          <div className="flex justify-between lg:flex-col">
            <div className="service lg:mt-[12px] lg:mb-[12px] lg:w-[100%]">
              <div className="icon">
                <i className="flaticon-html"></i>
              </div>
              <span className="text-[14px] text-[#333333] font-medium leading-[40px]">Web Development</span>
              <p className="text-[12px] text-[#989898] leading-[18px]">
                I have been working on web design for 10 years.
              </p>
            </div>
            <div className="service lg:mt-[12px] lg:mb-[12px] lg:w-[100%]">
              <div className="icon">
                <i className="flaticon-attach"></i>
              </div>
              <span className="text-[14px] text-[#333333] font-medium leading-[40px]">Branding Identity</span>
              <p className="text-[12px] text-[#989898] leading-[18px]">
                We will make you a brand that is catchy and leaves a trace.
              </p>
            </div>
            <div className="service lg:mt-[12px] lg:mb-[12px] lg:w-[100%]">
              <div className="icon">
                <i className="flaticon-vector"></i>
              </div>
              <span className="text-[14px] text-[#333333] font-medium leading-[40px]">Illustrator</span>
              <p className="text-[12px] text-[#989898] leading-[18px]">
                I have been working on illustration design for 6 years.
              </p>
            </div>
            <div className="service lg:mt-[12px] lg:mb-[12px] lg:w-[100%]">
              <div className="icon">
                <i className="flaticon-schedule"></i>
              </div>
              <span className="text-[14px] text-[#333333] font-medium leading-[40px]">Fast Delivery</span>
              <p className="text-[12px] text-[#989898] leading-[18px]">I deliver your business as fast as possible.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="skill flex justify-between lg:flex-col">
          <div className="w-[45%] lg:w-[100%] lg:mb-[20px]">
            <div className="section-title mb-[45px]">
              <span></span>
              <h2>Design Skills</h2>
            </div>
            <div className="mt-[20px] text-[12px]">
              <p>Photoshop</p>
              <div className="w-[100%] bg-[#dfdfdf] rounded-[20px] mb-[10px]">
                <div className="text-right pt-[3px] pb-[3px] text-[#eee] rounded-[50px] photoshop"></div>
              </div>
            </div>
            <div className="mt-[20px] text-[12px]">
              <p>Sketch</p>
              <div className="w-[100%] bg-[#dfdfdf] rounded-[20px] mb-[10px]">
                <div className="text-right pt-[3px] pb-[3px] text-[#eee] rounded-[50px] sketch"></div>
              </div>
            </div>
            <div className="mt-[20px] text-[12px]">
              <p>Adobe Xd</p>
              <div className="w-[100%] bg-[#dfdfdf] rounded-[20px] mb-[10px]">
                <div className="text-right pt-[3px] pb-[3px] text-[#eee] rounded-[50px] adobe"></div>
              </div>
            </div>
          </div>
          <div className="w-[45%] lg:w-[100%] lg:mb-[20px]">
            <div className="section-title mb-[45px]">
              <span></span>
              <h2>Code Skills</h2>
            </div>
            <div className="mt-[20px] text-[12px]">
              <p>Javascript</p>
              <div className="w-[100%] bg-[#dfdfdf] rounded-[20px] mb-[10px]">
                <div className="text-right pt-[3px] pb-[3px] text-[#eee] rounded-[50px] javascript"></div>
              </div>
            </div>
            <div className="mt-[20px] text-[12px]">
              <p>HTML5</p>
              <div className="w-[100%] bg-[#dfdfdf] rounded-[20px] mb-[10px]">
                <div className="text-right pt-[3px] pb-[3px] text-[#eee] rounded-[50px] html"></div>
              </div>
            </div>
            <div className="mt-[20px] text-[12px]">
              <p>CSS3</p>
              <div className="w-[100%] bg-[#dfdfdf] rounded-[20px] mb-[10px]">
                <div className="text-right pt-[3px] pb-[3px] text-[#eee] rounded-[50px] css"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
