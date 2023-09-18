import React, { useState } from "react";

function getDate() {
  const today = new Date();
  const month = today.toLocaleString("en-us", {
    month: "short",
  });
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}/${month}/${year}`;
}

function TodayDate() {
  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <div>
      <h3 className="text-end text-white pt-5" style={{ letterSpacing: 1.5 }}>
        <em>{currentDate}</em>
      </h3>
    </div>
  );
}

export default TodayDate;
