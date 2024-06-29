import React, { useState, useEffect, useRef } from "react";

const Alumni_Table = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State for sidebar
  const sidebarRef = useRef(null); // Ref for sidebar

  const data = [
    {
      "Full name": "A",
      Photo: "photo1.jpg",
      "Class of": 2018,
      Major: "Arts",
      "First name": "A",
      "Last name": "B",
      Email: "ABC@example.edu",
      Phone: "(123) 456-7890",
      Activities: "Greek life",
      "Class Captain": "Yes",
      "All Donations": "$500",
      "# Interactions": 15,
      "Last Interaction": "2023-05-15",
      Interactions: ["Meeting", "Email", "Phone"],
    },
    {
      "Full name": "A",
      Photo: "photo1.jpg",
      "Class of": 2017,
      Major: "MechE",
      "First name": "A",
      "Last name": "B",
      Email: "ABC@example.edu",
      Phone: "(123) 456-7890",
      Activities: "Student gov'",
      "Class Captain": "No",
      "All Donations": "$200",
      "# Interactions": 10,
      "Last Interaction": "2023-04-20",
      Interactions: ["Meeting", "Email"],
    },
    {
      "Full name": "A",
      Photo: "photo1.jpg",
      "Class of": 2017,
      Major: "MechE",
      "First name": "A",
      "Last name": "B",
      Email: "ABC@example.edu",
      Phone: "(123) 456-7890",
      Activities: "Student gov'",
      "Class Captain": "No",
      "All Donations": "$200",
      "# Interactions": 10,
      "Last Interaction": "2023-04-20",
      Interactions: ["Meeting", "Email"],
    },
    {
      "Full name": "A",
      Photo: "photo1.jpg",
      "Class of": 2017,
      Major: "MechE",
      "First name": "A",
      "Last name": "B",
      Email: "ABC@example.edu",
      Phone: "(123) 456-7890",
      Activities: "Student gov'",
      "Class Captain": "No",
      "All Donations": "$200",
      "# Interactions": 10,
      "Last Interaction": "2023-04-20",
      Interactions: ["Meeting", "Email"],
    },
    {
      "Full name": "A",
      Photo: "photo1.jpg",
      "Class of": 2017,
      Major: "MechE",
      "First name": "A",
      "Last name": "B",
      Email: "ABC@example.edu",
      Phone: "(123) 456-7890",
      Activities: "Student gov'",
      "Class Captain": "No",
      "All Donations": "$200",
      "# Interactions": 10,
      "Last Interaction": "2023-04-20",
      Interactions: ["Meeting", "Email"],
    },
    {
      "Full name": "A",
      Photo: "photo1.jpg",
      "Class of": 2017,
      Major: "MechE",
      "First name": "A",
      "Last name": "B",
      Email: "ABC@example.edu",
      Phone: "(123) 456-7890",
      Activities: "Student gov'",
      "Class Captain": "No",
      "All Donations": "$200",
      "# Interactions": 10,
      "Last Interaction": "2023-04-20",
      Interactions: ["Meeting", "Email"],
    },
  ];

  const getBgColor = (value) => {
    switch (value.toLowerCase()) {
      case "arts":
        return "#fff";
      case "meche":
        return "#fff";
      case "design":
        return "#fff";
      case "chemistry":
        return "#fff";
      case "biology":
        return "#fff";
      case "physics":
        return "#fff";
      default:
        return "#fff";
    }
  };

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
    } else if (sortOption === "rollNumber") {
      return a["Roll number"] - b["Roll number"];
    } else if (sortOption === "class") {
      return a["Class of"] - b["Class of"];
    } else if (sortOption === "major") {
      return a["Major"].localeCompare(b["Major"]);
    } else {
      return 0;
    }
  });

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div style={{ width: "100%", maxHeight: "100vh" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 2,
          backgroundColor: "white",
          padding: "10px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div className="flex items-center">
          <div className="p-4 text-black">
            <button onClick={toggleSidebar}>
              <svg
                className="w-6 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div
            ref={sidebarRef}
            className={`fixed  inset-y-0 left-0 z-30 transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <div className="w-64 h-full bg-white shadow-md">
              <div className="p-4 mt-20">
                <input
                  type="text"
                  placeholder="Find a view"
                  className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                />
                <div className="space-y-2">
                  <div className="flex items-center px-4 py-2 text-blue-700 bg-blue-100 rounded-md cursor-pointer">
                    <span className="mr-2">📄</span> All alumni
                  </div>
                  <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md">
                    <span className="mr-2">📄</span> Alumni by graduating class
                  </div>
                  <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md">
                    <span className="mr-2">📄</span> Alumni by major
                  </div>
                  <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md">
                    <span className="mr-2">📄</span> Alumni info form
                  </div>
                  <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md">
                    <span className="mr-2">📄</span> Alumni gallery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={{
            padding: "10px",
            width: "300px",
            marginLeft: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <select
          value={sortOption}
          onChange={handleSortChange}
          style={{
            padding: "10px",
            width: "200px",
            marginRight: "60%",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <option value="">Sort By...</option>
          <option value="name">Sort by Name</option>
          <option value="rollNumber">Sort by Roll Number</option>
          <option value="class">Sort by Class</option>
          <option value="major">Sort by Major</option>
        </select>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            minWidth: "100%",
            borderCollapse: "collapse",
            tableLayout: "fixed",
          }}
        >
          <thead>
            <tr style={{backgroundColor: "#a3d3a3",color: "#4a4a4a",textTransform: "uppercase",fontSize: "1rem",fontWeight: "bold"}}>
              <th
                style={{minWidth: "150px",padding: "10px",textAlign: "left",borderBottom: "2px solid #ffcccc",position: "sticky",left: 0,background: "#a3d3a3",zIndex: 1}} >Full name
              </th>
              <th
                style={{minWidth: "100px",padding: "10px",textAlign: "left",borderBottom: "2px solid #ffcccc"}}>Photo
              </th>
              <th
                style={{minWidth: "100px",padding: "10px",textAlign: "left",borderBottom: "2px solid #ffcccc"}}>Class of
              </th>
              <th
                style={{minWidth: "100px",padding: "10px",textAlign: "left",borderBottom: "2px solid #ffcccc"}}>Major
              </th>
              <th
                style={{minWidth: "200px",padding: "10px",textAlign: "left",borderBottom: "2px solid #ffcccc"}}>First name
              </th>
              <th
                style={{ minWidth: "200px",padding: "10px",textAlign: "left",borderBottom: "2px solid #ccc"}}>Last name
              </th>
              <th
                style={{minWidth: "200px",padding: "10px",textAlign: "center",borderBottom: "2px solid #ccc"}}>Email
              </th>
              <th
                style={{minWidth: "200px",padding: "10px",textAlign: "left",borderBottom: "2px solid #ccc"}}>Phone
              </th>
              <th
                style={{minWidth: "150px",padding: "10px",textAlign: "left",borderBottom: "2px solid #ccc"}}>Activities
              </th>
              <th
                style={{minWidth: "150px",padding: "10px",textAlign: "left",borderBottom: "2px solid #ccc"}}>Class Captain
              </th>
              <th
                style={{minWidth: "150px",padding: "10px",textAlign: "left",borderBottom: "2px solid #ccc"}}>All Donations
              </th>
              <th
                style={{minWidth: "200px",padding: "10px",textAlign: "left",borderBottom: "2px solid #ccc"}}># Interactions
              </th>
              <th
                style={{minWidth: "150px",padding: "10px",textAlign: "left",borderBottom: "2px solid #ccc"}}>Last Interaction
              </th>
              <th
                style={{minWidth: "200px",padding: "10px",textAlign: "left",borderBottom: "2px solid #ccc"}}>Interactions
              </th>
            </tr>
          </thead>
          <tbody
            style={{ color: "#4a4a4a", fontSize: "1rem", fontWeight: "bold" }}
          >
            {sortedData.map((row, index) => (
              <tr
                key={index}
                style={{
                  borderBottom: "1px solid #ccc",
                  backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
                }}
              >
                <td
                  style={{
                    minWidth: "150px",
                    padding: "10px",
                    textAlign: "left",
                    borderRight: "1px solid #ccc",
                    position: "sticky",
                    left: 0,
                    background: index % 2 === 0 ? "#f9f9f9" : "#fff",
                    zIndex: 1,
                  }}
                >
                  {row["Full name"]}
                </td>
                <td
                  style={{
                    minWidth: "100px",
                    padding: "10px",
                    textAlign: "left",
                    borderRight: "1px solid #ccc",
                  }}
                >
                  <img
                    src={row["Photo"]}
                    alt={row["Full name"]}
                    style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                  />
                </td>
                <td
                  style={{
                    minWidth: "100px",
                    padding: "10px",
                    textAlign: "left",
                    borderRight: "1px solid #ccc",
                  }}
                >
                  {row["Class of"]}
                </td>
                <td
                  style={{
                    minWidth: "100px",
                    padding: "10px",
                    textAlign: "left",
                    borderRight: "1px solid #ccc",
                    backgroundColor: getBgColor(row["Major"]),
                    borderRadius: "5px",
                  }}
                >
                  {row["Major"]}
                </td>
                <td
                  style={{
                    minWidth: "100px",
                    padding: "10px",
                    textAlign: "left",
                    borderRight: "1px solid #ccc",
                  }}
                >
                  {row["First name"]}
                </td>
                <td
                  style={{
                    minWidth: "100px",
                    padding: "10px",
                    textAlign: "left",
                    borderRight: "1px solid #ccc",
                  }}
                >
                  {row["Last name"]}
                </td>
                <td
                  style={{
                    minWidth: "150px",
                    padding: "10px",
                    textAlign: "left",
                    borderRight: "1px solid #ccc",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  <a
                    href={"mailto:" + row["Email"]}
                    style={{ color: "#0066cc", textDecoration: "none" }}
                  >
                    {row["Email"]}
                  </a>
                </td>
                <td
                  style={{
                    minWidth: "100px",
                    padding: "10px",
                    textAlign: "left",
                    borderRight: "1px solid #ccc",
                  }}
                >
                  {row["Phone"]}
                </td>
                <td
                  style={{
                    minWidth: "150px",
                    padding: "10px",
                    textAlign: "left",
                    borderRight: "1px solid #ccc",
                    backgroundColor: getBgColor(row["Activities"]),
                    borderRadius: "5px",
                  }}
                >
                  {row["Activities"]}
                </td>
                <td
                  style={{
                    minWidth: "150px",
                    padding: "10px",
                    textAlign: "left",
                    borderRight: "1px solid #ccc",
                    backgroundColor: getBgColor(row["Class Captain"]),
                    borderRadius: "5px",
                  }}
                >
                  {row["Class Captain"]}
                </td>
                <td
                  style={{
                    minWidth: "150px",
                    padding: "10px",
                    textAlign: "left",
                    borderRight: "1px solid #ccc",
                  }}
                >
                  {row["All Donations"]}
                </td>
                <td
                  style={{
                    minWidth: "100px",
                    padding: "10px",
                    textAlign: "left",
                    borderRight: "1px solid #ccc",
                  }}
                >
                  {row["# Interactions"]}
                </td>
                <td
                  style={{
                    minWidth: "150px",
                    padding: "10px",
                    textAlign: "left",
                    borderRight: "1px solid #ccc",
                  }}
                >
                  {row["Last Interaction"]}
                </td>
                <td
                  style={{
                    minWidth: "200px",
                    padding: "10px",
                    textAlign: "left",
                    borderRight: "1px solid #ccc",
                  }}
                >
                  <ul
                    style={{ padding: "0", margin: "0", listStyleType: "none" }}
                  >
                    {row["Interactions"].map((interaction, idx) => (
                      <li
                        key={idx}
                        style={{
                          backgroundColor: "#e6f7ff",
                          borderRadius: "5px",
                          padding: "5px",
                          marginBottom: "5px",
                        }}
                      >
                        {interaction}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alumni_Table;