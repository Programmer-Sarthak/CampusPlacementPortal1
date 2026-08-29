import { useState } from "react";
import StatCard from "./StatCard";
import PlacementInfo from "./PlacementInfo";
import RecentNotifications from "./RecentNotifications";
import UpcomingCalendar from "./UpcomingCalendar";

function StudentDashboard() {
  const [driveDay, setDriveDay] = useState(true);

  return (
    <div>
      <div className="page-title">
        Good morning, Rahul 
      </div>

      <div className="page-sub">
        B.Tech CSE - AIML — 2025 batch · CGPA 8.1 · No active backlogs
      </div>

      <div className="stats-grid">
        <StatCard value="6" label="Drives Open" />
        <StatCard value="4" label="Applied" />
        <StatCard value="2" label="Interviews Soon" />
        <StatCard value="78%" label="Resume ATS Score" />
      </div>

      ///* Drive Day Control 
      <div className="drive-day-control">
        <div>
          <h3>Drive Day Control</h3>
          <p>
            {driveDay ? "Drive Day is currently ON" : "Drive Day is currently OFF"}
          </p>
        </div>

        <button
          className={`toggle-switch ${driveDay ? "on" : ""}`}
          onClick={() => setDriveDay(!driveDay)}
        >
          <span className="toggle-circle"></span>
        </button>
      </div>

      <div className="two-col">
        <div>
          <PlacementInfo />
          <RecentNotifications />
        </div>

        <UpcomingCalendar />
      </div>
    </div>
  );
}
export default StudentDashboard;