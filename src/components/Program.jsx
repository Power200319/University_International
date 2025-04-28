import React, { useState } from 'react';
import logo from "../assets/logosc.png";

const tabsData = [
  { id: "kindergarten", label: "Kindergarten", content: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam assumenda expedita, veritatis doloribus consequatur ea, voluptates deleniti alias tempora repellat impedit a, maxime quos dicta quam quaerat eum velit quibusdam consectetur error eligendi unde voluptatibus. Quae, modi labore earum cupiditate sed fuga inventore nisi expedita, illo iste illum eveniet voluptatum porro odit eum, nemo corrupti repellendus accusantium! Dicta earum dolorum expedita aliquam facere, sint sunt. Vel aspernatur mollitia iusto dolorem adipisci itaque, deserunt possimus earum magni, delectus velit ipsam modi accusantium dicta eligendi asperiores similique impedit et animi repudiandae numquam eveniet. Distinctio ipsum laboriosam voluptate, minus magni quaerat, saepe perspiciatis itaque explicabo atque consequatur aut voluptatibus temporibus molestias velit quidem impedit accusantium. Doloribus ex praesentium, sequi et velit fugit doloremque id ad eos eius saepe, perferendis hic repudiandae, rerum voluptatum.</p> },
  { id: "primary", label: "Primary", content: <p>Rorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam assumenda expedita, veritatis doloribus consequatur ea, voluptates deleniti alias tempora repellat impedit a, maxime quos dicta quam quaerat eum velit quibusdam consectetur error eligendi unde voluptatibus. Quae, modi labore earum cupiditate sed fuga inventore nisi expedita, illo iste illum eveniet voluptatum porro odit eum, nemo corrupti repellendus accusantium! Dicta earum dolorum expedita aliquam facere, sint sunt. Vel aspernatur mollitia iusto dolorem adipisci itaque, deserunt possimus earum magni, delectus velit ipsam modi accusantium dicta eligendi asperiores similique impedit et animi repudiandae numquam eveniet. Distinctio ipsum laboriosam voluptate, minus magni quaerat, saepe perspiciatis itaque explicabo atque consequatur aut voluptatibus temporibus molestias velit quidem impedit accusantium. Doloribus ex praesentium, sequi et velit fugit doloremque id ad eos eius saepe, perferendis hic repudiandae, rerum voluptatum.</p> },
  { id: "secondary", label: "Secondary", content: <p>Corem ipsum dolor sit amet consectetur adipisicing elit. Aperiam assumenda expedita, veritatis doloribus consequatur ea, voluptates deleniti alias tempora repellat impedit a, maxime quos dicta quam quaerat eum velit quibusdam consectetur error eligendi unde voluptatibus. Quae, modi labore earum cupiditate sed fuga inventore nisi expedita, illo iste illum eveniet voluptatum porro odit eum, nemo corrupti repellendus accusantium! Dicta earum dolorum expedita aliquam facere, sint sunt. Vel aspernatur mollitia iusto dolorem adipisci itaque, deserunt possimus earum magni, delectus velit ipsam modi accusantium dicta eligendi asperiores similique impedit et animi repudiandae numquam eveniet. Distinctio ipsum laboriosam voluptate, minus magni quaerat, saepe perspiciatis itaque explicabo atque consequatur aut voluptatibus temporibus molestias velit quidem impedit accusantium. Doloribus ex praesentium, sequi et velit fugit doloremque id ad eos eius saepe, perferendis hic repudiandae, rerum voluptatum.</p> },
  { id: "advanced-level", label: "Advanced Level", content: <p>Dorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam assumenda expedita, veritatis doloribus consequatur ea, voluptates deleniti alias tempora repellat impedit a, maxime quos dicta quam quaerat eum velit quibusdam consectetur error eligendi unde voluptatibus. Quae, modi labore earum cupiditate sed fuga inventore nisi expedita, illo iste illum eveniet voluptatum porro odit eum, nemo corrupti repellendus accusantium! Dicta earum dolorum expedita aliquam facere, sint sunt. Vel aspernatur mollitia iusto dolorem adipisci itaque, deserunt possimus earum magni, delectus velit ipsam modi accusantium dicta eligendi asperiores similique impedit et animi repudiandae numquam eveniet. Distinctio ipsum laboriosam voluptate, minus magni quaerat, saepe perspiciatis itaque explicabo atque consequatur aut voluptatibus temporibus molestias velit quidem impedit accusantium. Doloribus ex praesentium, sequi et velit fugit doloremque id ad eos eius saepe, perferendis hic repudiandae, rerum voluptatum.</p> },
];

const Program = ({ tabs = tabsData, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id);

  return (
    <div className="w-full bg-[#e2f1d8] relative overflow-hidden py-8 px-4  md:py-14">
      
      <h2 className="text-center font-bold text-3xl md:text-4xl mb-4 md:mb-6 text-red-700">Our Program</h2>

      <div className="flex justify-center space-x-2 md:space-x-4 overflow-x-auto ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 md:px-6 md:py-2   font-medium text-sm md:text-xl transition  
              ${activeTab === tab.id ? "bg-red-700 text-white" : "bg-transparent text-red-600 hover:bg-red-700 hover:text-white"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto border-4 border-red-700 px-5 md:px-24 py-5 md:py-14  shadow-lg">
        <div className="flex flex-col md:flex-row items-center text-justify">
          <div className="md:w-3/3">
            {tabs.find((tab) => tab.id === activeTab)?.content}
            <button className="mt-4 bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 text-sm md:text-base">
              Learn More
            </button>
          </div>
          <div className="md:w-1/3 hidden lg:flex flex-col items-center mt-4 md:mt-0 md:ml-6">
            <img src={logo} alt="Student Image" className="rounded-full w-24 h-24 md:w-32 md:h-32 border-4 border-red-700" />
            <p className="text-center mt-2 text-gray-700 text-sm md:text-base">Best Choice For Your Lovely Kids</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;