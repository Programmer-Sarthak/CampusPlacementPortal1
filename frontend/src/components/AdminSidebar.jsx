function AdminSidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <h3>Admin</h3>

      <div
        className={`nav-item ${
          activePage === "overview" ? "active" : ""
        }`}
        onClick={() => setActivePage("overview")}
      >
        Overview
      </div>

      <div
        className={`nav-item ${
          activePage === "drives" ? "active" : ""
        }`}
        onClick={() => setActivePage("drives")}
      >
        Manage Drives
      </div>

      <div
        className={`nav-item ${
          activePage === "students" ? "active" : ""
        }`}
        onClick={() => setActivePage("students")}
      >
        Student List
      </div>

      <div
        className={`nav-item ${
          activePage === "shortlist" ? "active" : ""
        }`}
        onClick={() => setActivePage("shortlist")}
      >
        Shortlist / Results
      </div>

      <div
        className={`nav-item ${
          activePage === "announcements" ? "active" : ""
        }`}
        onClick={() => setActivePage("announcements")}
      >
        Announcements
      </div>
    </aside>
  );
}
export default AdminSidebar;