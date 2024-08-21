import React from "react";
import SummaryCard from "./SummaryCard";
import CustomTable from "./CustomTable";

const MainDashboard = () => {
  const cardData = [
    {
      title: "Status",
      value: "Critical",
      description: "Current Status of Site",
      color: "#e74c3c",
    },
    {
      title: "Source",
      value: "Grid",
      description: "Current Source of Power",
      color: "#27ae60",
    },
    {
      title: "Estimated Backup",
      value: "9.45hr",
      description: "Current Battery Backup Available",
      color: "#27ae60",
    },
    {
      title: "Fuel Level",
      value: "Oltr",
      description: "Fuel level below threshold",
      color: "#e74c3c",
    },
    {
      title: "Site Load",
      value: "0kW",
      description: "Current Site Load",
      color: "#f39c12",
    },
  ];

  return (
    <div className="dashboard-container" style={{ padding: "20px", backgroundColor:'#f9f9f9', height:'100vh'}}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {cardData.map((card, index) => (
          <SummaryCard
            key={index}
            title={card.title}
            value={card.value}
            description={card.description}
            color={card.color}
          />
        ))}
      </div>

      <div style={{marginTop:15}}>
        <CustomTable />
      </div>
    </div>
  );
};

export default MainDashboard;
