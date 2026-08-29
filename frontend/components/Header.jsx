function Header({ panel, setPanel }) {
  return (
    <header className="header">

      <div className="logo-badge">
        IPS
      </div>

      <div className="header-title">
        Placement Portal
      </div>

      <div className="header-nav">

        <button
          className={`nav-pill ${
            panel === "student" ? "active" : ""
          }`}
          onClick={() => setPanel("student")}
        >
          Student Panel
        </button>

        <button
          className={`nav-pill ${
            panel === "admin" ? "active" : ""
          }`}
          onClick={() => setPanel("admin")}
        >
          Admin Panel
        </button>

      </div>

      <div className="user-chip">

        <div className="avatar">
          {panel === "admin" ? "AD" : "RA"}
        </div>

        <div>
          <div>
            {panel === "admin" ? "Admin" : "Rahul A."}
          </div>

          <small>
            {panel === "admin"
              ? "Administrator"
              : "Student"}
          </small>
        </div>

      </div>

    </header>
  );
}
export default Header;