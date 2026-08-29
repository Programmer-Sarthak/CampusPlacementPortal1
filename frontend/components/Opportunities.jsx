function Opportunities() {
  return (
    <div>
      <div className="page-title">
        Placement Opportunities
      </div>

      <div className="page-sub">
        All upcoming campus & pool campus drives you're eligible for
      </div>

      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "16px"
        }}
      >
        <input
          placeholder="Search company or role..."
          style={{
            flex: 1,
            padding: "8px 12px",
            border: ".5px solid var(--border)",
            borderRadius: "8px",
            fontSize: "13px"
          }}
        />

        <select
          style={{
            padding: "8px 10px",
            border: ".5px solid var(--border)",
            borderRadius: "8px",
            fontSize: "13px"
          }}
        >
          <option>All Drives</option>
          <option>Open</option>
          <option>Upcoming</option>
          <option>Pool Campus</option>
        </select>
      </div>

      <div className="drives-grid">

        <div className="drive-card open">
          <div className="drive-company">
            Tata Consultancy Services
          </div>

          <div className="drive-meta">
            <div className="drive-meta-row">
              <i className="ti ti-briefcase"></i>
              Software Engineer
            </div>

            <div className="drive-meta-row">
              <i className="ti ti-cash"></i>
              ₹3.6 – 6.5 LPA
            </div>

            <div className="drive-meta-row">
              <i className="ti ti-git-branch"></i>
              CSE, IT, ECE
            </div>

            <div className="drive-meta-row">
              <i className="ti ti-school"></i>
              Min CGPA 7.0 · No backlog
            </div>
          </div>

          <div className="drive-footer">
            <span className="badge badge-success">
              Open
            </span>

            <button className="btn btn-primary btn-sm">
              Apply Now
            </button>
          </div>
        </div>


        <div className="drive-card open">
          <div className="drive-company">
            Infosys
          </div>

          <div className="drive-meta">
            <div className="drive-meta-row">
              <i className="ti ti-briefcase"></i>
              Systems Engineer
            </div>

            <div className="drive-meta-row">
              <i className="ti ti-cash"></i>
              ₹3.6 LPA
            </div>

            <div className="drive-meta-row">
              <i className="ti ti-git-branch"></i>
              All Branches
            </div>

            <div className="drive-meta-row">
              <i className="ti ti-school"></i>
              Min CGPA 6.5 · No backlog
            </div>
          </div>

          <div className="drive-footer">
            <span className="badge badge-success">
              Open
            </span>

            <button className="btn btn-primary btn-sm">
              Apply Now
            </button>
          </div>
        </div>


        <div className="drive-card open">
          <div className="drive-company">
            Wipro
          </div>

          <div className="drive-meta">
            <div className="drive-meta-row">
              <i className="ti ti-briefcase"></i>
              Project Engineer
            </div>

            <div className="drive-meta-row">
              <i className="ti ti-cash"></i>
              ₹3.5 – 5.0 LPA
            </div>

            <div className="drive-meta-row">
              <i className="ti ti-git-branch"></i>
              All Branches
            </div>

            <div className="drive-meta-row">
              <i className="ti ti-school"></i>
              Min CGPA 6.0 · No backlog
            </div>
          </div>

          <div className="drive-footer">
            <span className="badge badge-success">
              Open
            </span>

            <button className="btn btn-primary btn-sm">
              Apply Now
            </button>
          </div>
        </div>


        <div className="drive-card">
          <div className="drive-company">
            Cognizant
          </div>

          <div className="drive-meta">
            <div className="drive-meta-row">
              <i className="ti ti-briefcase"></i>
              Programmer Analyst
            </div>

            <div className="drive-meta-row">
              <i className="ti ti-cash"></i>
              ₹4.0 – 6.0 LPA
            </div>

            <div className="drive-meta-row">
              <i className="ti ti-git-branch"></i>
              CSE, IT
            </div>

            <div className="drive-meta-row">
              <i className="ti ti-school"></i>
              Min CGPA 6.5 · No backlog
            </div>
          </div>

          <div className="drive-footer">
            <span className="badge badge-gray">
              Upcoming
            </span>

            <button className="btn btn-primary btn-sm">
              Apply Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
export default Opportunities;