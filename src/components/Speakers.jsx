import React from "react";
import Navbar from "./Navbar";
import man from "../assets/man.jpg";

const Speakers = () => {
  const speakers = [
    {
      image: man,
      name: "MATED",
      role: "Backend Developer",
      company: "softserve",
    },
    {
      image: man,
      name: "WALTER",
      role: "Security Consultant",
      company: "TU",
    },
    {
      image: man,
      name: "JUAN DAVID",
      role: "Backend Developer",
      company: "softserve",
    },
    { image: man, name: "GREGOBY", role: "Developer", company: "TU" },
    {
      image: man,
      name: "SANTACRUZ",
      role: "Developer",
      company: "softserve",
    },
    { image: man, name: "GOMEZ", role: "Developer", company: "TU" },
    {
      image: man,
      name: "JOSE",
      role: "Frontend Developer",
      company: "Deinbar",
    },
    {
      image: man,
      name: "JOSE",
      role: "Frontend Developer",
      company: "Deinbar",
    },
    {
      image: man,
      name: "JOSE",
      role: "Frontend Developer",
      company: "Deinbar",
    },
    {
      image: man,
      name: "SAMCLEMENTE",
      role: "Frontend Developer",
      company: "Deinbar",
    },
    {
      image: man,
      name: "SAMCLEMENTE",
      role: "Frontend Developer",
      company: "Deinbar",
    },
    {
      image: man,
      name: "SAMCLEMENTE",
      role: "Frontend Developer",
      company: "Deinbar",
    },
  ];

  return (
    <section className=" w-screen bg-white py-12 px-4 md:px-8">
      <div className="relative min-h-screen bg-white overflow-hidden">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ccc_1px,transparent_1px),linear-gradient(to_bottom,#ccc_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 mask-fade"
          aria-hidden="true"
        ></div>
        
        <Navbar />
        
        <div className="relative z-10 max-w-6xl mx-auto my-20">
          <h2 className="text-4xl text-black font-bold text-center mb-12 uppercase border-b-2 border-black pb-4">
            Speakers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-center space-y-4">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-md"
                  />
                  <h3 className="text-2xl text-black font-bold uppercase">
                    {speaker.name}
                  </h3>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-600">
                      {speaker.role}
                    </p>
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      {speaker.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Speakers;
