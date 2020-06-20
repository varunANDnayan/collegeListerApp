import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import React from "react";

function CarouselView() {
  let imgStyle = { height: "100%" };
  return (
    <div>
      <div className="">
        <div>
          <Carousel
            infiniteLoop
            autoPlay
            showThumbs={false}
            interval={25000}
            showStatus={false}
          >
            <div style={imgStyle}>
              <img
                style={imgStyle}
                src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/05/07/679542-wilson-college.jpg"
                alt="Top colleges in Mumbai"
              />
            </div>
            <div style={imgStyle}>
              <img
                style={imgStyle}
                src="https://img.collegepravesh.com/2017/05/SPCE-Mumbai.jpg"
                alt=""
              />
            </div>
            <div style={imgStyle}>
              <img
                style={imgStyle}
                src="https://images.jdmagicbox.com/comp/mumbai/90/022p33090/catalogue/elphinstone-college-of-arts-science-and-commerce-fort-mumbai-colleges-358ee.jpg"
                alt=""
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default CarouselView;
