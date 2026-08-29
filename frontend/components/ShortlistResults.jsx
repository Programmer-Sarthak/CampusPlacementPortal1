function ShortlistResults() {
  return (
    <div>
      <div className="page-title">
        Shortlist / Results
      </div>

      <div className="page-sub">
        Manage nominee lists, interview sequence and final results per drive
      </div>

      <div className="card">

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "14px"
          }}
        >
          <div>
            <div className="card-title">
              TCS Drive — Nominee List
            </div>

            <div
              style={{
                fontSize: "12px",
                color: "var(--muted)",
                marginTop: "2px"
              }}
            >
              Drive date: 26 May 2026
            </div>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <button className="btn btn-outline btn-sm">
              <i className="ti ti-download"></i>
              Download List
            </button>

            <button className="btn btn-primary btn-sm">
              <i className="ti ti-upload"></i>
              Update List
            </button>
          </div>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Student</th>
                <th>Roll No.</th>
                <th>CGPA</th>
                <th>Interview Slot</th>
                <th>Round Status</th>
                <th>Final</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>1</td>
                <td>Vanshika Sharma</td>
                <td>2021CSE042</td>
                <td>9.1</td>
                <td>9:00 AM</td>
                <td>
                  <span className="badge badge-success">
                    Cleared
                  </span>
                </td>
                <td>
                  <span className="badge badge-success">
                    Selected
                  </span>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>Rahul Agrawal</td>
                <td>2021CSE001</td>
                <td>8.4</td>
                <td>9:30 AM</td>
                <td>
                  <span className="badge badge-warn">
                    Pending
                  </span>
                </td>
                <td>—</td>
              </tr>

              <tr>
                <td>3</td>
                <td>Ayushi Jain</td>
                <td>2021CSE078</td>
                <td>8.0</td>
                <td>10:00 AM</td>
                <td>
                  <span className="badge badge-warn">
                    Pending
                  </span>
                </td>
                <td>—</td>
              </tr>

              <tr>
                <td>4</td>
                <td>Piyush Gupta</td>
                <td>2021IT010</td>
                <td>7.8</td>
                <td>10:30 AM</td>
                <td>
                  <span className="badge badge-danger">
                    On Hold
                  </span>
                </td>
                <td>—</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>


      <div className="two-col">

        <div className="card">
          <div
            className="card-title"
            style={{ marginBottom: "12px" }}
          >
            Drive Day Controls
          </div>

          <div className="toggle-row">
            <span className="toggle-label">
              Attendance taking mode
            </span>
            <div className="toggle"></div>
          </div>

          <div className="toggle-row">
            <span className="toggle-label">
              Interview sequence locked
            </span>
            <div className="toggle off"></div>
          </div>

          <div className="toggle-row">
            <span className="toggle-label">
              Results published to students
            </span>
            <div className="toggle off"></div>
          </div>

          <div
            className="toggle-row"
            style={{ borderBottom: "none" }}
          >
            <span className="toggle-label">
              Drive closed for further applies
            </span>
            <div className="toggle"></div>
          </div>
        </div>


        <div className="card">
          <div
            className="card-title"
            style={{ marginBottom: "12px" }}
          >
            Actions
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}
          >
            <button className="btn btn-primary">
              <i className="ti ti-check"></i>
              Mark Attendance
            </button>

            <button className="btn btn-outline">
              <i className="ti ti-list-numbers"></i>
              Set Interview Sequence
            </button>

            <button className="btn btn-success">
              <i className="ti ti-send"></i>
              Publish Final Results
            </button>

            <button className="btn btn-outline">
              <i className="ti ti-download"></i>
              Download Nominee PDF
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
export default ShortlistResults;