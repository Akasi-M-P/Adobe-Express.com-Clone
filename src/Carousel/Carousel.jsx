import {IoIosCheckmarkCircle} from "react-icons/io"


const Carousel = () => {
  return (
    <div className="carousel-container">
      <video
        src="/src/Video/adobe-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="carousel-background"
      ></video>
      <div class="container text-center hero">
        <div class="row">
          <div class="col-sm-12 col-md-6 " id="carousel-1">
            <span className="carousel-head">
              <h1>
                Make a free project with <br /> Adobe Express.
              </h1>
            </span>
            <span className="carousel-p">
              <h6>
                Our free plan includes thousands of unique templates, design
                assets, <br /> Adobe Stock royalty-free photos, and more.
                Available on web and mobile.
              </h6>
            </span>
            <div class="below">
              <button className="btn">Get Adobe Express Free</button>
              <div class="animation">
                <p>
                  <IoIosCheckmarkCircle className="icon" />
                  Free use forever &ensp;{" "}
                  <IoIosCheckmarkCircle className="icon" />
                  No credit card required
                </p>
              </div>
            </div>

            <div class="col-sm-12 col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
