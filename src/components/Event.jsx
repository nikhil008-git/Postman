import React from "react";
import { CalendarDays, TicketMinus, MapPin } from "lucide-react";
import memory from '../assets/event/memory.jpg';
import ghibli from '../assets/event/ghibli.jpg';
import postmanGhibli from '../assets/event/postmanGhibli.jpg';
import G from '../assets/event/G.png';
import gummie from '../assets/event/gummie.jpg';

function Event() {
  return (
    <div className="relative w-screen min-h-screen bg-white overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-6 sm:my-10 flex flex-col items-center justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold text-center mb-8 sm:mb-12 uppercase border-b-2 border-black pb-2 sm:pb-4">
          EVENT
        </h2>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="bg-gray-50 text-black flex flex-col justify-center items-center gap-2 w-full">
            <div className="flex flex-col sm:flex-row gap-2 w-full"> 
              <div className="w-full sm:w-1/2">
                <img src={memory} alt="Memory" className="w-full h-32 sm:h-40 rounded-lg object-cover" />
              </div>
              <div className="w-full sm:w-1/2">
                <img src={ghibli} alt="Ghibli" className="w-full h-32 sm:h-40 rounded-lg object-cover" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <div className="w-full sm:w-1/3">
                <img src={postmanGhibli} alt="Postman Ghibli" className="w-full h-32 sm:h-40 rounded-lg object-cover" />
              </div>
              <div className="w-full sm:w-1/3">
                <img src={G} alt="G" className="w-full h-32 sm:h-40 rounded-lg object-cover" />
              </div>
              <div className="w-full sm:w-1/3">
                <img src={gummie} alt="Gummie" className="w-full h-32 sm:h-40 rounded-lg object-cover" />
              </div>
            </div>
            <img src={memory} alt="Memory" className="w-full h-32 sm:h-40 rounded-lg object-cover" />
          </div>

          <div className="bg-white text-black flex flex-col sm:flex-row justify-center items-center rounded-2xl mt-4 shadow-lg gap-2 m-2 w-full">
            <div className="bg-orange-400 text-black flex flex-col justify-center items-center p-4 sm:p-6 rounded-2xl w-full sm:w-auto mx-2">
              <h4 className="text-sm sm:text-base">2025</h4>
              <h1 className="text-2xl sm:text-3xl font-bold">06</h1>
              <h4 className="text-sm sm:text-base">JAN</h4>
            </div>
            <div className="h-auto sm:h-40 text-black flex flex-col justify-center items-start p-4 sm:p-6 border-b-2 sm:border-b-0 sm:border-r-2 border-gray-600 w-full">
              <div className="font-bold text-sm sm:text-base">POSTMAN @ Jun 2024</div>
              <div className="text-xs sm:text-sm">
                Share your expertise with postman community. Submit your
                proposal to speak at our event.
              </div>
            </div>
            <div className="flex flex-col justify-center items-center p-4 sm:p-6 gap-4 sm:gap-6 w-full">
              <div className="flex flex-col justify-center items-start sm:items-center px-4 sm:px-6 gap-2 w-full">
                <div className="flex flex-row gap-2 items-center">
                  <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5" />
                  <h2 className="text-xs sm:text-sm">POSTMAN @ Jun 2024</h2>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <TicketMinus className="w-4 h-4 sm:w-5 sm:h-5" />
                  <h2 className="text-xs sm:text-sm">POSTMAN @ Jun 2024</h2>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  <h2 className="text-xs sm:text-sm">POSTMAN @ Jun 2024</h2>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center px-4 sm:px-6 gap-2 w-full">
                <button className="w-full bg-black text-white text-xs sm:text-sm py-2 px-4 rounded-md hover:bg-gray-800 transition-colors">Go to Detail</button>
                <button className="w-full sm:w-auto bg-gray-100 text-black text-xs sm:text-sm py-2 px-4 rounded-md hover:bg-gray-200 transition-colors">Register</button>
              </div>
            </div>
          </div>

          <div className="bg-white text-black flex flex-col sm:flex-row justify-center items-center rounded-2xl mt-4 shadow-lg gap-2 m-2 w-full">
            <div className="bg-orange-400 text-black flex flex-col justify-center items-center p-4 sm:p-6 rounded-2xl w-full sm:w-auto mx-2">
              <h4 className="text-sm sm:text-base">2025</h4>
              <h1 className="text-2xl sm:text-3xl font-bold">06</h1>
              <h4 className="text-sm sm:text-base">JAN</h4>
            </div>
            <div className="h-auto sm:h-40 text-black flex flex-col justify-center items-start p-4 sm:p-6 border-b-2 sm:border-b-0 sm:border-r-2 border-gray-600 w-full">
              <div className="font-bold text-sm sm:text-base">POSTMAN @ Jun 2024</div>
              <div className="text-xs sm:text-sm">
                Share your expertise with postman community. Submit your
                proposal to speak at our event.
              </div>
            </div>
            <div className="flex flex-col justify-center items-center p-4 sm:p-6 gap-4 sm:gap-6 w-full">
              <div className="flex flex-col justify-center items-start sm:items-center px-4 sm:px-6 gap-2 w-full">
                <div className="flex flex-row gap-2 items-center">
                  <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5" />
                  <h2 className="text-xs sm:text-sm">POSTMAN @ Jun 2024</h2>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <TicketMinus className="w-4 h-4 sm:w-5 sm:h-5" />
                  <h2 className="text-xs sm:text-sm">POSTMAN @ Jun 2024</h2>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  <h2 className="text-xs sm:text-sm">POSTMAN @ Jun 2024</h2>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center px-4 sm:px-6 gap-2 w-full">
                <button className="w-full bg-black text-white text-xs sm:text-sm py-2 px-4 rounded-md hover:bg-gray-800 transition-colors">Go to Detail</button>
                <button className="w-full sm:w-auto bg-gray-100 text-black text-xs sm:text-sm py-2 px-4 rounded-md hover:bg-gray-200 transition-colors">Register</button>
              </div>
            </div>
          </div>

          <div className="bg-white text-black flex flex-col sm:flex-row justify-center items-center rounded-2xl mt-4 shadow-lg gap-2 m-2 w-full">
            <div className="bg-orange-400 text-black flex flex-col justify-center items-center p-4 sm:p-6 rounded-2xl w-full sm:w-auto mx-2">
              <h4 className="text-sm sm:text-base">2025</h4>
              <h1 className="text-2xl sm:text-3xl font-bold">06</h1>
              <h4 className="text-sm sm:text-base">JAN</h4>
            </div>
            <div className="h-auto sm:h-40 text-black flex flex-col justify-center items-start p-4 sm:p-6 border-b-2 sm:border-b-0 sm:border-r-2 border-gray-600 w-full">
              <div className="font-bold text-sm sm:text-base">POSTMAN @ Jun 2024</div>
              <div className="text-xs sm:text-sm">
                Share your expertise with postman community. Submit your
                proposal to speak at our event.
              </div>
            </div>
            <div className="flex flex-col justify-center items-center p-4 sm:p-6 gap-4 sm:gap-6 w-full">
              <div className="flex flex-col justify-center items-start sm:items-center px-4 sm:px-6 gap-2 w-full">
                <div className="flex flex-row gap-2 items-center">
                  <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5" />
                  <h2 className="text-xs sm:text-sm">POSTMAN @ Jun 2024</h2>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <TicketMinus className="w-4 h-4 sm:w-5 sm:h-5" />
                  <h2 className="text-xs sm:text-sm">POSTMAN @ Jun 2024</h2>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  <h2 className="text-xs sm:text-sm">POSTMAN @ Jun 2024</h2>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center px-4 sm:px-6 gap-2 w-full">
                <button className="w-full bg-black text-white text-xs sm:text-sm py-2 px-4 rounded-md hover:bg-gray-800 transition-colors">Go to Detail</button>
                <button className="w-full sm:w-auto bg-gray-100 text-black text-xs sm:text-sm py-2 px-4 rounded-md hover:bg-gray-200 transition-colors">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
