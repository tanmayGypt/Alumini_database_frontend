import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvents } from "../../features/eventSlice"; // Corrected import
import Card from "./Event_card";
import "./test.css";

function Alumni_Eventpage() {
  const dispatch = useDispatch();
  const eventDetails = useSelector((state) => state.events.eventData); // Updated selector
  const status = useSelector((state) => state.events.status); // Updated selector

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEvents());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center bg-gray-100">Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="/eventimage.jpg" alt="Header" className="header-image" />
        <h1>
          UNITE & PROSPER: ALUMNI <span className="highlight">NETWORKING</span>{" "}
          & MENTORSHIP
        </h1>
        <p>
          Explore a vibrant network of alumni connections, mentorship
          opportunities, and career pathways for ongoing professional growth and
          success.
        </p>
      </header>
      <main>
        <section className="events-section">
          <button className="events-button">Events and Reunions</button>
          <div className="events-container">
            {eventDetails.map((event) => (
              <Card
                key={event.id}
                image={event.image}
                title={event.title}
                date={event.date}
                location={event.location}
                link={event.link}
              />
            ))}
          </div>
          <Link to="/Networking_Opportunities/New_eventpage" className="view-more-link">
            <button className="view-more-button p-4">View More</button>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Alumni_Eventpage;
