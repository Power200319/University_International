import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";
import event4 from "../assets/event4.png";
import event5 from "../assets/event5.png";

const events = [
  { id: 1, image: event1, title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis alias minus", date: "12/12/2025", p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptatibus eius! Nesciunt error corrupti quisquam." },
  { id: 2, image: event2, title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis alias minus", date: "12/12/2025", p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptatibus eius! Nesciunt error corrupti quisquam." },
  { id: 3, image: event3, title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis alias minus", date: "12/12/2025", p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptatibus eius! Nesciunt error corrupti quisquam." },
  { id: 4, image: event4, title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis alias minus", date: "12/12/2025", p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptatibus eius! Nesciunt error corrupti quisquam." },
  { id: 5, image: event5, title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis alias minus", date: "12/12/2025", p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptatibus eius! Nesciunt error corrupti quisquam." },
];

const NewEvent = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth < 768 ? 1 : 3
  );

  useEffect(() => {
    const updateItemsPerPage = () => {
      const newItemsPerPage = window.innerWidth < 768 ? 1 : 3;
      setItemsPerPage(newItemsPerPage);
      setStartIndex(0); // Reset index when layout changes
    };
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const nextItems = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsPerPage >= events.length
        ? 0
        : prevIndex + itemsPerPage > events.length - itemsPerPage
        ? events.length - itemsPerPage
        : prevIndex + itemsPerPage
    );
  };

  const prevItems = () => {
    setStartIndex((prevIndex) =>
      prevIndex - itemsPerPage >= 0
        ? prevIndex - itemsPerPage
        : events.length - itemsPerPage
    );
  };

  return (
    <section className="py-14 bg-white video-gallery-section flex justify-center text-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="inline-block mx-auto text-3xl md:text-4xl font-bold text-yellow-500 relative pb-2">
            News & Featured Events
          </h2>
        </div>
        <div className="flex items-center justify-center gap-4">
         {/* button click left  */}
          <button
            onClick={prevItems}
            className="p-2 text-yellow-400  rounded-full mb-40 "
          >
            <ChevronLeft size={35} className="absolute"/>
            <ChevronLeft size={35} className=" absolute -ml-3 -mt-0" />
          </button>
          {/* list events image  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
            {events.slice(startIndex, startIndex + itemsPerPage).map((event) => (
              <div
                key={event.id}
                className="relative rounded-xl overflow-hidden opacity-100 translate-y-0 transition-all duration-700"
              >
                <div className="video-card group rounded-xl overflow-hidden shadow-lg transition-all duration-700 transform card-hover relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-110 h-50 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-medium text-gray-600 text-justify">
                    {event.title}
                  </h3>
                  <h4 className="text-justify text-gray-400 mt-2">{event.date}</h4>
                  <p className="text-justify text-gray-500 nt-2">{event.p}</p>
                </div>
              </div>
            ))}
          </div>
          {/* button click right  */}
          <button 
            onClick={nextItems}
            className="p-2 text-yellow-400  rounded-full mb-40"
          >
            <ChevronRight size={35} className="absolute -ml-10"/>
            <ChevronRight size={35} className=" absolute -ml-7 -mt-0" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewEvent;
