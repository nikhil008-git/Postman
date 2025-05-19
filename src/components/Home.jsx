import React from "react";
import homeImg from "../assets/homeImg.svg";
import figma from "../assets/figma.jpg";
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin.png";
import notion from "../assets/notion.png";
import peerlist from "../assets/peerlist.png";
import star from "../assets/star.png";
import communityIcon from "../assets/community.png";
import workshopIcon from "../assets/workshop.png";
import partnerIcon from "../assets/partners.png";
import GridBackground from "./GridBackground";

function Home() {
  const partners = [
    { name: "Figma", img: figma },
    { name: "Instagram", img: insta },
    { name: "LinkedIn", img: linkedin },
    { name: "Notion", img: notion },
    { name: "Peerlist", img: peerlist },
    { name: "Figma", img: figma },
    { name: "Instagram", img: insta },
    { name: "LinkedIn", img: linkedin },
    { name: "Notion", img: notion },
    { name: "Peerlist", img: peerlist },
  ];

  const stats = [
    { value: "2000+", label: "Community", icon: communityIcon },
    { value: "45+", label: "Events", icon: communityIcon },
    { value: "20+", label: "Workshops", icon: workshopIcon },
    { value: "5+", label: "Partners", icon: partnerIcon },
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <GridBackground />

      <div className="relative z-10 flex flex-col items-center justify-center mt-10">
        <img
          src={homeImg}
          alt="Postman Hero"
          className="max-wl-[500px] w-ful object-contain"
        />
        <h1 className="mt-10 text-3xl md:text-4xl font-bold text-black">
          POSTMAN Community Pune
        </h1>
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
          <p className="text-black font-bold text-2xl">----OUR PARTNERS----</p>
        </div>
        <div className="overflow-x-hidden relative mt-20">
          <div className="flex animate-scroll-left gap-8 w-max">
            {partners.map(({ name, img }, i) => (
              <img
                key={i}
                src={img}
                alt={name}
                className="h-32 w-32 rounded-xl object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>

        <div className="overflow-x-hidden relative mt-8">
          <div className="flex animate-scroll-right gap-8 w-max">
            {[...partners].reverse().map(({ name, img }, i) => (
              <img
                key={i + partners.length}
                src={img}
                alt={name}
                className="h-32 w-32 rounded-xl object-cover flex-shrink-0"
              />
            ))}
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

            <button
              className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center mx-auto gap-2"
              style={{
                background: "linear-gradient(to right, #fc5e00, #f67c03)",
                border: "solid 1px white",
              }}
            >
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
        <div className="bg-black p-10">
          <div className="max-w-4xl mx-auto py-12 flex flex-col justify-evenly items-start">
            <h6 className="text-orange-600 font-light">FAQ</h6>
            <h1 className="text-white">Frequently Asked Questions</h1>
          </div>
          <div className="flex flex-wrap justify-center items-start gap-2">
            <div className="max-w-4xl mx-auto py-12 flex flex-col items-start bg-amber-600 text-white rounded-2xl p-8">
              <h2>The Best Financial Accounting App Ever</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, mollitia.</p>
            </div>
            <div className="max-w-4xl mx-auto py-12 flex flex-col items-start bg-white text-black rounded-2xl p-8">
              <h2>The Best Financial Accounting App Ever</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, mollitia.</p>
            </div>
            <div className="max-w-4xl mx-auto py-12 flex flex-col items-start bg-white text-black rounded-2xl p-8">
              <h2>The Best Financial Accounting App Ever</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, mollitia.</p>
            </div>
            <div className="max-w-4xl mx-auto py-12 flex flex-col items-start bg-amber-600 text-white rounded-2xl p-8">
              <h2>The Best Financial Accounting App Ever</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, mollitia.</p>
            </div>
            <div className="max-w-4xl mx-auto py-12 flex flex-col items-start bg-amber-600 text-white rounded-2xl p-8">
              <h2>The Best Financial Accounting App Ever</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, mollitia.</p>
            </div>
            <div className="max-w-4xl mx-auto py-12 flex flex-col items-start bg-white text-black rounded-2xl p-8">
              <h2>The Best Financial Accounting App Ever</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, mollitia.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
