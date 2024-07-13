import React from "react";
import { Link } from "react-router-dom";
import Card from "./Event_card";
import SearchBar from "../Alumini-Achievements/SearchBar";
import eventDetails from "./eventDetails";

function New_eventpage() {
  return (
    <div className="py-12 px-4 md:px-8">
      <header className="App-header mb-8 text-center">
        <img src="/eventimage.jpg" alt="Header" className="header-image mt-8 mb-4" />
        <h1>
          CONNECT & GROW: ALUMNI <span className="highlight">EVENTS</span>{" "}
          & MENTORSHIP
        </h1>
        <p className="mb-4">
          Embark on an enriching journey through our vibrant alumni events,
          offering a gateway to reconnect, engage in mentorship opportunities,
          and explore diverse career pathways, fostering ongoing professional
          growth and success.
        </p>
      </header>
      <div className="flex justify-center mt-8 mb-8">
        <SearchBar className="w-full max-w-lg" />
      </div>
      <main>
        <section className="events-section text-center">
          <button className="events-button mb-8 mx-auto block">Events and Reunions</button>
          <div className="flex flex-wrap justify-center md:justify-between">
            {eventDetails.map((event, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2">
                <Link
                  to={`/Networking_Opportunities/EventDetailsPage?eventId=${event.id}`}
                  className="view-more-link"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                

                
                  <Card
                    image={event.image}
                    title={event.title}
                    date={event.date}
                    location={event.location}
                  />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default New_eventpage;
