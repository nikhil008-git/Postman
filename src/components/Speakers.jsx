import React from "react";
import GridBackground from "./GridBackground";
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
      <div className="relative min-h-screen overflow-hidden">
        {/* <GridBackground /> */}
        <div className="relative z-10 max-w-6xl mx-auto my-5">
          <h2 className="text-4xl text-black font-bold text-center mb-12 uppercase border-b-2 border-black pb-4">
            Speakers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center">
            {speakers.map((speaker, index) => (
              <div key={index} className="bg-white w-70 p-6 rounded-lg">
                <div className="text-center space-y-4">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-35 h-35 rounded-full mx-auto object-cover border-2 border-dashed p-2 border-black"
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
