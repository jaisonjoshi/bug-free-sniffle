
import React from "react";
import useFetch from "../../../hooks/useFetch";

const DestCard = () => {
  const { data, loading, error } = useFetch(
    "/packages?rating=3&rating=4&rating=5&limit=6"
  );

  return (
    <>
        {loading ? (
          "Loading"
        ) : (
          <>
            {data.map((item) => (
            <div className="overflow-hidden rounded-md shadow-gray-200 shadow-lg w-full relative">
              <div className="" key={item._id}>
                <img
                  className="h-60 sm:h-72 object-cover w-full"
                  src={require('../../Assets/Rectangle 43.png')}
                  alt=""
                />
                <div className="p-5">

                <h3 className="text-lg font-bold">
                  {item.title}({item.location})
                </h3>
                <p className="text-sm text-justify">{item.description}</p>
                </div>
                <p className="bg-whiteglow rounded-xl font-semibold absolute top-0 m-3 p-2">
                  From ₹ {item.cheapestPrice}{" "}
                </p>
              </div>
              </div>
            ))}
          </>
        )}
    </>
  );
};



export default DestCard;