import { Link } from "react-router-dom";
import Card from "./Event_card";
import SearchBar from "../Alumini-Achievements/SearchBar";
import eventDetails from "./eventDetails";

function New_eventpage() {
  // Calculate width dynamically based on number of cards per row
  const cardWidth = `${100 / 4}%`; // 4 cards per row

  return (
    <div className="py-12 px-4 md:px-8"> {/* Added padding for general spacing */}
      <header className="App-header mb-8 text-center"> {/* Added margin bottom for header */}
        <img src="/eventimage.jpg" alt="Header" className="header-image mt-8 mb-4" /> {/* Adjusted margin top and bottom for image */}
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
      <SearchBar className="mt-8 mb-8 pr-4" /> {/* Added padding right class */}
      <main>
        <section className="events-section text-center"> {/* Centered content */}
          <button className="events-button mb-8 mx-auto">Events and Reunions</button> {/* Centered and added bottom margin for the button */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between", // Adjust alignment as needed
            }}
          >
            {eventDetails.map((event, index) => (
              <div key={index} style={{ width: cardWidth, marginBottom: "20px" }}>
                <Card
                  image={event.image}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  link={event.link}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default New_eventpage;
