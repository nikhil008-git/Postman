import React from "react";
import Navbar from "./Navbar";
import man from "../assets/man.jpg";

const MeetOurTeam = () => {
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
    { image: man, name: "GOMEZ", role: "Developer", company: "TU" },
  ];

  const firstTwo = speakers.slice(0, 2);
  const remainingSpeakers = speakers.slice(2);

  return (
      <div className="relative w-screen min-h-screen bg-gray-950 overflow-hidden">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ccc_1px,transparent_1px),linear-gradient(to_bottom,#ccc_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 mask-fade"
          aria-hidden="true"
        ></div>

        <Navbar />

        <div className="relative z-10 max-w-6xl mx-auto my-20">
          <h2 className="text-4xl text-white font-bold text-center mb-12 uppercase border-b-2 border-black pb-4">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {firstTwo.map((speaker, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-950 to-gray-600 p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-center space-y-4">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-md"
                  />
                  <h3 className="text-2xl text-white font-bold uppercase">
                    {speaker.name}
                  </h3>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-300">
                      {speaker.role}
                    </p>
                    <p className="text-xs uppercase tracking-wide text-gray-400">
                      {speaker.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {remainingSpeakers.map((speaker, index) => (
              <div
                key={index + firstTwo.length}
                className="bg-gradient-to-br from-gray-950 to-gray-600 p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-center space-y-4">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-md"
                  />
                  <h3 className="text-2xl text-white font-bold uppercase">
                    {speaker.name}
                  </h3>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-300">
                      {speaker.role}
                    </p>
                    <p className="text-xs uppercase tracking-wide text-gray-400">
                      {speaker.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default MeetOurTeam;
