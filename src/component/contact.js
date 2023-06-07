import React from "react";

const contact = () => {
  return (
    <div className="bg-[#fff] p-[15px]">
      <div className="flex flex-wrap w-[100%]">
        <div className="w-[50%] pt-[30px] pb-[45px] lg:w-[100%]">
          <div className="section-title mb-[30px]">
            <span></span>
            <h2>Contact Form</h2>
          </div>
          <div className="inputContact">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="E-mail" />
            <textarea className="site-area" placeholder="Message"></textarea>
            <button className="bntSubForm">Submit</button>
          </div>
        </div>
        <div className="w-[45%] ml-[20px] pt-[30px] pb-[45px] lg:w-[100%] lg:ml-[0]">
          <div className="section-title mb-[30px]">
            <span></span>
            <h2>Contact Informations</h2>
          </div>
          <ul className="contactInformation list-none lead-[40px] mt-[20px]">
            <li>
              <span>Address: </span>
              107727 Santa Monica Boulevard Los Angeles
            </li>
            <li>
              <span>Phone:</span>
              +38 012-3456-7890
            </li>
            <li>
              <span>Job: </span>
              Freelancer
            </li>
            <li>
              <span>E-mail: </span>
              chris@domain.com
            </li>
            <li>
              <span>Skype: </span>
              chrisjohnson85
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-dribbble"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="contactMap lg:mt-[60px]">
          <div className="section-title mb-[30px]">
            <span></span>
            <h2>Contact Map</h2>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423284.04409885657!2d-118.74137295555941!3d34.020608469418825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1684897153946!5m2!1sen!2s"
            width="800"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default contact;
