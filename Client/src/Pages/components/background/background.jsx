import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BackgroundImage = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <Slider {...settings}>
            <img src={require('../../Assets/b_img1.jpg')} alt="" className="" />
            <img src={require('../../Assets/b_img1.jpg')} alt="" className="" />
            <img src={require('../../Assets/b_img1.jpg')} alt="" className="" />
            <img src={require('../../Assets/b_img1.jpg')} alt="" className="" />
            <img src={require('../../Assets/b_img1.jpg')} alt="" className="" />
        </Slider>
    );
}
export default BackgroundImage