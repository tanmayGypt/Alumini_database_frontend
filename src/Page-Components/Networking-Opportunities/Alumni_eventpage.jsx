import { Link } from "react-router-dom";
import "./test.css";
import Card from "./Event_card";
import { useSelector } from "react-redux";

function Alumini_Eventpage() {
  const eventDetails = useSelector((state) => state.event.eventData);

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
            {eventDetails.map((event, index) => (
              <Card
                key={index}
                image={event.image}
                title={event.title}
                date={event.date}
                location={event.location}
                link={`/event/${event.id}`}
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

export default Alumini_Eventpage;
