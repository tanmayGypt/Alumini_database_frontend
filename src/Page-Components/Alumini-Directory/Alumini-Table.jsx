import React from "react";

const Alumini_Table = () => {
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
        return "#e6f7ff";
      case "meche":
        return "#e6ffe6";
      case "design":
        return "#ffe6f2";
      case "chemistry":
        return "#ffffe6";
      case "biology":
        return "#ffe6e6";
      case "physics":
        return "#f2f2f2";
      default:
        return "#f2f2f2";
    }
  };

  return (
    <div
      style={{
        margin: "auto",
        width: "100%",
        overflowX: "auto",
        maxHeight: "100vh",
        overflowY: "hidden",
      }}
    >
      <table
        style={{
          minWidth: "100%",
          borderCollapse: "collapse",
          tableLayout: "fixed",
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#a3d3a3",
              color: "#4a4a4a",
              textTransform: "uppercase",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            <th
              style={{
                minWidth: "150px",
                padding: "10px",
                textAlign: "left",
                borderBottom: "2px solid #ffcccc",
                position: "sticky",
                left: 0,
                background: "#a3d3a3",
                zIndex: 1,
              }}
            >
              Full name
            </th>
            <th
              style={{
                minWidth: "100px",
                padding: "10px",
                textAlign: "left",
                borderBottom: "2px solid #ffcccc",
              }}
            >
              Photo
            </th>
            <th
              style={{
                minWidth: "100px",
                padding: "10px",
                textAlign: "left",
                borderBottom: "2px solid #ffcccc",
              }}
            >
              Class of
            </th>
            <th
              style={{
                minWidth: "100px",
                padding: "10px",
                textAlign: "left",
                borderBottom: "2px solid #ffcccc",
              }}
            >
              Major
            </th>
            <th
              style={{
                minWidth: "200px",
                padding: "10px",
                textAlign: "left",
                borderBottom: "2px solid #ffcccc",
              }}
            >
              First name
            </th>
            <th
              style={{
                minWidth: "200px",
                padding: "10px",
                textAlign: "left",
                borderBottom: "2px solid #ccc",
              }}
            >
              Last name
            </th>
            <th
              style={{
                minWidth: "200px",
                padding: "10px",
                textAlign: "center",
                borderBottom: "2px solid #ccc",
              }}
            >
              Email
            </th>
            <th
              style={{
                minWidth: "200px",
                padding: "10px",
                textAlign: "left",
                borderBottom: "2px solid #ccc",
              }}
            >
              Phone
            </th>
            <th
              style={{
                minWidth: "150px",
                padding: "10px",
                textAlign: "left",
                borderBottom: "2px solid #ccc",
              }}
            >
              Activities
            </th>
            <th
              style={{
                minWidth: "150px",
                padding: "10px",
                textAlign: "left",
                borderBottom: "2px solid #ccc",
              }}
            >
              Class Captain
            </th>
            <th
              style={{
                minWidth: "150px",
                padding: "10px",
                textAlign: "left",
                borderBottom: "2px solid #ccc",
              }}
            >
              All Donations
            </th>
            <th
              style={{
                minWidth: "200px",
                padding: "10px",
                textAlign: "left",
                borderBottom: "2px solid #ccc",
              }}
            >
              # Interactions
            </th>
            <th
              style={{
                minWidth: "150px",
                padding: "10px",
                textAlign: "left",
                borderBottom: "2px solid #ccc",
              }}
            >
              Last Interaction
            </th>
            <th
              style={{
                minWidth: "200px",
                padding: "10px",
                textAlign: "left",
                borderBottom: "2px solid #ccc",
              }}
            >
              Interactions
            </th>
          </tr>
        </thead>
        <tbody
          style={{ color: "#4a4a4a", fontSize: "1rem", fontWeight: "bold" }}
        >
          {data.map((row, index) => (
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
  );
};

export default Alumini_Table;
