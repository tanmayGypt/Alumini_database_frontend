import React, { useState } from "react";
import "./AlumniTable.css"; // Import the CSS file

const Alumni_Table = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  const data = [
    {
      "Full name": "John Doe",
      Photo: "https://randomuser.me/api/portraits/men/1.jpg",
      "Class of": 2018,
      Major: "Arts",
      "First name": "John",
      "Last name": "Doe",
      Email: "john.doe@example.edu",
      Phone: "(123) 456-7890",
      Activities: "Greek life",
      Company: "Google",
      "All Donations": "$500",
      "# Interactions": 15,
      "Last Interaction": "2023-05-15",
      Interactions: ["Meeting", "Email", "Phone"],
    },
    {
      "Full name": "Jane Smith",
      Photo: "https://randomuser.me/api/portraits/women/1.jpg",
      "Class of": 2017,
      Major: "MechE",
      "First name": "Jane",
      "Last name": "Smith",
      Email: "jane.smith@example.edu",
      Phone: "(987) 654-3210",
      Activities: "Student gov'",
      Company: "Amazon",
      "All Donations": "$200",
      "# Interactions": 10,
      "Last Interaction": "2023-04-20",
      Interactions: ["Meeting", "Email"],
    },
    {
      "Full name": "Alice Johnson",
      Photo: "https://randomuser.me/api/portraits/women/2.jpg",
      "Class of": 2016,
      Major: "Design",
      "First name": "Alice",
      "Last name": "Johnson",
      Email: "alice.johnson@example.edu",
      Phone: "(555) 123-4567",
      Activities: "Drama Club",
      Company: "Facebook",
      "All Donations": "$300",
      "# Interactions": 12,
      "Last Interaction": "2023-03-10",
      Interactions: ["Email"],
    },
    {
      "Full name": "Bob Brown",
      Photo: "https://randomuser.me/api/portraits/men/2.jpg",
      "Class of": 2015,
      Major: "Chemistry",
      "First name": "Bob",
      "Last name": "Brown",
      Email: "bob.brown@example.edu",
      Phone: "(444) 678-9101",
      Activities: "Sports",
      Company: "Microsoft",
      "All Donations": "$400",
      "# Interactions": 8,
      "Last Interaction": "2023-02-25",
      Interactions: ["Phone"],
    },
    {
      "Full name": "Charlie Davis",
      Photo: "https://randomuser.me/api/portraits/men/3.jpg",
      "Class of": 2014,
      Major: "Biology",
      "First name": "Charlie",
      "Last name": "Davis",
      Email: "charlie.davis@example.edu",
      Phone: "(333) 789-0123",
      Activities: "Music",
      Company: "Apple",
      "All Donations": "$100",
      "# Interactions": 5,
      "Last Interaction": "2023-01-15",
      Interactions: ["Meeting"],
    },
    {
      "Full name": "Eve Wilson",
      Photo: "https://randomuser.me/api/portraits/women/3.jpg",
      "Class of": 2013,
      Major: "Physics",
      "First name": "Eve",
      "Last name": "Wilson",
      Email: "eve.wilson@example.edu",
      Phone: "(222) 345-6789",
      Activities: "Science Club",
      Company: "Tesla",
      "All Donations": "$600",
      "# Interactions": 20,
      "Last Interaction": "2022-12-10",
      Interactions: ["Email", "Phone"],
    },
    {
      "Full name": "Frank Thompson",
      Photo: "https://randomuser.me/api/portraits/men/4.jpg",
      "Class of": 2012,
      Major: "Math",
      "First name": "Frank",
      "Last name": "Thompson",
      Email: "frank.thompson@example.edu",
      Phone: "(111) 234-5678",
      Activities: "Math Club",
      Company: "Netflix",
      "All Donations": "$700",
      "# Interactions": 25,
      "Last Interaction": "2022-11-20",
      Interactions: ["Meeting", "Phone"],
    },
  ];

  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F033FF",
    "#FF33A6",
    "#33FFF0",
    "#FF8C33",
    "#33FF8C",
    "#8C33FF",
    "#FF3333",
  ];

  const getColor = (index) => colors[index % colors.length];

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const filteredData = data.filter((row) =>
    Object.values(row).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const sortedData = filteredData.sort((a, b) => {
    if (sortOption === "name") {
      return a["Full name"].localeCompare(b["Full name"]);
    } else if (sortOption === "class") {
      return a["Class of"] - b["Class of"];
    } else if (sortOption === "major") {
      return a["Major"].localeCompare(b["Major"]);
    }
    else if (sortOption === "company") {
      return a["Company"].localeCompare(b["Company"]);
      

    } else {
      return 0;
    }
  });

  return (
    <div>
      <div className="search-sort-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <select value={sortOption} onChange={handleSortChange}>
          <option value="">Sort By...</option>
          <option value="name">Sort by Name</option>
          <option value="class">Sort by Class</option>
          <option value="major">Sort by Major</option>
          <option value="major">Sort by Company</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Full name</th>
            <th>Photo</th>
            <th>Class of</th>
            <th>Branch</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Activities</th>
            <th>Company</th>
            {/* <th>All Donations</th> */}
            <th>Interactions</th>
            <th>Last Interaction</th>
            <th>Interactions</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row["Full name"]}</td>
              <td>
                <img src={row["Photo"]} alt="Alumni Photo" />
              </td>
              <td>
                <span
                  className="colorful-background"
                  style={{ backgroundColor: getColor(index) }}
                >
                  {row["Class of"]}
                </span>
              </td>
              <td>
                <span
                  className="colorful-background"
                  style={{ backgroundColor: getColor(index + data.length) }}
                >
                  {row["Major"]}
                </span>
              </td>
              <td>{row["First name"]}</td>
              <td>{row["Last name"]}</td>
              <td>{row["Email"]}</td>
              <td>{row["Phone"]}</td>
              <td>
                <span
                  className="colorful-background"
                  style={{ backgroundColor: getColor(index * 2) }}
                >
                  {row["Activities"]}
                </span>
              </td>
              <td>{row["Company"]}</td>
              {/* <td>{row["All Donations"]}</td> */}
              <td>{row["# Interactions"]}</td>
              <td>{row["Last Interaction"]}</td>
              <td>{row["Interactions"].join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Alumni_Table;
