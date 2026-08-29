function Sidebar({
  activePage,
  setActivePage,
  setPanel
}) {
  return (
    <aside className="sidebar">

      <h3>
        Student
      </h3>


      <div
        className={`nav-item ${
          activePage === "dashboard"
            ? "active"
            : ""
        }`}
        onClick={() =>
          setActivePage("dashboard")
        }
      >
        Dashboard
      </div>


      <div
        className={`nav-item ${
          activePage === "opportunities"
            ? "active"
            : ""
        }`}
        onClick={() =>
          setActivePage("opportunities")
        }
      >
        Opportunities
      </div>


      <div
        className={`nav-item ${
          activePage === "applications"
            ? "active"
            : ""
        }`}
        onClick={() =>
          setActivePage("applications")
        }
      >
        My Applications
      </div>


      <div
        className={`nav-item ${
          activePage === "resume"
            ? "active"
            : ""
        }`}
        onClick={() =>
          setActivePage("resume")
        }
      >
        Resume Builder
      </div>


      <div
        className={`nav-item ${
          activePage === "grievance"
            ? "active"
            : ""
        }`}
        onClick={() =>
          setActivePage("grievance")
        }
      >
        Grievance
      </div>

    </aside>
  );
}
export default Sidebar;