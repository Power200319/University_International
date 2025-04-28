import React from "react";
import p1 from "../assets/personal1.jpg"
import p2 from "../assets/personal2.jpg"


const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Catherine Anderson",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptates obcaecati ducimus doloremque nobis aperiam provident ullam, labore voluptatibus laudantium molestias ipsam accusantium, iure alias quo impedit perferendis error culpa.",
      image:
        p2,
    },
    {
      id: 2,
      name: "Michael Richardson",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptates obcaecati ducimus doloremque nobis aperiam provident ullam, labore voluptatibus laudantium molestias ipsam accusantium, iure alias quo impedit perferendis error culpa.",
      image:
        p1,
    },
    {
      id: 3,
      name: "Elizabeth Chen",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptates obcaecati ducimus doloremque nobis aperiam provident ullam, labore voluptatibus laudantium molestias ipsam accusantium, iure alias quo impedit perferendis error culpa.",
      image:
        p2,
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="md:text-4xl text-3xl font-bold text-yellow-500">
            Parent Testimonials
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 gap-x-10 mt-30">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative text-center transform transition duration-300 hover:scale-90 hover:shadow-2xl"
            >
              {/* Profile Image */}
              <div className="absolute -top-13 left-1/2 transform -translate-x-1/2 w-25 h-25 rounded-full overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Testimonial Card */}
              <div className="bg-white shadow-[7px_8px_1px_1px_rgba(230,166,28,1)] rounded-lg  p-6 pt-18 transition duration-300 hover:border-orange-600">
                <p className="text-justify text-sm sm:text-base text-gray-700 leading-relaxed">
                  {testimonial.content}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {testimonial.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
