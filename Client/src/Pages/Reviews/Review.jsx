
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useFetch from "../../hooks/useFetch";

const Reviews = () => {
  const { data, loading, error } = useFetch("/reviews?limit=3");
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
      <div>
        {loading ? (
          "Loading"
        ) : (
          <>
    <Slider {...settings}>
            {data.map((item) => (
              <div className="p-10" key={item._id}>
                <div className="flex justify-center">
                  <div className="w-2/5 h-2/5 rounded-full">
                    <img
                      className="w-full object-cover"
                      src={require("../Assets/avatar.png")}
                      alt="Avatar"
                    />
                  </div>
                </div>
                <p className="text-justify pt-10">{item.desc}</p>
                <div className="pt-5">
                  <span className="font-medium">{item.username}</span>
                  <span> {item.rating}</span>
                </div>
              </div>
            ))}
    </Slider>
          </>
        )}
      </div>
  );
};

//<span> Publisher</span> add with username if req



export default Reviews;