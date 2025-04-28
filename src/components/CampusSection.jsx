import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { MapPin, Phone, Mail } from "lucide-react";
import campus1 from "../assets/campus1.png";
import campus2 from "../assets/campus2.png";
import campus3 from "../assets/campus3.png";

const campusLocations = [
  {
    id: 1,
    name: "Main Campus",
    image: campus1,
    address: "123 Education Street, Phnom Penh",
    phone: "+855 23 456 789",
    email: "samnang200319@gamil.com",
  },
  {
    id: 2,
    name: "Primary Campus",
    image: campus2,
    address: "456 Learning Road, Phnom Penh",
    phone: "+855 23 987 654",
    email: "pengsamnang0@gamil.com",
  },
  {
    id: 3,
    name: "Secondary Campus",
    image: campus3,
    address: "789 Academic Avenue, Phnom Penh",
    phone: "+855 23 123 456",
    email: "qwer200319@gamil.com",
  },
];

const CampusSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(document.querySelector(".campus-section"));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="campus-section py-14  bg-gray-50 flex justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="inline-block mx-auto text-3xl md:text-4xl font-bold text-yellow-500 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-school-info">
            Our Campus
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 ">
          {campusLocations.map((campus, index) => (
            <div
              key={campus.id}
              className={cn(
                "campus-card rounded-xl overflow-hidden shadow-lg transition-all duration-700 bg-white hover:",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden ">
                <img
                  src={campus.image}
                  alt={campus.name}
                  className="w-110 h-80 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-red-800 flex justify-center">
                  {campus.name}
                </h3>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <MapPin
                      size={18}
                      className="text-school-primary mt-1 mr-2 flex-shrink-0"
                    />
                    <p className="text-gray-600">{campus.address}</p>
                  </div>
                  <div className="flex items-start">
                    <Phone
                      size={18}
                      className="text-school-primary mt-1 mr-2 flex-shrink-0"
                    />
                    <p className="text-gray-600">{campus.phone}</p>
                  </div>
                  <div className="flex items-start">
                    <Mail size={18} className="mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-600 ">{campus.email}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusSection;
