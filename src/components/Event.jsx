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
      <div className="relative z-10 max-w-6xl mx-auto my-20 flex flex-col items-center justify-center">
        <h2 className="text-4xl text-black font-bold text-center mb-12 uppercase border-b-2 border-black pb-4">
          EVENT
        </h2>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-gray-50 text-black flex flex-col justify-center items-center gap-2">
            <div className="flex flex-row gap-2"> 
              <div className="w-1/2">
                <img src={memory} alt="Memory" className="w-90 h-40 rounded-lg object-cover" />
              </div>
              <div>
                <img src={ghibli} alt="Ghibli" className="w-90 h-40 rounded-lg object-cover" />
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div>
                <img src={postmanGhibli} alt="Postman Ghibli" className="rounded-lg object-cover" />
              </div>
              <div>
                <img src={G} alt="G" className="rounded-lg object-cover" />
              </div>
              <div>
                <img src={gummie} alt="Gummie" className="rounded-lg object-cover" />
              </div>
            </div>
            <img src={memory} alt="Memory" className="h-40 w-full rounded-lg object-cover" />
          </div>

          <div className=" bg-white text-black flex flex-row justify-center items-center rounded-2xl mt-4 shadow-lg">
            <div className="bg-orange-500 text-black flex flex-col justify-center items-center p-6 rounded-2xl ml-4">
              <h4>2025</h4>
              <h1>06</h1>
              <h4>JAN</h4>
            </div>
            <div className="text-black flex flex-col justify-center items-start p-6 border-r-2 border-gray-600">
              <div className="font-bold">POSTMAN @ Jun 2024</div>
              <div className="text-sm">
                Share your expertise with postman community. Submit your
                proposal to speak at our event.
              </div>
            </div>
            <div className="flex flex-col justify-center items-center p-6">
              <div className="flex flex-col justify-center items-center p-6">
                <div className="flex flex-row gap-2">
                  <CalendarDays />
                  <h2>POSTMAN @ Jun 2024</h2>
                </div>
                <div className="flex flex-row gap-2">
                  <TicketMinus />
                  <h2>POSTMAN @ Jun 2024</h2>
                </div>
                <div className="flex flex-row gap-2">
                  <MapPin />
                  <h2>POSTMAN @ Jun 2024</h2>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center text-white p-6 gap-2">
                <button>Go to Detail</button>
                <button>Register</button>
              </div>
            </div>
          </div>
          <div className=" bg-white text-black flex flex-row justify-center items-center rounded-2xl mt-4 shadow-lg">
            <div className="bg-orange-500 text-black flex flex-col justify-center items-center p-6 rounded-2xl ml-4">
              <h4>2025</h4>
              <h1>06</h1>
              <h4>JAN</h4>
            </div>
            <div className="text-black flex flex-col justify-center items-start p-6 border-r-2 border-gray-600">
              <div className="font-bold">POSTMAN @ Jun 2024</div>
              <div className="text-sm">
                Share your expertise with postman community. Submit your
                proposal to speak at our event.
              </div>
            </div>
            <div className="flex flex-col justify-center items-center p-6">
              <div className="flex flex-col justify-center items-center p-6">
                <div className="flex flex-row gap-2">
                  <CalendarDays />
                  <h2>POSTMAN @ Jun 2024</h2>
                </div>
                <div className="flex flex-row gap-2">
                  <TicketMinus />
                  <h2>POSTMAN @ Jun 2024</h2>
                </div>
                <div className="flex flex-row gap-2">
                  <MapPin />
                  <h2>POSTMAN @ Jun 2024</h2>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center text-white p-6 gap-2">
                <button>Go to Detail</button>
                <button>Register</button>
              </div>
            </div>
          </div>
          <div className=" bg-white text-black flex flex-row justify-center items-center rounded-2xl mt-4 shadow-lg">
            <div className="bg-orange-500 text-black flex flex-col justify-center items-center p-6 rounded-2xl ml-4">
              <h4>2025</h4>
              <h1>06</h1>
              <h4>JAN</h4>
            </div>
            <div className="text-black flex flex-col justify-center items-start p-6 border-r-2 border-gray-600">
              <div className="font-bold">POSTMAN @ Jun 2024</div>
              <div className="text-sm">
                Share your expertise with postman community. Submit your
                proposal to speak at our event.
              </div>
            </div>
            <div className="flex flex-col justify-center items-center p-6">
              <div className="flex flex-col justify-center items-center p-6">
                <div className="flex flex-row gap-2">
                  <CalendarDays />
                  <h2>POSTMAN @ Jun 2024</h2>
                </div>
                <div className="flex flex-row gap-2">
                  <TicketMinus />
                  <h2>POSTMAN @ Jun 2024</h2>
                </div>
                <div className="flex flex-row gap-2">
                  <MapPin />
                  <h2>POSTMAN @ Jun 2024</h2>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center text-white p-6 gap-2">
                <button>Go to Detail</button>
                <button>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
