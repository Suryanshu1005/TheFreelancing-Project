import Image from "next/image";
import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousal = () => {
  return (
    <Carousel
      autoPlay={true}
      renderIndicator={() => false}
      showArrows={false}
      infiniteLoop
      showThumbs={false}
    >
      <div>
        <Image
          src="https://img.freepik.com/free-vector/boss-man-concept-illustration_114360-16127.jpg?w=826&t=st=1709827333~exp=1709827933~hmac=4f5b008c91a05ac27942ae642bfbdcd04b8c93ff6c98ad855bcd5370fe7be935"
          alt="carousal-image-1"
          width={1000}
          height={1200}
        />
      </div>
      <div>
        <Image
          src="https://img.freepik.com/free-vector/recruitment-concept-illustration_114360-24595.jpg?t=st=1709827371~exp=1709830971~hmac=17f22658a9c8eb639b9bb7642f6b5378d6d3c07df31fcb1e11f7e90a360ef1d2&w=826"
          alt="carousal-image-2"
          width={1000}
          height={1200}
        />
      </div>
      <div>
        <Image
          src="https://img.freepik.com/free-vector/strategic-consulting-concept-illustration_114360-8994.jpg?t=st=1709827400~exp=1709831000~hmac=7db5f0425c22339fe1cdffcedc1e490d11c31f63bfbdd011fa4d26938473bb1e&w=826"
          alt="carousal-image-3"
          width={1000}
          height={1200}
        />
      </div>
    </Carousel>
  );
};

export default Carousal;
