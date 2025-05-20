import React, { useRef } from "react";
import star from "../assets/star.png";
import communityIcon from "../assets/community.png";
import workshopIcon from "../assets/workshop.png";
import partnerIcon from "../assets/partners.png";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import {
  MessageSquare,
  ChevronsLeftRight,
  Package,
  Database,
} from "lucide-react";
import digitalOcean from "../assets/partners/digitalOcean.svg";
import kotlin from "../assets/partners/kotlin.svg";
import devDisplay from "../assets/partners/devDisplay.svg";
import GDSC from "../assets/partners/gdsc.svg";
import girlInTech from "../assets/partners/girlInTech.svg";
import MLH from "../assets/partners/MLH.svg";
import puneDAO from "../assets/partners/puneDAO.svg";
import spheron from "../assets/partners/spheron.svg";
import Email from "./Email";

function Home() {
  const partners = [
    { name: "devDisplay", img: devDisplay },
    { name: "digitalOcean", img: digitalOcean },
    { name: "spheron", img: spheron },
    { name: "kotlin", img: kotlin },
    { name: "GDSC", img: GDSC },
    { name: "girlInTech", img: girlInTech },
    { name: "MLH", img: MLH },
    { name: "devDisplay", img: devDisplay },
    { name: "digitalOcean", img: digitalOcean },
    { name: "spheron", img: spheron },
    { name: "kotlin", img: kotlin },
    { name: "puneDAO", img: puneDAO },
    { name: "devDisplay", img: devDisplay },
    { name: "GDSC", img: GDSC },
    { name: "girlInTech", img: girlInTech },
    { name: "MLH", img: MLH },
    { name: "puneDAO", img: puneDAO },
  ];

  const stats = [
    { value: "2000+", label: "Community", icon: communityIcon },
    { value: "45+", label: "Events", icon: communityIcon },
    { value: "20+", label: "Workshops", icon: workshopIcon },
    { value: "5+", label: "Partners", icon: partnerIcon },
  ];

  const available = [
    {
      icon: <MessageSquare />,
      label: "Online Forums",
      description: "Engage in discussions with peers",
    },
    {
      icon: <ChevronsLeftRight />,
      label: "Collaboration",
      description: "Work together on open-source projects",
    },
    {
      icon: <Package />,
      label: "Resources",
      description: "Access exclusive learning materials",
    },
    {
      icon: <Database />,
      label: "Job Board",
      description: "Find API-related career opportunities",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* <GridBackground /> */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center mx-auto">
          <div className="w-full flex flex-row items-center bg-gray-50 rounded-t-2xl p-3 mb-1 gap-4">
            <div className="flex flex-row gap-2">
              <div className="h-4 w-4 bg-red-600 rounded-full"></div>
              <div className="h-4 w-4 bg-yellow-500 rounded-full"></div>
              <div className="h-4 w-4 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-black font-bold text-lg text-center pl-4">
              <span className="text-orange-600">POSTMAN</span> Community Pune
            </div>
          </div>

          <div className="w-180 h-2"></div>

          <div className="flex flex-row items-center gap-2 px-4 py-6 mb-2">
            <div className="w-138 flex flex-row items-center justify-around gap-2 border border-black rounded-md px-4 py-2 font-bold text-black bg-white">
              <div className="flex items-center gap-2 border-r-2 border-gray-200 pr-2">
                <span>POST</span>
                <IoIosArrowDown className="h-3 w-3 text-gray-400" />
              </div>
              <div className="w-100">
                <span className="text-orange-600">POSTMAN</span> Community Pune
              </div>
            </div>
            <div className="h-10 w-25 font-semibold flex flex-row items-center justify-around gap-2 bg-blue-600">
              <div>Send</div>
              <IoIosArrowDown className="h-3 w-3 text-white" />
            </div>
          </div>
          {/* ............................................................................................... */}
          <div className="w-165 flex flex-row text-sm border-1 border-black px-4 text-gray-700 rounded-sm mb-2">
            <div className="w-10.5 h-8 border-r border-black"></div>
            <div className="w-46.5 h-8 border-r border-black pl-2">Key</div>
            <div className="w-77 h-8 pl-2 border-r border-black">Value</div>
            <div className="w-24 h-8 text-center flex justify-end gap-2 text-gray-400">
              <BsThreeDots className="h-5 w-5" />
              <span>Bulk Edit</span>
            </div>
          </div>

          {[
            { key: "Community", value: "POSTMAN Pune" },
            { key: "Member", value: "2000" },
            {
              key: "Focus",
              value: '["API Development", "Testing", "Collaboration"]',
            },
            { key: "Fastest-growing-community", value: "True" },
            { key: "Join", value: "True" },
          ].map((row, idx) => (
            <div
              key={row.key}
              className="flex flex-row border-1 border-black px-4 mb-2 rounded-sm text-gray-700 text-sm"
            >
              <div className="w-10 h-8 border-r-1 border-black"></div>
              <div className="w-46 h-8 border-r-1 border-black text-left text-gray-700 pl-2">
                {row.key}
              </div>
              <div className="w-76 h-8 border-r-1 border-black text-left text-gray-700 pl-2">
                {row.value}
              </div>
              <div className="w-24 h-8 flex justify-end gap-2 text-gray-400">
                <BsThreeDots className="h-5 w-5" />
                <span>Bulk Edit</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="flex justify-evenly flex-row items-center transform rotate-[3deg] bg-orange-500 text-white font-bold text-2xl px-10 rounded-xl shadow-lg w-screen text-center gap-20">
            <img className="inline-block h-16 w-10" src={star} alt="Star" />{" "}
            <div className="mr-2 font-bold text-white">POSTMAN</div>{" "}
            <img className="inline-block h-16 w-10" src={star} alt="Star" />{" "}
            <div className="mr-2 font-bold text-white">COMMUNITY</div>{" "}
            <img className="inline-block h-16 w-10" src={star} alt="Star" />{" "}
            <div className="mr-2 font-bold text-white">PUNE</div>{" "}
            <img className="inline-block h-16 w-10" src={star} alt="Star" />
          </div>
        </div>
        <div className="mt-20 text-center">
          <p className="text-black font-bold text-3xl">----OUR PARTNERS----</p>
        </div>

        <div className="mt-20 flex flex-col gap-8 w-full justify-center">
          <div className="overflow-x-hidden relative w-[1300px] ml-30">
            <div className="flex animate-scroll-left gap-8 w-max">
              {partners.map(({ name, img }, i) => (
                <img
                  key={i}
                  src={img}
                  alt={name}
                  className="h-42 w-42 rounded-xl object-cover flex-shrink-0 p-4"
                />
              ))}
              {partners.map(({ name, img }, i) => (
                <img
                  key={i + partners.length}
                  src={img}
                  alt={name}
                  className="h-42 w-42 rounded-xl object-cover flex-shrink-0 p-4"
                />
              ))}
            </div>
          </div>
          <div className="overflow-x-hidden relative w-[1300px] ml-30">
            <div className="flex animate-scroll-right gap-8 w-max">
              {partners.map(({ name, img }, i) => (
                <img
                  key={i}
                  src={img}
                  alt={name}
                  className="h-42 w-42 rounded-xl object-cover flex-shrink-0 p-4"
                />
              ))}
              {partners.map(({ name, img }, i) => (
                <img
                  key={i + partners.length}
                  src={img}
                  alt={name}
                  className="h-42 w-42 rounded-xl object-cover flex-shrink-0 p-4"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 mx-auto px-4 flex flex-col md:flex-row justify-center items-stretch gap-8 lg:gap-20">
          <div className="flex-1 min-h-[600px] max-w-[800px] bg-white rounded-2xl shadow-xl p-8">
            <h2
              id="about"
              className="text-3xl font-bold text-black mb-8 scroll-mt-24"
            >
              Building the API Community in Pune
            </h2>

            <p className="text-sm text-gray-700 mb-6 text-justify">
              We at Postman Community Pune are passionate about API education,
              collaboration, and innovation. Our goal is to bring together
              developers, students, and professionals to learn, build, and grow
              in the API ecosystem.
            </p>

            <p className="text-sm text-gray-700 mb-8 text-justify">
              Through workshops, hackathons, and hands-on coding sessions, we
              provide a platform for enhancing API skills, networking with
              industry experts, and staying updated with the latest trends in
              API development. Whether you're a beginner or an experienced
              developer, our community is here to support and inspire you on
              your journey.
            </p>

            <div className="space-y-4 mb-12">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col items-start p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center mb-2 gap-2">
                    <div className="bg-orange-400 rounded-full h-4 w-4"></div>
                    <span className="font-bold text-black">
                      Knowledge Sharing
                    </span>
                  </div>
                  <span className="text-sm text-gray-700 text-justify">
                    Learn from industry experts and share your expertise with
                    others
                  </span>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-orange-700 to-orange-400 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center mx-auto gap-2">
              Learn More About Us →
            </button>
          </div>
          <div className="flex-1 justify-center mt-44 text-center h-100 max-w-[600px] bg-gray-900 rounded-2xl shadow-xl p-8 grid grid-cols-2 gap-2">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 h-42 flex flex-col items-center justify-start shadow-md 
                   hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className="h-16 w-16 mb-4 object-contain"
                />
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-700 text-center">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 text-center py-20">
          <div className="flex justify-evenly flex-row items-center transform rotate-[3deg] bg-orange-500 text-white font-bold text-2xl px-10 rounded-xl shadow-lg w-screen text-center gap-20">
            <img className="inline-block h-16 w-10" src={star} alt="Star" />{" "}
            <div className="mr-2 font-bold text-white">POSTMAN</div>{" "}
            <img className="inline-block h-16 w-10" src={star} alt="Star" />{" "}
            <div className="mr-2 font-bold text-white">COMMUNITY</div>{" "}
            <img className="inline-block h-16 w-10" src={star} alt="Star" />{" "}
            <div className="mr-2 font-bold text-white">PUNE</div>{" "}
            <img className="inline-block h-16 w-10" src={star} alt="Star" />
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-2 mt-20 mb-10 m-10">
          <div className="w-3/5">
            <div className="w-full flex flex-col justify-center items-start text-black mt-10">
              <div className="w-50 rounded-full bg-gradient-to-r from-orange-700 to-orange-400 text-white text-center text-sm font-bold py-4 m-2">
                Join Our Community
              </div>
              <h1 className="w-full my-2">
                Become Part of the
                <span className="text-orange-500"> API Revolution</span>
              </h1>
              <p className="w-4/5 my-2">
                Join our growing community of developers, testers, and API
                enthusiasts. Share knowledge collaborate on projects, and stay
                updated with the latest trends in API development.
              </p>
              <div></div>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-start text-black mt-10">
              {/* <MessageSquare className="w-6 h-6 text-orange-500" /> */}
              {available.map((item, index) => (
                <div key={index} className="flex items-center gap-2 mb-4">
                  <div className="text-orange-500">{item.icon}</div>
                  <div>
                    <h3 className="text-black text-lg font-semibold">
                      {item.label}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Email />
        </div>
      </div>
    </div>
  );
}

export default Home;
