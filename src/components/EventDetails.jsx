import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function EventDetails() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:5002/api/events/${eventId}`);
        setEvent(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!event) return <div>Event not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">{event.description}</p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="font-semibold">Date</h3>
                <p>{new Date(event.date).toLocaleDateString()}</p>
              </div>
              <div>
                <h3 className="font-semibold">Time</h3>
                <p>{event.time}</p>
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p>{event.location}</p>
              </div>
              <div>
                <h3 className="font-semibold">Organizer</h3>
                <p>{event.organizer}</p>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full">Register for Event</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Register for {event.title}</DialogTitle>
                  <DialogDescription>
                    Fill out the form below to register for this event.
                  </DialogDescription>
                </DialogHeader>
                {/* Add registration form here */}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;