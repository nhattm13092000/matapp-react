import "./App.css";
import Sidebar from "./component/sidebar";
import Header from "./component/header";
import Footer from "./component/footer";
import Router from "./router";

function App() {
  return (
    <div className="lg:justify-between lg:overflow-x-hidden flex justify-center mt-30 ">
      <div className="profile-des mt-[60px] w-[1170px] lg:flex-col lg:w-[100%]">
        <div className="row">
          <div className="lg:w-[100%] left-content w-[25%] pl-[15px] pr-[15px] float-left">
            <Sidebar />
          </div>
          <div className="lg:w-[100%] lg:mt-[20px] right-content w-[75%] pl-[15px] pr-[15px] float-right">
            <Header />
            <div className="mt-[35px] shadow-[0_2px_92px_0_rgba(0,0,0,0.07)]">
              <div className="p-[15px] bg-[#fff] shadow-[0_2px_92px_0_rgba(0,0,0,0.07)] rounded-[6px]">
                <Router></Router>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
