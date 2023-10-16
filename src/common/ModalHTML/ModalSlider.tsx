import { Modal } from "antd";
import React, { useState, useEffect, useRef } from "react";
// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ModalSlider.css";

export interface ModalHTMLProps {
  modalHeading?: string | JSX.Element;
  open: boolean;
  onCancel: () => void;
  className1?: string;
  classNameWidth?: string;
  children: React.ReactNode[];
}

const ModalSlider: React.FC<ModalHTMLProps> = (props) => {
  const [sliderVisible, setSliderVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    if (props.children.length > 5 && !sliderVisible) {
      setSliderVisible(true);
    }
  }, [props.children, sliderVisible]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    beforeChange: (current: number, next: number) => {
      setCurrentSlide(next);
    },
  };

  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const shouldRenderPrevButton = sliderVisible && currentSlide > 0;
  const shouldRenderNextButton =
    sliderVisible && currentSlide < props.children.length - 5;

  return (
    <Modal
      className={`${props.classNameWidth} PCM_modal`}
      title={props.modalHeading}
      visible={props.open}
      onCancel={props.onCancel}
    >
      <div className="modal_inner_wrapper">
        {sliderVisible ? (
          <Slider {...settings} ref={sliderRef}>
            {props.children.map((child, index) => (
              <div
                className={`steps_container ${props.className1}`}
                key={index}
              >
                <div>{child}</div>
              </div>
            ))}
          </Slider>
        ) : (
          props.children.map((child, index) => (
            <div className={`steps_container ${props.className1}`} key={index}>
              <div>{child}</div>
            </div>
          ))
        )}
      </div>
      {sliderVisible && (
        <div className="btn_wrapper">
          {shouldRenderPrevButton ? (
            <div className="prev_btn" onClick={handlePrevSlide}>
              <img
                src="/assets/prevArrow.svg"
                alt="prevArrow"
                style={{ paddingRight: "8px" }}
              />
              Previous
            </div>
          ) : (
            <div className="prev_btn"></div>
          )}
          {shouldRenderNextButton ? (
            <div className="next_btn" onClick={handleNextSlide}>
              Next
              <img
                src="/assets/nextArrow.svg"
                alt="nextArrow"
                style={{ paddingLeft: "8px" }}
              />
            </div>
          ) : (
            <div className="next_btn"></div>
          )}
        </div>
      )}
    </Modal>
  );
};

export default ModalSlider;
