import React from "react";
import man from "../assets/man.jpg";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import alisha from '../assets/team/alisha.jpg';

const MeetOurTeam = () => {
  const speakers = [
    {
      image: man,
      name: "SHRAWAN SAPROO",
      role: "Backend Developer",
      twitter: "",
      linkedin: "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADfR-JwB5U9ILOlJ1yvDr_9G9OCts9hQfGQ&keywords=shrawan%20saproo&origin=RICH_QUERY_SUGGESTION&position=1&searchId=e8eb35f7-28b8-454e-ba67-7c46f9f43d54&sid=e9B&spellCorrectionEnabled=false",
      instagram: "https://www.instagram.com/shrawansaproo/?hl=en",
    },
    {
      image: man,
      name: "ADITYA BISHT",
      role: "Security Consultant",
      twitter: "",
      linkedin: "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAACd2D1EBkV2DxfgKD-ujVfA_GNYxttDP1DY&keywords=aditya%20bisht&origin=RICH_QUERY_SUGGESTION&position=0&searchId=0fd15c89-a4a2-429f-a915-6b4760949a12&sid=Ul6&spellCorrectionEnabled=false",
      instagram: "https://www.instagram.com/aditya__894/?hl=en",
    },
    {
      image: man,
      name: "SACHIN PARIHAR",
      role: "Backend Developer",
      twitter: "",
      linkedin: "",
      instagram: "https://www.instagram.com/sachinn.js/?hl=en",
    },
    {
      image: man,
      name: "NILANJAN PAUL",
      role: "Backend Developer",
      twitter: "",
      linkedin: "",
      instagram: "",
    },
    {
      image: man,
      name: "ERIC FERNANDIS",
      role: "Backend Developer",
      twitter: "",
      linkedin: "",
      instagram: "",
    },
    {
      image: man,
      name: "ATHARVA WANI",
      role: "Backend Developer",
      twitter: "",
      linkedin: "",
      instagram: "",
    },
    {
      image: man,
      name: "KUNAL GAVIT",
      role: "Developer",
      twitter: "",
      linkedin: "",
      instagram: "",
    },
    {
      image: man,
      name: "SURESH CHAUDHARY",
      role: "Developer",
      twitter: "",
      linkedin: "",
      instagram: "",
    },
    {
      image: alisha,
      name: "ALISHA SAPKAL",
      role: "Frontend Developer",
      twitter: "",
      linkedin: "",
      instagram: "",
    },
    {
      image: man,
      name: "AMAN MOGAL",
      role: "Developer",
      twitter: "",
      linkedin: "",
      instagram: "",
    },
    {
      image: man,
      name: "ALICE CHAUHAN",
      role: "Developer",
      twitter: "",
      linkedin: "",
      instagram: "",
    },
    {
      image: man,
      name: "NIKHIL RAJPUROHIT",
      role: "Developer",
      twitter: "",
      linkedin: "",
      instagram: "",
    },
    {
      image: man,
      name: "NAMRATA",
      role: "Developer",
      twitter: "",
      linkedin: "",
      instagram: "",
    },
    {
      image: man,
      name: "KAUSHAL ABOJWAR",
      role: "Developer",
      twitter: "",
      linkedin: "",
      instagram: "",
    },
    {
      image: man,
      name: "ARJUN KHADSE",
      role: "Developer",
      twitter: "",
      linkedin: "",
      instagram: "",
    },
    {
      image: man,
      name: "MAYURI SURYAWANSHI",
      role: "Developer",
      twitter: "",
      linkedin: "",
      instagram: "",
    },
    {
      image: man,
      name: "RUTUJA CHAUDHARI",
      role: "Developer",
      twitter: "",
      linkedin: "",
      instagram: "",
    },
  ];

  const firstTwo = speakers.slice(0, 2);
  const remainingSpeakers = speakers.slice(2);

  return (
    <div className="relative w-screen min-h-screen bg-white overflow-hidden">
      {/* <GridBackground /> */}
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto my-20 flex flex-col items-center justify-center">
        <h2 className="text-4xl text-black font-bold text-center mb-12 uppercase border-b-2 border-black pb-4">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8 justify-items-center">
          {firstTwo.map((speaker, index) => (
            <div key={index} className="bg-white w-90 h-100 p-6 rounded-lg">
              <div className="text-center space-y-4">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-40 h-40 rounded-full mx-auto object-cover border-2 border-dashed p-2 border-black custom-dashed-border"
                />
                <h3 className="text-xl text-black font-bold uppercase">
                  {speaker.name}
                </h3>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500">
                    {speaker.role}
                  </p>
                  <div className="flex flex-row items-start justify-center gap-2">
                    <a
                      href={speaker.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiTwitter className="w-5 h-5 text-gray-500 hover:text-gray-600" />
                    </a>
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineLinkedin className="w-5 h-5 text-gray-500 hover:text-gray-600" />
                    </a>
                    <a
                      href={speaker.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="w-5 h-5 text-gray-500 hover:text-gray-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          {remainingSpeakers.map((speaker, index) => (
            <div
              key={index + firstTwo.length}
              className="bg-white w-90 h-100 p-6 rounded-lg"
            >
              <div className="text-center space-y-4">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-40 h-40 rounded-full mx-auto object-cover border-2 border-dashed p-2 border-black custom-dashed-border"
                />
                <h3 className="text-xl text-black font-bold uppercase">
                  {speaker.name}
                </h3>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500">
                    {speaker.role}
                  </p>
                  <div className="flex flex-row items-start justify-center gap-2">
                    <a
                      href={speaker.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiTwitter className="w-5 h-5 text-gray-500 hover:text-gray-600" />
                    </a>
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineLinkedin className="w-5 h-5 text-gray-500 hover:text-gray-600" />
                    </a>
                    <a
                      href={speaker.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="w-5 h-5 text-gray-500 hover:text-gray-600" />
                    </a>
                  </div>
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
