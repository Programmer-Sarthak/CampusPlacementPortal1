function ManageDrives() {
  return (
    <div>
      <div className="page-title">
        Manage Drives
      </div>

      <div className="page-sub">
        Add, update or delete campus / pool campus drives
      </div>

      <div className="card">
        <div className="card-header">
          <div className="card-title">
            Add / Edit Drive
          </div>
        </div>

        <div className="form-grid">

          <div className="form-group">
            <label>Company Name</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Role / Position</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>CTC (LPA)</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Drive Type</label>
            <select>
              <option>On-Campus</option>
              <option>Pool Campus</option>
            </select>
          </div>

          <div className="form-group">
            <label>Drive Date</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Last Apply Date</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Min CGPA</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Max Backlogs</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Eligible Branches</label>
            <select>
              <option>CSE</option>
              <option>IT</option>
              <option>ECE</option>
              <option>ME</option>
              <option>BBA</option>
              <option>All</option>
            </select>
          </div>

          <div className="form-group">
            <label>Upload JD (PDF)</label>
            <input type="file" accept=".pdf" />
          </div>

          <div className="form-group" style={{ gridColumn: "1 / -1" }}>
            <label>Additional Notes</label>
            <textarea rows="4"></textarea>
          </div>

        </div>

        <div
          style={{
            display: "flex",
            gap: "8px",
            marginTop: "16px"
          }}
        >
          <button className="btn btn-primary">
            Save Drive
          </button>

          <button className="btn btn-outline">
            Clear
          </button>
        </div>
      </div>


      <div className="card">

        <div className="card-header">
          <div className="card-title">
            All Drives
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Role</th>
                <th>Drive Date</th>
                <th>Eligible</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>TCS</td>
                <td>Software Engineer</td>
                <td>26 May 2026</td>
                <td>CSE, IT, ECE</td>
                <td>
                  <span className="badge badge-success">
                    Active
                  </span>
                </td>
                <td>
                  <button className="btn btn-outline btn-sm">
                    Edit
                  </button>
                  <button
                    className="btn btn-outline btn-sm"
                    style={{ marginLeft: "6px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>


              <tr>
                <td>Infosys</td>
                <td>Systems Engineer</td>
                <td>28 May 2026</td>
                <td>All</td>
                <td>
                  <span className="badge badge-success">
                    Active
                  </span>
                </td>
                <td>
                  <button className="btn btn-outline btn-sm">
                    Edit
                  </button>
                  <button
                    className="btn btn-outline btn-sm"
                    style={{ marginLeft: "6px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>


              <tr>
                <td>Wipro</td>
                <td>Project Engineer</td>
                <td>2 Jun 2026</td>
                <td>CSE, IT</td>
                <td>
                  <span className="badge badge-warn">
                    Upcoming
                  </span>
                </td>
                <td>
                  <button className="btn btn-outline btn-sm">
                    Edit
                  </button>
                  <button
                    className="btn btn-outline btn-sm"
                    style={{ marginLeft: "6px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>


              <tr>
                <td>HCL</td>
                <td>GET</td>
                <td>10 May 2026</td>
                <td>All</td>
                <td>
                  <span className="badge badge-gray">
                    Closed
                  </span>
                </td>
                <td>
                  <button className="btn btn-outline btn-sm">
                    Edit
                  </button>
                  <button
                    className="btn btn-outline btn-sm"
                    style={{ marginLeft: "6px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
export default ManageDrives;