import React from "react";
import img from "../img/work-01.jpg"

const porfolio = () => {
  return (
    <div className="bg-[#fff] pl-[15px] pr-[15px] pt-[30px] pb-[30px]">
      <div className="section-title">
        <span></span>
        <h2>Portfolio</h2>
      </div>
      <ul className="list flex list-none mt-[30px] mb-[30px]">
        <li>All</li>
        <li>Web Design</li>
        <li>Motion Graphic</li>
        <li>Illustration</li>
        <li>Photography</li>
      </ul>
      <div className="listItem">
        <div className="flex justify-between mb-[40px] cursor-pointer">
          <div className="webDesign">
            <div className="iconHover">
              <i className="fa fa-clone"></i>
            </div>
            <img src= { img } alt= { img }/>
            <div className="infoItem">
              <span>Babel Admin</span>
              <p>An admin template design</p>
            </div>
          </div>
          <div className="motion">
            <div className="iconHover">
              <i className="fa fa-clone"></i>
            </div>
            <img src= { img } alt= { img } />
            <div className="infoItem">
              <span>Babel Admin</span>
              <p>An admin template design</p>
            </div>
          </div>
          <div className="photography">
            <div className="iconHover">
              <i className="fa fa-clone"></i>
            </div>
            <img src= { img } alt= { img } />
            <div className="infoItem">
              <span>Babel Admin</span>
              <p>An admin template design</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-[40px] cursor-pointer">
          <div className="webDesign">
            <div className="iconHover">
              <i className="fa fa-clone"></i>
            </div>
            <img src= { img } alt= { img } />
            <div className="infoItem">
              <span>Babel Admin</span>
              <p>An admin template design</p>
            </div>
          </div>
          <div className="motion">
            <div className="iconHover">
              <i className="fa fa-clone"></i>
            </div>
            <img src= { img } alt= { img } />
            <div className="infoItem">
              <span>Babel Admin</span>
              <p>An admin template design</p>
            </div>
          </div>
          <div className="photography">
            <div className="iconHover">
              <i className="fa fa-clone"></i>
            </div>
            <img src= { img } alt= { img } />
            <div className="infoItem">
              <span>Babel Admin</span>
              <p>An admin template design</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-[40px] cursor-pointer">
          <div className="webDesign">
            <div className="iconHover">
              <i className="fa fa-clone"></i>
            </div>
            <img src= { img } alt= { img } />
            <div className="infoItem">
              <span>Babel Admin</span>
              <p>An admin template design</p>
            </div>
          </div>
          <div className="motion">
            <div className="iconHover">
              <i className="fa fa-clone"></i>
            </div>
            <img src= { img } alt= { img } />
            <div className="infoItem">
              <span>Babel Admin</span>
              <p>An admin template design</p>
            </div>
          </div>
          <div className="photography">
            <div className="iconHover">
              <i className="fa fa-clone"></i>
            </div>
            <img src= { img } alt= { img } />
            <div className="infoItem">
              <span>Babel Admin</span>
              <p>An admin template design</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-[40px] cursor-pointer">
          <div className="webDesign">
            <div className="iconHover">
              <i className="fa fa-clone"></i>
            </div>
            <img src= { img } alt= { img } />
            <div className="infoItem">
              <span>Babel Admin</span>
              <p>An admin template design</p>
            </div>
          </div>
          <div className="motion">
            <div className="iconHover">
              <i className="fa fa-clone"></i>
            </div>
            <img src= { img } alt= { img } />
            <div className="infoItem">
              <span>Babel Admin</span>
              <p>An admin template design</p>
            </div>
          </div>
          <div className="photography">
            <div className="iconHover">
              <i className="fa fa-clone"></i>
            </div>
            <img src= { img } alt= { img } />
            <div className="infoItem">
              <span>Babel Admin</span>
              <p>An admin template design</p>
            </div>
          </div>
        </div>
        <div className="loadMore">
          <a href="#">Load More</a>
        </div>
      </div>
    </div>
  );
};

export default porfolio;
