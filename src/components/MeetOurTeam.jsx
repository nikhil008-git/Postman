import React from "react";
import man from "../assets/man.jpg";
import GridBackground from "./GridBackground";

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
    <div className="relative w-screen min-h-screen bg-white overflow-hidden">
      <GridBackground />
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto my-20 flex flex-col items-center justify-center">
        <h2 className="text-4xl text-black font-bold text-center mb-12 uppercase border-b-2 border-black pb-4">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8 justify-items-center">
          {firstTwo.map((speaker, index) => (
            <div
              key={index}
              className="bg-white w-60 p-6 rounded-lg"
            >
              <div className="text-center space-y-4">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-dashed p-2 border-black custom-dashed-border"
                />
                <h3 className="text-2xl text-black font-bold uppercase">
                  {speaker.name}
                </h3>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500">
                    {speaker.role}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-gray-600">
                    {speaker.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          {remainingSpeakers.map((speaker, index) => (
            <div
              key={index + firstTwo.length}
              className="bg-white w-60 p-6 rounded-lg"
            >
              <div className="text-center space-y-4">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-dashed p-2 border-black custom-dashed-border"
                />
                <h3 className="text-2xl text-black font-bold uppercase">
                  {speaker.name}
                </h3>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500">
                    {speaker.role}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-gray-600">
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
