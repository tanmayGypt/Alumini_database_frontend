import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvents } from "../../features/eventSlice"; // Corrected import

function EventDetailsPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const eventId = parseInt(queryParams.get("eventId"), 10);

  const dispatch = useDispatch();
  const eventDetails = useSelector((state) => state.event.eventData); // Updated selector
  const status = useSelector((state) => state.event.status); // Updated selector
  const event = eventDetails.find((event) => event.id === eventId);

  useEffect(() => {
    if (!event && status === 'idle') {
      dispatch(fetchEvents());
    }
  }, [eventId, event, status, dispatch]);

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center bg-gray-100">Loading...</div>;
  }

  if (!event) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-100">Event not found</div>;
  }

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-100">
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 object-contain rounded-md mb-4"
        />
        <p className="text-lg mb-2">
          <span className="font-semibold">Date:</span> {event.date}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Location:</span> {event.location}
        </p>
        <p className="text-lg mb-4">
          <span className="font-semibold">Description:</span> {event.description}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Event Type:</span> {event.eventType}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Mode of Event:</span> {event.modeOfEvent}
        </p>
        <div className="flex justify-center mt-4">
          <Link
            to="/Networking_Opportunities/RegisterPage"
            className="inline-block px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventDetailsPage;
