import React, { useState, useEffect } from "react";

const EarningsDashboard = () => {               //earnings dashboard
  const [courtEarnings, setCourtEarnings] = useState([
    { name: "Central Park Court", revenue: 5000 },
    { name: "Harlem Ballers Court", revenue: 3500 },
    { name: "Queens Playcourt", revenue: 4200 },
    { name: "Montreal Court", revenue: 3700 },
  ]);

  const totalEarnings = courtEarnings.reduce((sum, court) => sum + court.revenue, 0);

  //css styles to make this better
  const styles = {
    container: {
      padding: "21px",
      border: "2px solid #ddd",
      borderRadius: "10px",
      background: "#fff",
      maxWidth: "500px",
      margin: "21px auto",
      boxShadow: "0 4px 8px rgba(41, 41, 41, 0.1)",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "12px",
    },
    thTd: {
      border: "2px solid #ddd",
      padding: "10px",
      textAlign: "left",
    },
    th: {
      backgroundColor: "#f4f4f4",
      fontWeight: "bold italic",
    },
    barContainer: {
      background: "#eee",
      margin: "6px 0",
      borderRadius: "5px",
      overflow: "hidden",
      height: "32px",
    },
    bar: {
      background: "#4caf50",
      color: "white",
      padding: "6px",
      textAlign: "right",
      borderRadius: "5px",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      fontWeight: "bold italic",
    },
  };

  return (
    <div style={styles.container}>
      <h2>Court Earnings Dashboard</h2>         {/*title for the earning dashboard*/}
      <p><strong>Total Earnings:</strong> ${totalEarnings.toLocaleString()}</p>         {/*total earnings of the courts*/}

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={{ ...styles.thTd, ...styles.th }}>Basketball Court</th>
            <th style={{ ...styles.thTd, ...styles.th }}>Revenue ($)</th>
          </tr>
        </thead>
        <tbody>
          {courtEarnings.map((court, index) => (
            <tr key={index}>
              <td style={styles.thTd}>{court.name}</td>         {/*court name*/}
              <td style={styles.thTd}>${court.revenue.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        {courtEarnings.map((court, index) => (
          <div key={index} style={styles.barContainer}>
            <div
              style={{
                ...styles.bar,
                width: `${(court.revenue / totalEarnings) * 100}%`,
              }}
            >
              {court.name} (${court.revenue.toLocaleString()})
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarningsDashboard;
