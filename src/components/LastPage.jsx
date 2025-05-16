import React from "react";
import Postman from "../assets/last.png";
import speaker from "../assets/callForSpeaker.png";
import sponser from '../assets/callForSponsers.png';
import GridBackground from "./GridBackground";

function LastPage() {
  return (
    <div className="relative w-screen min-h-screen bg-white overflow-hidden">
      <GridBackground />
      <div className="relative z-10">
        <div className="flex w-full justify-center items-center mt-20">
          <img src={Postman} alt="" className="h-auto w-auto" />
        </div>

        <div className="m-20 flex flex-wrap justify-center gap-8 lg:gap-12">
          <div className="w-full max-w-[400px] border-2 border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow bg-white relative z-20">
            <div className="h-64 bg-green-100 border-b-2 border-gray-200 relative">
              <img
                src={speaker}
                alt="Call for Speakers"
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div className="p-6 bg-white">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Call For Speakers</h2>
              <p className="text-gray-600 mb-6">
                Share your expertise with Postman community. Submit your proposal to speak at our event.
              </p>
              <button className="w-full bg-orange-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-orange-600 transition-colors">
                Call For Speakers
              </button>
            </div>
          </div>
          <div className="w-full max-w-[400px] border-2 border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow bg-white relative z-20">
            <div className="h-64 bg-red-100 border-b-2 border-gray-200 relative">
              <img
                src={sponser}
                alt="Call for Sponsors"
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div className="p-6 bg-white">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Call For Sponsors</h2>
              <p className="text-gray-600 mb-6">
                Support our event and connect with the Postman community. Explore our sponsorship packages.
              </p>
              <button className="w-full bg-orange-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-orange-600 transition-colors">
                Call For Sponsors
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastPage;