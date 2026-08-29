function AdminOverview() {
  return (
    <div>
      <div className="page-title">
        Admin Overview
      </div>

      <div className="page-sub">
        Central Placement — IPS Academy · B.Tech (CSE, IT, ECE) + BBA
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <div
            className="stat-icon"
            style={{ background: "#e8f0f9" }}
          >
            <i
              className="ti ti-users"
              style={{ color: "#2d6ab4" }}
            ></i>
          </div>

          <div className="stat-value">
            842
          </div>

          <div className="stat-label">
            Total Students
          </div>

          <div
            className="stat-trend"
            style={{ color: "var(--muted)" }}
          >
            All branches
          </div>
        </div>


        <div className="stat-card">
          <div
            className="stat-icon"
            style={{ background: "#dcfce7" }}
          >
            <i
              className="ti ti-building-factory"
              style={{ color: "#16a34a" }}
            ></i>
          </div>

          <div className="stat-value">
            18
          </div>

          <div className="stat-label">
            Companies This Year
          </div>

          <div
            className="stat-trend"
            style={{ color: "var(--success)" }}
          >
            <i className="ti ti-arrow-up"></i>{" "}
            3 from last year
          </div>
        </div>


        <div className="stat-card">
          <div
            className="stat-icon"
            style={{ background: "#fef3c7" }}
          >
            <i
              className="ti ti-star"
              style={{ color: "#d97706" }}
            ></i>
          </div>

          <div className="stat-value">
            312
          </div>

          <div className="stat-label">
            Students Placed
          </div>

          <div
            className="stat-trend"
            style={{ color: "var(--success)" }}
          >
            35% placement rate
          </div>
        </div>


        <div className="stat-card">
          <div
            className="stat-icon"
            style={{ background: "#fce7f3" }}
          >
            <i
              className="ti ti-calendar-event"
              style={{ color: "#be185d" }}
            ></i>
          </div>

          <div className="stat-value">
            3
          </div>

          <div className="stat-label">
            Active Drives
          </div>

          <div
            className="stat-trend"
            style={{ color: "var(--muted)" }}
          >
            2 closing soon
          </div>
        </div>

      </div>


    
      <div className="two-col">

      
        <div className="card">

          <div className="card-header">
            <div className="card-title">
              Branch-wise Placements
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "13px",
                  marginBottom: "4px"
                }}
              >
                <span>B.Tech CSE</span>
                <span style={{ fontWeight: 500 }}>
                  148 / 210
                </span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>


            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "13px",
                  marginBottom: "4px"
                }}
              >
                <span>B.Tech IT</span>
                <span style={{ fontWeight: 500 }}>
                  82 / 130
                </span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "63%" }}
                ></div>
              </div>
            </div>


            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "13px",
                  marginBottom: "4px"
                }}
              >
                <span>BBA</span>
                <span style={{ fontWeight: 500 }}>
                  52 / 160
                </span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: "33%",
                    background: "var(--warn)"
                  }}
                ></div>
              </div>
            </div>


            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "13px",
                  marginBottom: "4px"
                }}
              >
                <span>B.Tech ECE</span>
                <span style={{ fontWeight: 500 }}>
                  30 / 90
                </span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: "33%",
                    background: "var(--warn)"
                  }}
                ></div>
              </div>
            </div>

          </div>
        </div>


        <div className="card">

          <div className="card-header">
            <div className="card-title">
              Quick Actions
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px"
            }}
          >

            <button className="btn btn-primary">
              <i className="ti ti-plus"></i>
              Add Drive
            </button>

            <button className="btn btn-outline">
              <i className="ti ti-users"></i>
              View Students
            </button>

            <button className="btn btn-outline">
              <i className="ti ti-speakerphone"></i>
              Announce
            </button>

            <button className="btn btn-outline">
              <i className="ti ti-list-check"></i>
              Shortlist
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}
export default AdminOverview;