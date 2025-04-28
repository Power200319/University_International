import React from "react";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";

const features = [
  {
    title: "3 CAMPUSES",
    description: "WISC’s recognized as Cambridge",
    image: feature1,
  },
  {
    title: "10 YEARS EXPERIENCE",
    description: "We are the pioneers in teaching",
    image: feature2,
  },
  {
    title: "ALWAYS BE A CHAMPION",
    description:
      "The students always have the chance ",
    image: feature3,
  },
];

const Feature = () => {
  return (
    <section className="py-12 bg-white text-center">
      {/* Title */}
      <div className="flex justify-center">
        <h2 className=" max-w-150  text-2xl md:text-3xl font-semibold text-yellow-500 mb-10">
          We're First and Top Cambridge International Standard Schools In
          Cambodia
        </h2>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-black rounded-xl overflow-hidden shadow-lg"
          >
            {/* Image */}
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-50 object-cover opacity-80"
            />

            {/* Overlay Text */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
              <h3 className="text-lg font-semibold text-yellow-500">
                {feature.title}
              </h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
