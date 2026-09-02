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
        <StatCard value="api to be call" label="Drives Open" />
        <StatCard value="api to be call" label="Applied" />
        <StatCard value="api to be call" label="Interviews Soon" />
        <StatCard value="api to be call" label="Resume ATS Score" />
      </div>

      <div className="drive-day-control">
        <div>
          <h3>Drive Day Control</h3>
          
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