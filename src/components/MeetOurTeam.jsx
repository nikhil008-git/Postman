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
      twitter: "https://x.com/SaprooShrawan",
      linkedin: "https://www.linkedin.com/in/shrawan513/",
      instagram: "https://www.instagram.com/shrawansaproo/",
    },
    {
      image: man,
      name: "ADITYA BISHT",
      role: "Security Consultant",
      twitter: "https://x.com/adityab894",
      linkedin: "https://www.linkedin.com/in/adityab894/",
      instagram: "https://www.instagram.com/aditya__894/",
    },
    {
      image: man,
      name: "SACHIN PARIHAR",
      role: "Backend Developer",
      twitter: "https://x.com/Sheenu_exe",
      linkedin: "https://www.linkedin.com/in/sachin-parihar-008180264/",
      instagram: "https://www.instagram.com/sachinn.js/",
    },
    {
      image: man,
      name: "NILANJAN PAUL",
      role: "Backend Developer",
      twitter: "",
      linkedin: "https://www.linkedin.com/in/nilanjan-paul21/",
      instagram: "https://www.instagram.com/_nilu343/",
    },
    {
      image: man,
      name: "ERIC FERNANDIS",
      role: "Backend Developer",  
      twitter: "",
      linkedin: "https://www.linkedin.com/in/ericfernandes1681/",
      instagram: "https://www.instagram.com/eric.fernandes11/",
    },
    {
      image: man,
      name: "ATHARVA WANI",
      role: "Backend Developer",
      twitter: "",
      linkedin: "https://www.linkedin.com/in/waniatharva/",
      instagram: "https://www.instagram.com/atharvawani___/",
    },
    {
      image: man,
      name: "KUNAL GAVIT",
      role: "Developer",
      twitter: "",
      linkedin: "https://www.linkedin.com/in/kunal-gavit-1504gk/",
      instagram: "https://www.instagram.com/kunaaaal.gb04/",
    },
    {
      image: man,
      name: "SURESH CHAUDHARY",
      role: "Developer",
      twitter: "https://x.com/suracechoudhary",
      linkedin: "https://www.linkedin.com/in/sschoudhary30/",
      instagram: "https://www.instagram.com/su.race0/",
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
      instagram: "https://www.instagram.com/alicechauhan28/",
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
      linkedin: "https://www.linkedin.com/in/namrata-bhalerao-66417a244/",
      instagram:"https://www.instagram.com/yayynammmrata/",
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
      twitter: "https://x.com/3devArjun",
      linkedin: "https://www.linkedin.com/in/arjunkh/",
      instagram: "https://www.instagram.com/arjunpatil5047",
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
