import React from "react";
import img1 from "../img/blog-6.jpg"
import img2 from "../img/blog-2.jpg"
import img3 from "../img/blog-3.jpg"

const blog = () => {
  return (
      <div className="bg-[#fff] pl-[15px] pr-[15px] pt-[30px] pb-[30px]">
        <div className="section-title">
          <span></span>
          <h2>Blog Posts</h2>
        </div>
        <div className="flex justify-between mt-[20px]">
          <div className="column">
            <div className="blog">
              <img src= { img1 } alt= { img1 } />
              <div className="blogDes">
                <span className="category">General</span>
                <h2>See my current workspace</h2>
                <p>
                  The first thing to remember about success is that it is a
                  process.
                </p>
                <span className="date">8 Nov 17</span>
              </div>
            </div>
            <div className="blog">
              <img src= { img1 } alt= { img1 } />
              <div className="blogDes">
                <span className="category">General</span>
                <h2>See my current workspace</h2>
                <p>
                  The first thing to remember about success is that it is a
                  process.
                </p>
                <span className="date">8 Nov 17</span>
              </div>
            </div>
            <div className="blog">
              <img src= { img1 } alt= { img1 } />
              <div className="blogDes">
                <span className="category">General</span>
                <h2>See my current workspace</h2>
                <p>
                  The first thing to remember about success is that it is a
                  process.
                </p>
                <span className="date">8 Nov 17</span>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="blog">
              <img src= { img2 } alt= { img2 } />
              <div className="blogDes">
                <span className="category">Web Design</span>
                <h2>How to become a web designer?</h2>
                <p>
                  He must have tried it a hundred times, shut his eyes so that
                  he wouldn't have to look at the floundering.
                </p>
                <span className="date">27 Nov 17</span>
              </div>
            </div>
            <div className="blog">
              <img src= { img2 } alt= { img2 } />
              <div className="blogDes">
                <span className="category">Web Design</span>
                <h2>How to become a web designer?</h2>
                <p>
                  He must have tried it a hundred times, shut his eyes so that
                  he wouldn't have to look at the floundering.
                </p>
                <span className="date">27 Nov 17</span>
              </div>
            </div>
            <div className="blog">
              <img src= { img2 } alt= { img2 } />
              <div className="blogDes">
                <span className="category">Web Design</span>
                <h2>How to become a web designer?</h2>
                <p>
                  He must have tried it a hundred times, shut his eyes so that
                  he wouldn't have to look at the floundering.
                </p>
                <span className="date">27 Nov 17</span>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="blog">
              <img src= { img3 } alt= { img3 } />
              <div className="blogDes">
                <span className="category">User Interface</span>
                <h2>Why is it better to work nights?</h2>
                <p>
                  Legs, and only stopped when he began to feel a mild, dull pain
                  there that he had never felt.
                </p>
                <span className="date">8 Nov 17</span>
              </div>
            </div>
            <div className="blog">
              <img src= { img3 } alt= { img3 } />
              <div className="blogDes">
                <span className="category">User Interface</span>
                <h2>Why is it better to work nights?</h2>
                <p>
                  Legs, and only stopped when he began to feel a mild, dull pain
                  there that he had never felt.
                </p>
                <span className="date">8 Nov 17</span>
              </div>
            </div>
            <div className="blog">
              <img src= { img3 } alt= { img3 } />
              <div className="blogDes">
                <span className="category">User Interface</span>
                <h2>Why is it better to work nights?</h2>
                <p>
                  Legs, and only stopped when he began to feel a mild, dull pain
                  there that he had never felt.
                </p>
                <span className="date">8 Nov 17</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default blog;
