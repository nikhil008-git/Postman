import React from "react";
import homeImg from "../assets/homeImg.png";
import Navbar from "./Navbar";
import figma from "../assets/figma.jpg";
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin.png";
import notion from "../assets/notion.png";
import peerlist from "../assets/peerlist.png";

function Home() {
  const partners = [
    { name: "Figma", img: figma },
    { name: "Instagram", img: insta },
    { name: "LinkedIn", img: linkedin },
    { name: "Notion", img: notion },
    { name: "Peerlist", img: peerlist },
  ];

  const stats = [
    { value: "2000+", label: "Community" },
    { value: "45+", label: "Event Organized" },
    { value: "20+", label: "Workshops" },
    { value: "5+", label: "Global Partners" },
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ccc_1px,transparent_1px),linear-gradient(to_bottom,#ccc_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 mask-fade"
        aria-hidden="true"
      ></div>
      <Navbar />

      <div className="relative z-10 flex flex-col items-center justify-center mt-10 px-4">
        <img
          src={homeImg}
          alt="Postman Hero"
          className="max-w-[500px] w-full object-contain"
        />
        <h1 className="mt-10 text-3xl md:text-4xl font-bold text-black">
          POSTMAN Community Pune
        </h1>
        <div className="mt-20 text-center">
          <div className="transform rotate-[3deg] bg-orange-500 text-white font-bold text-2xl px-10 py-6 rounded-xl shadow-lg w-screen text-center">
            POSTMAN COMMUNITY PUNE
          </div>
        </div>
        <div className="mt-20 text-center">
          <p className="text-black font-bold text-2xl">----OUR PARTNERS----</p>
        </div>
        <div className="overflow-x-hidden relative mt-20">
          <div className="flex animate-scroll-left gap-8 w-max">
            {partners.map(({ name, img }, i) => (
              <img
                key={i}
                src={img}
                alt={name}
                className="h-24 w-24 rounded-xl object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>

        <div className="overflow-x-hidden relative mt-8">
          <div className="flex animate-scroll-right gap-8 w-max">
            {partners.map(({ name, img }, i) => (
              <img
                key={i + partners.length}
                src={img}
                alt={name}
                className="h-24 w-24 rounded-xl object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>
        <div className="mt-20 max-screen mx-auto px-4 flex flex-row items-center">
          <div className="w-full max-w-[600px]">
            <h2 className="text-3xl font-bold text-black mb-8">
              Building the API Community in Pune
            </h2>

            <p className="text-sm text-gray-700 mb-6">
              We at Postman Community Pune are passionate about API education,
              collaboration, and innovation. Our goal is to bring together
              developers, students, and professionals to learn, build, and grow
              in the API ecosystem.
            </p>

            <p className="text-sm text-gray-700 mb-8">
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
                  className="flex flex-col flex-left items-center justify-center text-lg"
                >
                  <span className="mr-2 font-bold text-black">
                    Knowledge Sharing
                  </span>
                  <span className="text-sm text-gray-700">
                    Learn from industry experts and share your expertise with
                    others
                  </span>
                </div>
              ))}
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center mx-auto gap-2">
              Learn More About Us →
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl font-bold text-black">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="my-20 text-center">
          <div className="transform rotate-[3deg] bg-orange-500 text-white font-bold text-2xl px-10 py-6 rounded-xl shadow-lg w-screen text-center">
            POSTMAN COMMUNITY PUNE
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
